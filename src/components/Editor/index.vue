<template>
  <q-splitter
    v-model="splitterModel"
    unit="%"
    before-class="z-index-unset tiptap tiptap-editor quasar-tiptap"
    after-class="z-index-unset after-sticky"
    separator-style="background-color: transparent"
    :limits="[60, 88]">
    <template v-slot:before>
      <q-no-ssr tag="div"
                class="row q-mt-lg no-wrap q-mx-auto q-px-xl"
                style="width: 800px">
        <editor-content class="editor__content o--note-preview note-step-side-editor"
                        :editor="editor" />
      </q-no-ssr>
    </template>
    <template v-slot:after>
      <q-scroll-area style="height: calc(100vh - 50px - 48px - 52px)">
        <toc :toc="toc"
             class="q-py-lg" />
      </q-scroll-area>
    </template>
  </q-splitter>
</template>

<script>
import { Editor, EditorContent } from 'tiptap'
import Toc from 'components/Toc'

import {
  BulletList,
  // CodeBlockHighlight,
  HardBreak,
  ListItem,
  OrderedList,
  TodoList,
  Bold,
  Code,
  Italic,
  Link,
  Strike,
  Underline,
  History,
  Table,
  TableHeader,
  TableCell,
  TableRow,
  // Placeholder,
  Focus,
  HorizontalRule,
  TrailingNode
} from 'tiptap-extensions'

// import java from 'highlight.js/lib/languages/java'
// import javascript from 'highlight.js/lib/languages/javascript'
// import css from 'highlight.js/lib/languages/css'

if (process.env.CLIENT) {
  require('src/statics/iconfont/iconfont')
}

import {
  OTitle,
  ODoc,
  OParagraph,
  OBlockquote,
  OTodoItem,
  OAlign,
  OAlignment,
  OIndent,
  OLineHeight,
  OBackColor,
  OForeColor,
  OFontFamily,
  OHeading,
  OIframe,
  ODiagram,
  OKatexBlock,
  OKatexInline,
  OFormatClear,
  OImage,
  OEmbed,
  PrismCodeBlock
} from 'components/Editor/extentions'

export default {
  components: {
    Toc,
    EditorContent
  },
  props: {
    value: {
      default: ''
    },
    readonly: {
      type: Boolean,
      default: false
    },
    showToc: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      editor: null,
      html: '',
      json: {},
      splitterModel: 80,
      toc: [
        {
          label: 'Satisfied customers (with avatar)',
          children: [
            {
              label: 'Good food (with icon)',
              children: [
                { label: 'Quality ingredients' },
                { label: 'Good recipe' }
              ]
            },
            {
              label: 'Good service (disabled node with icon)',
              children: [
                { label: 'Prompt attention' },
                { label: 'Professional waiter' }
              ]
            },
            {
              label: 'Pleasant surroundings (with icon)',
              children: [
                { label: 'Happy atmosphere (with image)' },
                { label: 'Good table presentation' },
                { label: 'Pleasing decor' }
              ]
            }
          ]
        },
        {
          label: 'Satisfied customers (with avatar)',
          children: [
            {
              label: 'Good food (with icon)',
              children: [
                { label: 'Quality ingredients' },
                { label: 'Good recipe' }
              ]
            },
            {
              label: 'Good service (disabled node with icon)',
              children: [
                { label: 'Prompt attention' },
                { label: 'Professional waiter' }
              ]
            },
            {
              label: 'Pleasant surroundings (with icon)',
              children: [
                { label: 'Happy atmosphere (with image)' },
                { label: 'Good table presentation' },
                { label: 'Pleasing decor' }
              ]
            }
          ]
        },
        {
          label: 'Satisfied customers (with avatar)',
          children: [
            {
              label: 'Good food (with icon)',
              children: [
                { label: 'Quality ingredients' },
                { label: 'Good recipe' }
              ]
            },
            {
              label: 'Good service (disabled node with icon)',
              children: [
                { label: 'Prompt attention' },
                { label: 'Professional waiter' }
              ]
            },
            {
              label: 'Pleasant surroundings (with icon)',
              children: [
                { label: 'Happy atmosphere (with image)' },
                { label: 'Good table presentation' },
                { label: 'Pleasing decor' }
              ]
            }
          ]
        },
        {
          label: 'Satisfied customers (with avatar)',
          children: [
            {
              label: 'Good food (with icon)',
              children: [
                { label: 'Quality ingredients' },
                { label: 'Good recipe' }
              ]
            },
            {
              label: 'Good service (disabled node with icon)',
              children: [
                { label: 'Prompt attention' },
                { label: 'Professional waiter' }
              ]
            },
            {
              label: 'Pleasant surroundings (with icon)',
              children: [
                { label: 'Happy atmosphere (with image)' },
                { label: 'Good table presentation' },
                { label: 'Pleasing decor' }
              ]
            }
          ]
        },
        {
          label: 'Satisfied customers (with avatar)',
          children: [
            {
              label: 'Good food (with icon)',
              children: [
                { label: 'Quality ingredients' },
                { label: 'Good recipe' }
              ]
            },
            {
              label: 'Good service (disabled node with icon)',
              children: [
                { label: 'Prompt attention' },
                { label: 'Professional waiter' }
              ]
            },
            {
              label: 'Pleasant surroundings (with icon)',
              children: [
                { label: 'Happy atmosphere (with image)' },
                { label: 'Good table presentation' },
                { label: 'Pleasing decor' }
              ]
            }
          ]
        }
      ]
    }
  },
  mounted () {
    this.initEditor()
  },
  methods: {
    initEditor () {
      const self = this
      self.editor = new Editor({
        content: self.value,
        extensions: [
          new OTitle(),
          new ODoc(),
          new OParagraph(),
          new OBlockquote(),
          new OAlignment(),
          new OIndent(),
          new OLineHeight(),
          new OBackColor(),
          new OForeColor(),
          new OFontFamily(),
          new OIframe(),
          new ODiagram(),
          new OKatexBlock(),
          new OKatexInline(),
          new OFormatClear(),
          // new OPrint(),
          new OImage(),
          new OEmbed(),
          // new CodeBlockHighlight({
          //   languages: {
          //     java,
          //     javascript,
          //     css
          //   }
          // }),
          new PrismCodeBlock({
            languages: ['javascript', 'java', 'css']
          }),
          new Table({ resizable: true }),
          new TableHeader(),
          new TableCell(),
          new TableRow(),
          new OTodoItem({ nested: true }),
          new OHeading({ levels: [1, 2, 3, 4, 5, 6] }),
          new Bold(),
          new Italic(),
          new Strike(),
          new Underline(),
          new Code(),
          // new CodeBlock(),
          new BulletList(),
          new OrderedList(),
          new ListItem(),
          new TodoList(),
          new HorizontalRule(),
          new Link(),

          // required
          new HardBreak(),
          new History(),
          new Focus({
            className: 'has-focus',
            nested: true
          }),
          new TrailingNode({
            node: 'paragraph',
            notAfter: ['paragraph']
          }),
          new OAlign()
        ]
      })

      this.$emit('on-editor-ready')
    },
    getEditor () {
      return this.editor
    }
  }
}
</script>

<style lang="stylus">
@import "~src/css/tiptap.styl"

.after-sticky
  position sticky
  top 52px

.z-index-unset
  z-index unset !important
</style>
