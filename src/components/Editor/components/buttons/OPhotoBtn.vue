<template>
  <o-menubar-btn icon="photo"
                 :tooltip="$t('editor.photo')"
                 class="o-photo-btn">
    <q-menu ref="photoPopover"
            anchor="bottom middle"
            self="top middle"
            class="shadow-5">
      <o-meta-input :title="$t('editor.photo')"
                    icon="image"
                    @primaryAction="insertImage(commands.image, $event)">
      </o-meta-input>
    </q-menu>
  </o-menubar-btn>
</template>

<script>
import OMenubarBtn from './OMenubarBtn'
import OMetaInput from '../common/OMetaInput'

export default {
  name: 'o-photo-btn',
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
    OMenubarBtn,
    OMetaInput
  },
  methods: {
    insertImage (command, src) {
      if (src) {
        command({ src })
      }

      this.$refs.photoPopover.hide()
    }
  },
  computed: {}
}
</script>

<style lang="stylus">
.o-photo-btn {
}
</style>
