import { Plugin, PluginKey } from 'tiptap'
import { Decoration, DecorationSet } from 'prosemirror-view'
import { findBlockNodes } from 'prosemirror-utils'
import Prism from 'prismjs'
import languages from '../data/languages'

function getDecorations (doc, name) {
  const decorations = []
  const blocks = findBlockNodes(doc).filter(item => item.node.type.name === name)
  const flatten = list => list.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), [])

  function parseNodes (nodes, className = []) {
    return nodes.map(node => {
      const classes = [
        ...className
      ]
      let content = node
      if (typeof node !== 'string') {
        classes.push('token', node.type)
        node.alias && classes.push(node.alias)
        content = node.content
      }

      if (Array.isArray(node.content) && node.content.length) {
        return parseNodes(node.content, classes)
      }

      return {
        text: content,
        classes
      }
    })
  }

  blocks.forEach(block => {
    let startPos = block.pos + 1
    let language = block.node.attrs.language
    let grammar = Prism.languages.markup
    language = language || 'markup'
    if (languages.includes(language)) {
      grammar = Prism.languages[language]
    }
    const nodes = Prism.tokenize(block.node.textContent, grammar)
    flatten(parseNodes(nodes)).map(node => {
      const from = startPos
      const to = from + node.text.length

      startPos = to

      return {
        ...node,
        from,
        to
      }
    }).forEach(node => {
      const decoration = Decoration.inline(node.from, node.to, {
        class: node.classes.join(' ')
      })
      decorations.push(decoration)
    })
  })
  return DecorationSet.create(doc, decorations)
}

export default function PrismPlugin ({ name }) {
  return new Plugin({
    name: new PluginKey('prism'),
    state: {
      init: (_, { doc }) => {
        return getDecorations(doc, name)
      },
      apply: (transaction, decorationSet, oldState, newState) => {
        // TODO: find way to cache decorations
        // https://discuss.prosemirror.net/t/how-to-update-multiple-inline-decorations-on-node-change/1493
        const oldNodeName = oldState.selection.$head.parent.type.name
        const newNodeName = newState.selection.$head.parent.type.name
        const oldNodes = findBlockNodes(oldState.doc).filter(item => item.node.type.name === name)
        const newNodes = findBlockNodes(newState.doc).filter(item => item.node.type.name === name)
        // Apply decorations if selection includes named node, or transaction changes named node.
        if (transaction.docChanged && ([oldNodeName, newNodeName].includes(name) || newNodes.length !== oldNodes.length)) {
          return getDecorations(transaction.doc, name)
        }
        return decorationSet.map(transaction.mapping, transaction.doc)
      }
    },
    props: {
      decorations (state) {
        return this.getState(state)
      }
    }
  })
}
