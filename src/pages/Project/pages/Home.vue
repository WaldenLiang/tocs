<template>
  <div class="q-pa-xl">
    <div class="flex no-wrap items-start q-mb-lg">
      <div class="rounded-borders overflow-hidden shadow-9"
           style="width: 150px">
        <q-img
          src="https://cdn.quasar.dev/img/parallax2.jpg"
          :ratio="1" />
      </div>
      <div class="q-ml-lg col relative-position"
           style="width: 0">
        <q-btn-group class="absolute bg-theme-linear"
                     style="right: 0; top: 13px">
          <q-btn dense
                 icon="star"
                 text-color="theme-lighter"
                 size="12px"
                 class="q-px-sm" />
          <q-btn dense
                 text-color="theme-lighter"
                 label="INVITE MEMBER"
                 class="q-px-sm" />
          <q-btn dense
                 icon="more_vert"
                 text-color="theme-lighter"
                 size="12px"
                 class="q-px-sm" />
        </q-btn-group>
        <h1 class="text-h4 q-mt-sm text-weight-bold text-theme-dark">Bosma Smart后台</h1>
        <p class="text-theme-dark text-weight-bold">D是发送到发A 暗示法 falsis, nuptia regius plasmator.Ubi est velox repressor?Coordinatae accelerares, tanquam talis species.Abactus, boreas, et rector.Sunt dominaes quaestio teres, rusticus cedriumes.Domesticus, lotus silvas grauiter pugna de dexter, teres fuga.Torquiss credere!</p>
      </div>
    </div>
    <div class="q-mb-lg">
      <h2 class="text-h6 text-weight-bold text-theme-dark"
          style="font-size: 16px">PROJECT ANNOUNCEMENT</h2>
      <div>
        <q-banner class="rounded-borders bg-theme-input text-theme-dark"
                  style="border-left: 5px solid #00c58e">
          <p class="text-weight-bold q-pa-none q-ma-none">这是一条项目公告，告示成员重要的事情。</p>
          <template v-slot:action>
            <q-btn flat
                   color="theme-dark"
                   label="Dismiss" />
          </template>
        </q-banner>
      </div>
    </div>
    <div class="q-mb-lg">
      <h2 class="text-h6 text-weight-bold text-theme-dark"
          style="font-size: 16px">TOPPED DOCUMENTS</h2>
      <div class="row q-col-gutter-md">
        <div v-for="n in 6"
             :key="n"
             class="col-3 col-xl-2 cursor-pointer">
          <q-card flat
                  class="text-theme-dark docx bg-theme-input"
                  @click="$router.push(`/project/${$route.params.id}/doc/asdf`)">
            <div class="corner" />
            <q-card-section>
              <div class="text-h6 flex no-wrap justify-between items-start">
                接口文档 V1.0
                <q-btn flat
                       round
                       size="12px"
                       icon="more_vert" />
              </div>
              <div class="text-subtitle2">by John Doe</div>
            </q-card-section>
            <q-card-section>
              Tolerare foris ducunt ad bi-color deus. Azureus absolutio mechanice anhelares sectam est. Spatii, devirginato, et fuga.
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
    <div class="q-mb-lg">
      <h2 class="text-h6 text-weight-bold text-theme-dark"
          style="font-size: 16px">PROJECT MEMBER</h2>
      <div class="q-gutter-xs">
        <q-chip v-for="member in members"
                :key="member.id"
                square
                size="18px"
                class="cursor-pointer"
                color="theme-input">
          <q-avatar>
            <img :src="member.avatar"
                 :alt="member.nickname">
          </q-avatar>
          {{ member.nickname }}
        </q-chip>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      members: [{
        id: 1,
        avatar: 'statics/avatars/026-girl-11-min.png',
        nickname: 'Walden'
      }, {
        id: 12,
        avatar: 'statics/avatars/002-girl-min.png',
        nickname: 'July'
      }, {
        id: 13,
        avatar: 'statics/avatars/003-girl-1-min.png',
        nickname: 'Sports'
      }, {
        id: 14,
        avatar: 'statics/avatars/004-girl-2-min.png',
        nickname: 'Build'
      }, {
        id: 15,
        avatar: 'statics/avatars/005-person-min.png',
        nickname: 'Gate'
      }, {
        id: 16,
        avatar: 'statics/avatars/006-man-min.png',
        nickname: 'Nine'
      }, {
        id: 17,
        avatar: 'statics/avatars/007-girl-3-min.png',
        nickname: 'Jean Doe'
      }, {
        id: 18,
        avatar: 'statics/avatars/008-girl-4-min.png',
        nickname: 'Trump'
      }, {
        id: 19,
        avatar: 'statics/avatars/009-man-1-min.png',
        nickname: 'Mike'
      }, {
        id: 10,
        avatar: 'statics/avatars/010-boy-1-min.png',
        nickname: 'ZengTongLing'
      }, {
        id: 21,
        avatar: 'statics/avatars/011-girl-5-min.png',
        nickname: 'YanRuyu'
      }, {
        id: 31,
        avatar: 'statics/avatars/012-boy-2-min.png',
        nickname: 'LongTianyu'
      }, {
        id: 41,
        avatar: 'statics/avatars/013-man-2-min.png',
        nickname: 'LongLiaoyu'
      }, {
        id: 51,
        avatar: 'statics/avatars/014-boy-3-min.png',
        nickname: 'Icon Man'
      }, {
        id: 61,
        avatar: 'statics/avatars/015-girl-6-min.png',
        nickname: 'Spider Man'
      }, {
        id: 71,
        avatar: 'statics/avatars/016-boy-4-min.png',
        nickname: 'Ip Man'
      }, {
        id: 81,
        avatar: 'statics/avatars/017-man-3-min.png',
        nickname: 'Xiayu'
      }, {
        id: 91,
        avatar: 'statics/avatars/018-man-4-min.png',
        nickname: 'FengLongtian'
      }, {
        id: 121,
        avatar: 'statics/avatars/019-girl-7-min.png',
        nickname: 'YanXifang'
      }, {
        id: 131,
        avatar: 'statics/avatars/020-boy-5-min.png',
        nickname: 'MoLin'
      }, {
        id: 141,
        avatar: 'statics/avatars/021-man-5-min.png',
        nickname: 'MoChengyun'
      }, {
        id: 151,
        avatar: 'statics/avatars/022-girl-8-min.png',
        nickname: 'SuTang'
      }, {
        id: 161,
        avatar: 'statics/avatars/023-girl-9-min.png',
        nickname: 'Qinsan'
      }, {
        id: 171,
        avatar: 'statics/avatars/024-man-6-min.png',
        nickname: 'LuPing'
      }, {
        id: 181,
        avatar: 'statics/avatars/025-girl-10-min.png',
        nickname: 'FoLishen'
      }]
    }
  }
}
</script>

<style lang="stylus"
       scoped>
.docx
  position relative
  padding-top 20px
  padding-bottom 20px
  perspective 1000px
  &::before
    content ''
    position absolute
    top 0
    right 0
    width 0
    height 0
    border 20px solid #fff
    border-bottom-color transparent
    border-left-color transparent
  &:hover
    .corner
      transform rotateZ(-45deg) rotateY(180deg)
  .corner
    position absolute
    top 20px
    right 20px
    width 0
    height 0
    transform-style preserve-3d
    transform rotateZ(-45deg)
    transition all .5s ease
    z-index 10
    &::before, &::after
      content ''
      position absolute
      top -20px
      left -20px
      border-bottom-left-radius 4px
      backface-visibility hidden
    &::before
      transform rotateY(180deg) rotateZ(-135deg)
      border 20px solid $theme-placeholder
      border-top-color transparent
      border-right-color transparent
    &::after
      transform rotateZ(45deg)
      border 20px solid $theme-lighter
      border-top-color transparent
      border-right-color transparent
</style>
