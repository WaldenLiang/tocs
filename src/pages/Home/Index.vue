<template>
  <q-page class="overflow-hidden">
    <q-scroll-area class="full-width"
                   style="overflow-y: auto; height: calc(100vh - 50px)">
      <div class="row q-mx-auto relative-position"
           style="max-width: 1200px; min-height: 100%">
        <div class="menu col-3 q-pr-xl q-pt-xl"
             style="position: sticky; top: 0; height: calc(100vh - 50px)">
          <div v-for="item in menu"
               :key="item.group"
               class="q-mb-md">
            <div v-if="item.label"
                 class="text-h6 text-grey-9 q-px-sm"
                 style="font-size: 13px">{{ item.label }}
            </div>
            <router-link v-for="item in item.links"
                         :key="item.label"
                         :to="item.to"
                         tag="div"
                         class="item q-pa-sm flex items-center cursor-pointer rounded-borders"
                         :class="{'active': item.to === $route.path}"
                         style="font-size: 0">
              <q-icon :name="item.icon"
                      size="22px"
                      class="q-mr-sm" />
              <span class="text-weight-bold"
                    style="font-size: 16px">{{ item.label }}</span>
            </router-link>
          </div>
        </div>
        <div class="col-9 relative-position">
          <transition
            appear
            enter-active-class="animated fadeInRight absolute"
            leave-active-class="animated zoomOut absolute">
            <router-view class="full-width q-pb-xl" />
          </transition>
        </div>
      </div>
    </q-scroll-area>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      menu: [{
        links: [
          {
            icon: 'home',
            label: 'HOME',
            to: '/'
          },
          {
            icon: 'folder',
            label: 'PROJECT',
            to: '/project'
          },
          {
            icon: 'book',
            label: 'TECHNICAL ARTICLE',
            to: '/reading-link'
          },
          {
            icon: 'delete',
            label: 'RECYCLE BIN',
            to: '/recycle-bin'
          }
        ]
      }, {
        label: 'RECENT PROJECTS',
        links: [{
          icon: 'folder',
          label: 'Bosma Lab',
          to: '/project/1'
        }, {
          icon: 'folder',
          label: 'Self Workspace',
          to: '/project/2'
        }, {
          icon: 'folder',
          label: 'Github Docs',
          to: '/project/3'
        }]
      }, {
        label: 'RECENT READING LINKS',
        links: [{
          icon: 'book',
          label: 'Bosma Frontend Apis',
          to: '/reading-link/1'
        }, {
          icon: 'book',
          label: 'Instructions for tocs',
          to: '/reading-link/2'
        }, {
          icon: 'book',
          label: 'New Features',
          to: '/reading-link/3'
        }]
      }]
    }
  }
}
</script>

<style lang="stylus"
       scoped>
.menu
  .item
    color $theme-dark-gray

    &.active
      background-image linear-gradient(to bottom right, $theme-dark-gray, $theme-dark)
      color $theme-lighter

    &:hover
      background-color $theme-placeholder
</style>
