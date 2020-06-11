<template>
  <q-expansion-item v-if="fd.type === 'folder'"
                    :header-inset-level="0.3 * depth"
                    switch-toggle-side
                    dense-toggle
                    dense
                    class="folder text-theme-dark text-weight-bold"
                    @before-show="expand = true"
                    @before-hide="expand = false">
    <template v-slot:header>
      <q-item-section avatar>
        <q-avatar :icon="expand ? 'folder_open' : 'folder'" />
      </q-item-section>
      <q-item-section style="white-space: nowrap; text-overflow: ellipsis; overflow: hidden">
        {{ fd.name }}
      </q-item-section>
      <q-item-section side>
        <q-btn flat
               round
               icon="more_vert"
               size="12px"
               @click.native.stop.prevent>
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
      </q-item-section>
    </template>
    <draggable v-if="fd.children"
               tag="div"
               class="q-list"
               :list="fd.children"
               :group="{name: 'g1'}">
      <f-d-item v-for="item in fd.children"
                :key="item.id"
                :fd="item"
                :depth="depth + 1" />
    </draggable>
  </q-expansion-item>
  <q-item v-else
          clickable
          :inset-level="0.57 + 0.3 * depth"
          class="text-theme-dark text-weight-bold"
          dense
          :to="`/project/${$route.params.id}/doc/${fd.id}`"
          :active="$route.name === 'ProjectDocument' && $route.params.documentId === fd.id"
          active-class="active bg-theme-linear text-theme-lighter">
    <q-item-section avatar
                    class="q-item-icon__c">
      <q-icon name="insert_drive_file" />
    </q-item-section>
    <q-item-section style="white-space: nowrap; text-overflow: ellipsis; overflow: hidden">{{ fd.name }}</q-item-section>
    <q-item-section side>
      <q-btn round
             flat
             icon="more_vert"
             size="12px"
             class="more-btn"
             @click.native.stop.prevent>
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
    </q-item-section>
  </q-item>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  components: { draggable },
  name: 'FDItem',
  props: {
    fd: {
      type: Object,
      default: () => {
        return {}
      }
    },
    depth: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      expand: false
    }
  }
}
</script>

<style lang="stylus"
       scoped>
.active
  .more-btn
    color $theme-lighter
</style>
