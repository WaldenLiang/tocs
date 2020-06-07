<template>
  <o-menubar-btn icon="add"
                 :tooltip="$t('editor.addMore')"
                 class="text-theme-lighter o-add-more-btn bg-theme-dark"
                 round
                 :flat="false">
    <q-menu ref="addPopover"
            anchor="bottom left"
            self="top left"
            content-class="o-menu">
      <section>
        <o-common-item icon="mdi-code-braces"
                       :label="$t('editor.codeBlock')"
                       @click.native="commands.code_block"
                       v-close-popup />
        <o-common-item icon="photo"
                       :label="$t('editor.photo')">
          <q-menu ref="photoPopover"
                  anchor="top right"
                  self="top left"
                  :offset="[2, 0]">
            <o-meta-input :title="$t('editor.photo')"
                          icon="image"
                          @primaryAction="insertImage(commands.image, $event)">
            </o-meta-input>
          </q-menu>
        </o-common-item>
        <o-common-item icon="mdi-table"
                       :label="$t('editor.table')">
          <q-menu ref="tablePopover"
                  anchor="top right"
                  self="top left"
                  :offset="[2, 0]">
            <o-table-grid :commands="commands" />
          </q-menu>
        </o-common-item>
        <o-common-item icon="mdi-sigma"
                       :label="$t('editor.formula')"
                       side-icon="keyboard_arrow_right">
          <q-menu ref="formulaPopover"
                  anchor="top right"
                  self="top left"
                  content-class="o-menu"
                  :offset="[2, 0]">
            <div class="row col-12 justify-around q-pa-md">
              <div class="o-button"
                   @click="commands.katex_block">
                <div>
                  <q-icon name="mdi-sigma" />
                </div>
                <div>{{$t('editor.blockFormula')}}</div>
              </div>
              <div class="o-button"
                   @click="commands.katex_inline">
                <div>
                  <q-icon name="mdi-sigma" />
                </div>
                <div>{{$t('editor.inlineFormula')}}</div>
              </div>
            </div>
          </q-menu>
        </o-common-item>
        <o-common-item icon="mdi-sitemap"
                       :label="$t('diagram.name')"
                       @click.native="commands.diagram"
                       v-close-popup>
          <q-tooltip anchor="center right"
                     self="center left">
            <div class="text-bold">Mermaid</div>
            <div class="text-white">{{$t('diagram.tips')}}</div>
          </q-tooltip>
        </o-common-item>
        <q-separator />
        <o-common-item icon="mdi-iframe-outline"
                       :label="$t('editor.thirdPartyService')"
                       side-icon="keyboard_arrow_right">
          <q-menu ref="formulaPopover"
                  anchor="center right"
                  self="center left"
                  content-class="o-menu"
                  :offset="[2, 0]">
            <o-embed-menu :embed-services="embedServices"
                          @select="onSelectService" />
          </q-menu>
        </o-common-item>
      </section>
    </q-menu>
  </o-menubar-btn>
</template>

<script>
import OMenubarBtn from './OMenubarBtn'
import OEmbedMenu from './OEmbedMenu'
import OCommonItem from '../common/OCommonItem'
import OMetaInput from '../common/OMetaInput'
import OTableGrid from '../common/OTableGrid'

export default {
  name: 'o-add-more-btn',
  data () {
    return {}
  },
  props: {
    commands: {
      type: Object
    },
    isActive: {
      type: Object
    },
    opt: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  components: {
    OMenubarBtn,
    OEmbedMenu,
    OCommonItem,
    OMetaInput,
    OTableGrid
  },
  methods: {
    insertIframe (command, src) {
      if (src) {
        command({ src })
      }
    },
    insertImage (command, src) {
      if (src) {
        command({ src })

        this.$refs.addPopover.hide()
      }
    },
    onSelectService (service) {
      console.log('service', service)
      this.commands.embed({ service: service.value })
    }
  },
  computed: {
    embedServices () {
      return (this.opt && this.opt.embed) ? this.opt.embed : null
    }
  },
  mounted () {
  }
}
</script>

<style lang="stylus">
.o-add-more-btn {
}
</style>
