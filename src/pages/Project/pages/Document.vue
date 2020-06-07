<template>
  <div class="relative-position">
    <q-scroll-observer @scroll="scrollHandler" />
    <div class="bar-sticky q-py-sm q-px-lg bg-white"
         style="border-top-left-radius: 4px; border-top-right-radius: 4px"
         :class="{ 'shadow-bottom': scrollInfo.position >= 24 }">
      <div class="flex items-center justify-between">
        <div class="q-gutter-xs text-weight-bold">
          <q-breadcrumbs class="text-theme-dark">
            <q-breadcrumbs-el label="Folder 1"
                              icon="folder_open"
                              class="text-theme-dark" />
            <q-breadcrumbs-el label="Folder 1-1"
                              icon="folder_open"
                              class="text-theme-dark" />
            <q-breadcrumbs-el label="Api 接口文档"
                              icon="insert_drive_file"
                              class="text-theme-dark" />
          </q-breadcrumbs>
        </div>
        <div class="q-gutter-sm">
          <q-btn flat
                 round
                 size="12px"
                 icon="edit"
                 text-color="theme-dark">
            <q-tooltip content-class="bg-theme-lighter text-white"
                       content-style="font-size: 14px">Edit
            </q-tooltip>
          </q-btn>
          <q-btn flat
                 round
                 size="12px"
                 icon="book"
                 text-color="theme-dark">
            <q-tooltip content-class="bg-theme-lighter text-white"
                       content-style="font-size: 14px">Create Reading Link
            </q-tooltip>
          </q-btn>
          <q-btn flat
                 round
                 size="12px"
                 icon="star"
                 text-color="theme-dark">
            <q-tooltip content-class="bg-theme-lighter text-white"
                       content-style="font-size: 14px">Star
            </q-tooltip>
          </q-btn>
          <q-btn flat
                 round
                 size="12px"
                 icon="more_vert"
                 text-color="theme-dark">
            <q-menu>
              <q-list style="min-width: 100px">
                <q-item clickable
                        v-close-popup>
                  <q-item-section>New tab</q-item-section>
                </q-item>
                <q-item clickable
                        v-close-popup>
                  <q-item-section>New incognito tab</q-item-section>
                </q-item>
                <q-separator />
                <q-item clickable
                        v-close-popup>
                  <q-item-section>Recent tabs</q-item-section>
                </q-item>
                <q-item clickable
                        v-close-popup>
                  <q-item-section>History</q-item-section>
                </q-item>
                <q-item clickable
                        v-close-popup>
                  <q-item-section>Downloads</q-item-section>
                </q-item>
                <q-separator />
                <q-item clickable
                        v-close-popup>
                  <q-item-section>Settings</q-item-section>
                </q-item>
                <q-separator />
                <q-item clickable
                        v-close-popup>
                  <q-item-section>Help &amp; Feedback</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </div>
      </div>
      <div v-if="editorReady"
           class="tiptap tiptap-editor quasar-tiptap">
        <o-editor-menu-bar :editor="$refs.editor.getEditor()"
                           :toolbar="editorMenuBar">
          <template slot="left">
            <slot name="toolbar-left" />
          </template>
          <template slot="right">
            <slot name="toolbar-right" />
          </template>
        </o-editor-menu-bar>
      </div>
    </div>
    <editor ref="editor"
            v-model="content"
            @on-editor-ready="editorReady = true" />
  </div>
</template>

<script>
import { FullFeaturedArticle } from 'components/Editor/data/article'
import Editor from 'components/Editor'
import OEditorMenuBar from 'components/Editor/components/menubars/OEditorMenuBar'

export default {
  components: {
    Editor,
    OEditorMenuBar
  },
  computed: {
    editorMenuBar () {
      return [
        'add-more',
        'bold',
        'italic',
        'underline',
        'strike',
        'code',
        'heading',
        'font-family',
        'fore-color',
        'back-color',
        'format_clear',
        'align-dropdown',
        'indent',
        'outdent',
        'line-height',
        'horizontal',
        'bullet_list',
        'ordered_list',
        'todo_list',
        'blockquote',
        'code_block',
        'link',
        'photo',
        'table',
        'undo',
        'redo',
        'print'
      ]
    }
  },
  data () {
    return {
      content: FullFeaturedArticle,
      scrollInfo: {},
      editorReady: false,
      pageView: 'page',
      menu: {
        add: false
      },
      // actions
      isSlideShow: false
    }
  },
  methods: {
    scrollHandler (info) {
      this.scrollInfo = info
    }
  }
}
</script>

<style lang="stylus">
.bar-sticky
  position sticky
  top 0
  z-index 1000
  transition all .3s ease
.shadow-bottom
  box-shadow 0 5px 5px rgba(199, 199, 199, .2)
</style>
