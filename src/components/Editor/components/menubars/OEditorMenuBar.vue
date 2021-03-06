<template>
  <editor-menu-bar :editor="editor"
                   v-slot="editorContext">
    <section class="row col-12 justify-between items-center bg-light tiptap-menubar">

      <!-- Toolbar: left -->
      <section class="row menubar is-hidden items-center"
               :class="{ 'is-focused': editorContext.focused }">
        <!-- Table -->
        <template v-if="editorContext.isActive.table && editorContext.isActive.table()">
          <template v-for="(item, index) of tableToolbar">
            <q-separator vertical
                         inset
                         :key="index"
                         v-if="item==='separator'" />
            <component :key="index"
                       :name="item"
                       :is="getName(item)"
                       :editor="editor"
                       v-bind="editorContext"
                       v-else-if="typeof item === 'string'" />
            <component :key="index"
                       :name="item.name"
                       :is="getName(item.name)"
                       :opt="item.options"
                       :editor="editor"
                       v-bind="editorContext"
                       v-else-if="typeof item === 'object' && item.type === 'menu'" />
            <component :key="index"
                       :is="item"
                       :editor="editor"
                       v-bind="editorContext"
                       v-else />
            <o-table-group v-bind="editorContext"
                           :key="`table-${index}`"
                           v-if="item==='table'" />
          </template>
        </template>

        <!-- Normal -->
        <template v-else>
          <template v-for="(item, index) of toolbar">
            <q-separator vertical
                         inset
                         :key="index"
                         v-if="item==='separator'" />
            <component :key="index"
                       :name="item"
                       :is="getName(item)"
                       :editor="editor"
                       v-bind="editorContext"
                       v-else-if="typeof item === 'string'" />
            <component :key="index"
                       :name="item.name"
                       :is="getName(item.name)"
                       :opt="item.options"
                       :editor="editor"
                       v-bind="editorContext"
                       v-else-if="typeof item === 'object' && item.type === 'menu'" />
            <component :key="index"
                       :is="item"
                       :editor="editor"
                       v-bind="editorContext"
                       v-else />
          </template>
        </template>

        <!-- Extra -->
        <slot name="left" />
      </section>

      <!-- Toolbar: right -->
      <section class="row q-px-xs">
        <slot name="right" />
      </section>
    </section>
  </editor-menu-bar>
</template>

<script>
import { EditorMenuBar } from 'tiptap'
import { CommandComponents, TableToolbar } from '../../data/editor'

import OForeColorDropdown from '../buttons/OForeColorDropdown'
import OBackColorDropdown from '../buttons/OBackColorDropdown'
import OFontFamilyDropdown from '../buttons/OFontFamilyDropdown'
import OAlignDropdown from '../buttons/OAlignDropdown'
import OAlignGroup from '../buttons/OAlignGroup'
import OLineHeightDropdown from '../buttons/OLineHeightDropdown'
import OHeadingDropdown from '../buttons/OHeadingDropdown'
import OHeadingList from '../buttons/OHeadingList'
import OListDropdown from '../buttons/OListDropdown'
import OIndentDropdown from '../buttons/OIndentDropdown'
import OTextFormatDropdown from '../buttons/OTextFormatDropdown'

import OAddMoreBtn from '../buttons/OAddMoreBtn'
import OPhotoBtn from '../buttons/OPhotoBtn'
import OLinkBtn from '../buttons/OLinkBtn'
import OTableBtn from '../buttons/OTableBtn'
import OTableGroup from '../buttons/OTableGroup'

import OMenubarBtn from '../buttons/OMenubarBtn'
import OSimpleCommandBtn from '../buttons/OSimpleCommandBtn'
import OMetaInput from '../common/OMetaInput'

export default {
  name: 'page-quasar-tiptap-all',
  data () {
    return {
      tableToolbar: TableToolbar,
      pageView: 'page',
      isSlideShow: false
    }
  },
  props: {
    editor: {
      type: Object
    },
    toolbar: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  components: {
    EditorMenuBar,
    OMenubarBtn,
    OSimpleCommandBtn,
    OMetaInput,
    OForeColorDropdown,
    OBackColorDropdown,
    OFontFamilyDropdown,
    OAlignDropdown,
    OAlignGroup,
    OLineHeightDropdown,
    OHeadingDropdown,
    OHeadingList,
    OListDropdown,
    OIndentDropdown,
    OTextFormatDropdown,
    OAddMoreBtn,
    OPhotoBtn,
    OLinkBtn,
    OTableBtn,
    OTableGroup
  },
  methods: {
    getName (item) {
      return CommandComponents[item] || 'o-simple-command-btn'
    },
    showSidePanel () {
    },
    onSlideShow () {
    }
  },
  mounted () {
  },
  deactivated () {
  },
  beforeDestroy () {
  }
}
</script>

<style lang="stylus"></style>
