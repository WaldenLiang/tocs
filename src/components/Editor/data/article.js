/**
 * Data: Editor
 *
 * @author Micle Bu, micle@oriovo.com
 * @version 1.0
 * @date 2020.04.11
 */
export const BasicFeaturesArticle = `
<h1>quasar-tiptap</h1><h2 id="d5fb3c" level="2">Introduction</h2><p data-text-align="center"><strong><em><span style="color: #1890ff">Quasar Tiptap Editor</span></em></strong>&nbsp;is a WYSIWYG rich-text editor built on top of <span style="font-family: Arial Black">tiptap</span>&nbsp;and Quasar.🔥</p><oembed data-height="500" data-service="codepen" data-link="https%3A%2F%2Fcodepen.io%2Fmekery%2Fembed%2FYzyrKOJ" src="https://codepen.io/mekery/embed/YzyrKOJ" frameborder="0" allowfullscreen="true"></oembed><p></p><h2 id="846676" level="2">Image</h2><p data-text-align="center"><img src="https://www.donote.info/statics/logo.png" caption="Caption" ref="https://www.donote.info/"></p><h2 id="ce7176" level="2">Diagram</h2><p></p><diagram src="graph TD
A[Christmas] -->|Get money| B(Go shopping)
B --> C{Let me think}
C -->|One| D[Laptop]
C -->|Two| E[iPhonee]
C -->|Three| F[Cars]"></diagram><h2 id="a4baf0" level="2">Math</h2><p><span style="color: rgb(0, 0, 0)"><span style="font-family: Roboto, -apple-system, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif">Write inline formula, such as&nbsp;</span></span><ki src="\\Gamma(n) = (n-1)!\\quad\\forall n\\in\\mathbb N"></ki>，or block formula:</p><p></p><katex src="E=mc^2"></katex><p></p><katex src="e^x=\\lim_{n\\to\\infty} \\left( 1+\\frac{x}{n} \\right)^n"></katex><h2 id="2c1e92" level="2">Code</h2><blockquote></blockquote><pre><code>const name = 'JavaScript'
console.log('Hello, world', name)</code></pre><pre><code>package main

import "fmt"

func main() {
    fmt.Println("Hello, world!")
}</code></pre><h2 id="f0df1b" level="2">Table</h2><table><tbody><tr><th><p>Title</p></th><th><p>Name</p></th><th><p>Description</p></th></tr><tr><td><p data-text-align="center">1</p></td><td><p data-text-align="center">2</p></td><td><p>3</p></td></tr><tr><td><p data-text-align="right">a</p></td><td><p data-text-align="right">b</p></td><td><p data-text-align="right">c</p></td></tr></tbody></table><p></p><h2 id="3b0d30" level="2">Text</h2><p><strong><span style="font-family: Arial Black">Bold text</span></strong></p><p><em>Italic text</em></p><p><u>Underline text</u></p><p><s>Strike through text</s></p><p><code>Inline code</code></p><p><span style="color: #ff4d4f">Text with color</span></p><p><span style="background: #ffec3d">Text with </span><span style="color: #ffffff"><span style="background: #52c41a">highlight</span></span><span style="background: #ffec3d"> background</span></p><p data-indent="1">Text with indent</p>
`

export const BasicFeaturesArticleJson = `
{"type":"doc","content":[{"type":"title","content":[{"type":"text","text":"quasar-tiptap"}]},{"type":"heading","attrs":{"textAlign":"","indent":0,"lineHeight":"","level":"2","id":"d5fb3c"},"content":[{"type":"text","text":"Introduction"}]},{"type":"paragraph","attrs":{"textAlign":null,"indent":null,"lineHeight":null}}]}
`

