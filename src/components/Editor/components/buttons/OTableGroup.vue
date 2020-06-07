<template>
  <section class="row o-table-group">
    <o-menubar-btn icon="mdi-table-remove"
                   :tooltip="$t('table.remove')"
                   @click.native="commands.deleteTable" />

    <q-separator vertical />
    <o-menubar-btn icon="mdi-table-column-plus-before"
                   :tooltip="$t('table.insertColumnLeft')"
                   @click.native="commands.addColumnBefore" />
    <o-menubar-btn icon="mdi-table-column-plus-after"
                   :tooltip="$t('table.insertColumnRight')"
                   @click.native="commands.addColumnAfter" />
    <o-menubar-btn icon="mdi-table-column-remove"
                   :tooltip="$t('table.removeColumns')"
                   @click.native="commands.deleteColumn" />

    <q-separator vertical />
    <o-menubar-btn icon="mdi-table-row-plus-before"
                   :tooltip="$t('table.insertRowUp')"
                   @click.native="commands.addRowBefore" />
    <o-menubar-btn icon="mdi-table-row-plus-after"
                   :tooltip="$t('table.insertRowDown')"
                   @click.native="commands.addRowAfter" />
    <o-menubar-btn icon="mdi-table-row-remove"
                   :tooltip="$t('table.removeRows')"
                   @click.native="commands.deleteRow" />

    <q-separator vertical />
    <o-menubar-btn icon="mdi-table-merge-cells"
                   :tooltip="$t('table.merge')"
                   @click.native="commands.toggleCellMerge" />
  </section>
</template>

<script>
import OMenubarBtn from './OMenubarBtn'

export default {
  name: 'o-table-group',
  data () {
    return {}
  },
  props: {
    commands: {
      type: Object
    },
    isActive: {
      type: Object
    }
  },
  components: {
    OMenubarBtn
  },
  methods: {},
  computed: {}
}
</script>

<style lang="stylus">
.o-table-group {
  height 40px
}
</style>
