<template>
  <q-scroll-area style="min-width: 1400px; height: calc(100vh - 50px); background-color: #F8FAFF">
    <q-splitter
      v-model="splitterModel"
      unit="px"
      :limits="[200, 400]"
      style="width: 95%"
      separator-class="menu-separator hover-show"
      separator-style="background-color: transparent; width: 10px; height: calc(100vh - 50px)"
      before-class="splitter-before"
      class="q-mx-auto relative-position">
      <template v-slot:before>
        <div class="q-py-lg"
             style="height: calc(100vh - 50px)">
          <q-scroll-area class="rounded-borders bg-white full-height splitter-shadow"
                         style="overflow-y: auto">
            <q-item clickable
                    class="text-theme-dark text-weight-bold"
                    :to="`/project/${$route.params.id}`"
                    :active="$route.name === 'ProjectHome'"
                    exact-active-class="bg-theme-linear text-theme-lighter">
              <q-item-section avatar>
                <q-icon name="home" />
              </q-item-section>
              <q-item-section>HOME</q-item-section>
            </q-item>
            <q-item class="text-theme-dark text-weight-bold">
              <q-item-section avatar>
                <q-icon name="library_books" />
              </q-item-section>
              <q-item-section>FOLDERS & DOCUMENTS</q-item-section>
              <q-item-section side>
                <q-btn round
                       flat
                       icon="more_vert"
                       size="12px">
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
            <draggable tag="div"
                       class="q-list directory"
                       :list="directory"
                       :group="{name: 'g1'}">
              <f-d-item v-for="item in directory"
                        :key="item.id"
                        :fd="item" />
            </draggable>
            <q-item clickable
                    class="text-theme-dark text-weight-bold"
                    @click="eventLogDrawer = !eventLogDrawer">
              <q-item-section avatar>
                <q-icon color="theme-dark"
                        name="event" />
              </q-item-section>
              <q-item-section>EVENT LOG</q-item-section>
            </q-item>
            <q-item clickable
                    class="text-theme-dark text-weight-bold">
              <q-item-section avatar>
                <q-icon color="theme-dark"
                        name="delete" />
              </q-item-section>
              <q-item-section>RECYCLE BIN</q-item-section>
            </q-item>
          </q-scroll-area>
        </div>
      </template>
      <template v-slot:separator>
        <q-avatar color="theme-lighter"
                  text-color="white"
                  size="30px"
                  icon="chevron_right" />
      </template>
      <template v-slot:after>
        <div class="q-py-lg column"
             style="min-height: calc(100vh - 50px)">
          <div class="bg-white rounded-borders col splitter-shadow">
            <router-view />
          </div>
        </div>
      </template>
    </q-splitter>
    <q-drawer
      side="right"
      v-model="eventLogDrawer"
      overlay
      elevated
      :width="500"
      content-class="column bg-theme-linear text-white">
      <div>
        <div class="q-px-md flex items-center justify-between">
          <h3 class="text-h6 text-weight-bold text-theme-lighter"
              style="font-size: 18px">EVENT LOG</h3>
          <div class="q-gutter-sm">
            <q-btn flat
                   round
                   icon="visibility"
                   size="12px">
              <q-tooltip content-class="bg-theme-lighter text-white"
                         content-style="font-size: 14px">View all log
              </q-tooltip>
            </q-btn>
            <q-btn flat
                   round
                   icon="sync"
                   size="12px">
              <q-tooltip content-class="bg-theme-lighter text-white"
                         content-style="font-size: 14px">Refresh
              </q-tooltip>
            </q-btn>
            <q-btn flat
                   round
                   icon="close"
                   size="12px"
                   @click="eventLogDrawer = false">
              <q-tooltip content-class="bg-theme-lighter text-white"
                         content-style="font-size: 14px">Close
              </q-tooltip>
            </q-btn>
          </div>
        </div>
      </div>
      <q-scroll-area class="col q-list event-log-drawer">
        <q-item v-for="n in 50"
                :key="n"
                class="event-log-item">
          <q-item-section class="flex">
            <q-item-label>
              <span>2020-01-23 23:12</span>&nbsp;
              <span>Walden</span>&nbsp;
              <span class="text-theme-lighter text-weight-bold">更新文档 - Api说明文档 - 新增接口getUserInfo</span>
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-scroll-area>
    </q-drawer>
  </q-scroll-area>
</template>

<script>
import FDItem from 'pages/Project/components/FDItem'
import draggable from 'vuedraggable'

export default {
  components: {
    FDItem,
    draggable
  },
  data () {
    return {
      splitterModel: 300,
      eventLogDrawer: false,
      directory: [
        {
          id: 'asdf',
          name: '接口说明文档',
          type: 'document'
        },
        {
          id: 'asdfg',
          name: '错误吗字典',
          type: 'document'
        },
        {
          id: '1asdgasdvadv23',
          name: 'Folder 1',
          type: 'folder',
          children: [{
            id: '23asdgasg4',
            name: 'Folder 1-1',
            type: 'folder',
            children: [{
              id: '34asdgwqeasdf5',
              name: 'Document 1',
              type: 'document'
            }, {
              id: '345asfwqef',
              name: 'Document 1',
              type: 'document'
            }]
          }, {
            id: '56asdgwqe7',
            name: 'Document3',
            type: 'document'
          }]
        },
        {
          id: 'asdfwg',
          name: '需求文档',
          type: 'document'
        },
        {
          id: 'agw232r',
          name: 'Empty Folder',
          type: 'folder',
          children: []
        },
        {
          id: '12asdf3',
          name: 'Folder 1',
          type: 'folder',
          children: [{
            id: '2gw34',
            name: 'Folder 1-1',
            type: 'folder',
            children: [{
              id: '34asd5',
              name: 'Document 1',
              type: 'document'
            }, {
              id: '3qwet45',
              name: 'Document 1',
              type: 'document'
            }]
          }, {
            id: '56gxzv7',
            name: 'Document3',
            type: 'document'
          }]
        },
        {
          id: '1asdghwe23',
          name: 'Folder 1',
          type: 'folder',
          children: [{
            id: '23zxcvae4',
            name: 'Folder 1-1',
            type: 'folder',
            children: [{
              id: '34gwqs5',
              name: 'Document 1',
              type: 'document'
            }, {
              id: '345asfgwe',
              name: 'Document 1',
              type: 'document'
            }]
          }, {
            id: '56asdzxcvsaf7',
            name: 'Document3',
            type: 'document'
          }]
        },
        {
          id: 'asddfg',
          name: '原型设计文档',
          type: 'document'
        }
      ]
    }
  }
}
</script>

<style lang="stylus">
.q-splitter__before, .q-splitter__after
  overflow unset

.splitter-before
  position sticky
  top 0

  .q-item__section--avatar
    min-width auto

  .directory
    .q-item__section--avatar
      padding-right 0

    .q-item-icon__c
      padding-right 8px

.hover-show
  .drag-btn
    opacity 0
    transition all .3s ease

  &:hover
    .drag-btn
      opacity 1

.splitter-shadow
  box-shadow 0 4px 30px 0 rgba(223, 225, 230, 0.5)

.event-log-drawer
  .event-log-item:nth-child(odd)
    background-color $theme-darker

.menu-separator
  position sticky
  top 0
</style>
