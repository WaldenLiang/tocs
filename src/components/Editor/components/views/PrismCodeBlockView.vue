<template>
  <div class="bg-theme-darker q-mb-md"
       style="border-radius: 4px">
    <q-bar class="bg-transparent text-white">
      <q-btn dense
             flat
             round
             icon="lens"
             size="8.5px"
             color="red" />
      <q-btn dense
             flat
             round
             icon="lens"
             size="8.5px"
             color="yellow" />
      <q-btn dense
             flat
             round
             icon="lens"
             size="8.5px"
             color="green" />
    </q-bar>
    <pre :data-language="language"><code :class="`language-${language}`"
                                         ref="content"
                                         contenteditable></code></pre>
  </div>
</template>

<script>
import 'prismjs'

export default {
  props: ['node', 'updateAttrs', 'view'],
  computed: {
    language () {
      const language = this.node.attrs.language
      return language || 'markup'
    }
  }
}
</script>

<style lang="stylus"
       scoped>
.code-editor
  width 100%
  height auto
</style>
