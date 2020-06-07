<template>
  <q-list>
    <toc-item v-for="(item, index) in toc"
              :key="index"
              :label="item.label"
              :children="item.children"
              :depth="depth">
      <toc :toc="item.children"
           :depth="depth + 1" />
    </toc-item>
  </q-list>
</template>

<script>
import TocItem from 'components/TocItem'

export default {
  name: 'Toc',
  components: { TocItem },
  props: {
    depth: {
      type: Number,
      required: false,
      default: 0
    },
    toc: {
      type: Array,
      required: true,
      default: () => {
        return []
      }
    }
  }
}
</script>

<style lang="stylus"
       scoped>

</style>