export const FullFeaturedArticle = `
<h1>quasar-tiptap</h1><h2 id="d5fb3c" level="2">Introduction</h2><blockquote><p><strong><span style="color: #1890ff">Quasar Tiptap Editor</span></strong>&nbsp;is a WYSIWYG rich-text editor built on top of tiptap&nbsp;and Quasar.🔥</p></blockquote><p></p><h2 id="ce7176" level="2">Diagram</h2><p></p><diagram src="graph TD
A[Christmas] -->|Get money| B(Go shopping)
B --> C{Let me think}
C -->|One| D[Laptop]
C -->|Two| E[iPhonee]
C -->|Three| F[Cars]"></diagram>
<code-block data-language="javascript" src="const data = {a: 1}"></code-block><h2 id="a4baf0" level="2">Math</h2><p><span style="color: rgb(0, 0, 0)"><span style="font-family: Roboto, -apple-system, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif">Write inline formula, such as&nbsp;</span></span><ki src="\\Gamma(n) = (n-1)!\\quad\\forall n\\in\\mathbb N"></ki>，or block formula:</p><p></p><katex src="E=mc^2"></katex><p></p><katex src="e^x=\\lim_{n\\to\\infty} \\left( 1+\\frac{x}{n} \\right)^n"></katex><h2 id="2c1e92" level="2">Code</h2><blockquote></blockquote><pre data-language="javascript"><code>import { Plugin, PluginKey } from 'tiptap'
import { Decoration, DecorationSet } from 'prosemirror-view'
import { findBlockNodes } from 'prosemirror-utils'
import Prism from 'prismjs'

function getDecorations ({ doc, name }) {
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
    const nodes = Prism.tokenize(block.node.textContent, Prism.languages.javascript)
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
      init: (_, { doc }) => getDecorations({
        doc,
        name
      }),
      apply: (transaction, decorationSet, oldState, newState) => {
        // TODO: find way to cache decorations
        // https://discuss.prosemirror.net/t/how-to-update-multiple-inline-decorations-on-node-change/1493
        const oldNodeName = oldState.selection.$head.parent.type.name
        const newNodeName = newState.selection.$head.parent.type.name
        const oldNodes = findBlockNodes(oldState.doc).filter(item => item.node.type.name === name)
        const newNodes = findBlockNodes(newState.doc).filter(item => item.node.type.name === name)
        // Apply decorations if selection includes named node, or transaction changes named node.
        if (transaction.docChanged && ([oldNodeName, newNodeName].includes(name) || newNodes.length !== oldNodes.length)) {
          return getDecorations({
            doc: transaction.doc,
            name
          })
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
</code></pre><pre data-language="javascript"><code>package main

import "fmt"

func main() {
    fmt.Println("Hello, world!")
}</code></pre><h2 id="f0df1b" level="2">Table</h2><table><tbody><tr><th><p data-text-align="center">Title</p></th><th><p data-text-align="center">Name</p></th><th><p data-text-align="center">Description</p></th></tr><tr><td><p data-text-align="center">1</p></td><td><p data-text-align="center">2</p></td><td><p>3</p></td></tr><tr><td><p data-text-align="right">a</p></td><td><p data-text-align="right">b</p></td><td><p data-text-align="right">c</p></td></tr></tbody></table><p></p><h2 id="3b0d30" level="2">Text</h2><p><strong><span style="font-family: Arial Black">Bold text</span></strong></p><p><em>Italic text</em></p><p><u>Underline text</u></p><p><s>Strike through text</s></p><p><code>Inline code</code></p><p><span style="color: #ff4d4f">Text with color</span></p><p><span style="background: #ffec3d">Text with </span><span style="color: #ffffff"><span style="background: #52c41a">highlight</span></span><span style="background: #ffec3d"> background</span></p><p data-indent="1">Text with indent</p><h2 id="f0df1b" level="2">Image</h2><p data-text-align="center"><img src="https://www.donote.info/statics/logo.png"></p><p></p><h2 id="5aced7" level="2">List</h2><h3 id="55b8b4" level="3">Unordered List</h3><ul><li><p>List Item 1</p></li><li><p>List Item 2</p></li><li><p>List Item 3</p></li></ul><h3 id="f7d0cf" level="3">Ordered List</h3><ol><li><p>Item 1</p></li><li><p>Item 2</p></li><li><p>Item 3</p></li></ol><h3 id="6572ee" level="3">Todo List</h3><ul data-type="todo_list"><li data-type="todo_item" data-done="false"><span class="todo-checkbox" contenteditable="false"></span><div class="todo-content"><p>Task 1</p></div></li><li data-type="todo_item" data-done="false"><span class="todo-checkbox" contenteditable="false"></span><div class="todo-content"><p>Task 2</p></div></li><li data-type="todo_item" data-done="true"><span class="todo-checkbox" contenteditable="false"></span><div class="todo-content"><p>Task 3, done</p></div></li></ul><p></p>
`
