<template>
  <q-expansion-item
    v-if="children"
    dense
    dense-toggle
    switch-toggle-side
    :label="label"
    default-opened
    class="toc-item"
    expand-icon="add_box"
    expanded-icon="indeterminate_check_box"
    expand-icon-class="toc-item-expand-icon text-theme-lighter"
    expand-icon-toggle
    :header-inset-level="0.3 * depth"
    header-class="text-theme-dark">
    <template v-slot:header>
       <q-item-section>
           <router-link :to="`${currentRoute}#anchor_${anchor}`"
                        class="decoration-none text-theme-dark toc-link"
                        style="font-weight: 500">{{ label }}</router-link>
       </q-item-section>
    </template>

    <slot></slot>
  </q-expansion-item>
  <q-item v-else
          dense
          :inset-level="0.1 + 0.3 * depth"
          class="text-theme-dark">
    <q-item-section>
      <router-link :to="`${currentRoute}#anchor_${anchor}`"
                   class="decoration-none text-theme-dark toc-link"
                   style="font-weight: 500">{{ label }}</router-link>
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  name: 'TocItem',
  props: {
    depth: {
      type: Number,
      required: false,
      default: 0
    },
    label: {
      type: String,
      required: true,
      default: ''
    },
    anchor: {
      type: String,
      require: false,
      default: ''
    },
    children: {
      type: Array,
      required: false,
      default: null
    }
  },
  computed: {
    currentRoute () {
      return `${this.$route.path}`
    }
  }
}
</script>

<style lang="stylus">
.toc-link
  &:hover
    color $theme-lighter !important

.toc-item
  .q-item
    padding-top 4px
    padding-bottom 4px

  .q-item__section--avatar
    min-width auto !important

  .q-item__section--avatar
    padding-right 8px !important

  .toc-item-expand-icon
    .q-expansion-item__toggle-focus, .q-expansion-item__toggle-icon
      font-size 16px !important
</style>
