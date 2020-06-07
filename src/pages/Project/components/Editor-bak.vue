<template>
  <quasar-tiptap v-bind="options"
                 @update="onUpdate" />
</template>

<script>
import {
  Placeholder
} from 'tiptap-extensions'
import 'quasar-tiptap/lib/index.css'

import content from 'pages/Project/components/content'

export default {
  data () {
    const self = this
    return {
      options: {
        content: content,
        editable: false,
        extensions: [
          ...self.tiptapExtensions,
          new Placeholder({
            showOnlyCurrent: false,
            emptyNodeText: node => {
              if (node.type.name === 'title') {
                return 'Give me a name'
              }
              return 'Write something'
            }
          })
        ],
        toolbar: [
          'add-more',
          'separator',
          'bold',
          'italic',
          'underline',
          'strike',
          'code',
          'separator',
          'heading',
          'font-family',
          'fore-color',
          'back-color',
          'format_clear',
          'separator',
          'align-dropdown',
          'indent',
          'outdent',
          'line-height',
          'separator',
          'horizontal',
          'bullet_list',
          'ordered_list',
          'todo_list',
          'separator',
          'blockquote',
          'code_block',
          'photo',
          'table',
          'separator',
          'undo',
          'redo'
        ]
      },
      json: '',
      html: ''
    }
  },
  methods: {
    onUpdate ({ getJSON, getHTML }) {
      this.json = getJSON()
      this.html = getHTML()
      console.log('html', this.html)
    }
  },
  mounted () {
  }
}
</script>

<style lang="stylus"
       scoped>
</style>
