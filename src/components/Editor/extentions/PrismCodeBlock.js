import { Node } from 'tiptap'
import { toggleBlockType, setBlockType } from 'tiptap-commands'
import { textblockTypeInputRule } from 'prosemirror-inputrules'
import PrismCodeBlockView from 'components/Editor/components/views/PrismCodeBlockView'
import PrismPlugin from 'components/Editor/plugins/Prism'

export default class PrismCodeBlock extends Node {
  constructor (options = {}) {
    super(options)
  }

  get name () {
    return 'code_block'
  }

  get schema () {
    return {
      attrs: {
        language: {
          default: null
        }
      },
      content: 'text*',
      marks: '',
      group: 'block',
      code: true,
      defining: true,
      draggable: false,
      parseDOM: [
        {
          tag: 'pre',
          preserveWhitespace: 'full',
          getAttrs: (dom) => {
            const dataset = dom.dataset
            return {
              language: dataset.language
            }
          }
        }
      ],
      toDOM: () => ['pre', ['code', 0]]
    }
  }

  commands ({ type, schema }) {
    return () => toggleBlockType(type, schema.nodes.paragraph)
  }

  keys ({ type }) {
    return {
      'Shift-Ctrl-\\': setBlockType(type)
    }
  }

  inputRules ({ type }) {
    return [
      textblockTypeInputRule(/^```([a-zA-Z1-9_\-.#]*)\s$/, type, (match) => {
        return {
          language: match && match[1]
        }
      })
    ]
  }

  get plugins () {
    return [
      PrismPlugin({ name: this.name })
    ]
  }

  get view () {
    return PrismCodeBlockView
  }
}
