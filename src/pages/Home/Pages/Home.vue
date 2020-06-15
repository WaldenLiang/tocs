<template>
  <div>
    <div class="q-mb-xl">
      <h2 class="text-h6 q-mb-lg"
          style="font-size: 16px; font-weight: bold">STARED PROJECT SHORTCUT</h2>
      <div class="row q-col-gutter-md">
        <project-item class="col-3" />
        <project-item class="col-3" />
        <project-item class="col-3" />
        <project-item class="col-3" />
        <project-item class="col-3" />
      </div>
    </div>
    <!--    <div class="q-mb-xl">-->
    <!--      <h2 class="text-h6 q-mb-lg"-->
    <!--          style="font-size: 16px; font-weight: bold">NEWEST ANNOUNCEMENT</h2>-->
    <!--      <q-list>-->
    <!--        <announcement-item />-->
    <!--        <q-separator spaced />-->
    <!--        <announcement-item />-->
    <!--        <q-separator spaced />-->
    <!--        <announcement-item />-->
    <!--        <q-separator spaced />-->
    <!--        <announcement-item />-->
    <!--      </q-list>-->
    <!--    </div>-->
    <div class="q-mb-xl">
      <h2 class="text-h6 q-mb-lg"
          style="font-size: 16px; font-weight: bold">STARED READING LINK SHORTCUT</h2>
      <div class="row q-col-gutter-md">
        <reading-link-item class="col-4" />
        <reading-link-item class="col-4" />
        <reading-link-item class="col-4" />
        <reading-link-item class="col-4" />
      </div>
    </div>
    <!--    <div>-->
    <!--      <h2 class="text-h6 q-mb-lg"-->
    <!--          style="font-size: 16px; font-weight: bold">NEWEST CHANGELOG</h2>-->
    <!--      <div>-->
    <!--        <changelog-item />-->
    <!--        <q-separator spaced-->
    <!--                     inset="item" />-->
    <!--        <changelog-item />-->
    <!--        <q-separator spaced-->
    <!--                     inset="item" />-->
    <!--        <changelog-item />-->
    <!--        <q-separator spaced-->
    <!--                     inset="item" />-->
    <!--        <changelog-item />-->
    <!--      </div>-->
    <!--    </div>-->
  </div>
</template>

<script>
// import AnnouncementItem from 'components/AnnouncementItem'
import ProjectItem from 'components/ProjectItem'
import ReadingLinkItem from 'components/ReadingLinkItem'
// import ChangelogItem from 'components/ChangelogItem'

export default {
  components: {
    // AnnouncementItem,
    ProjectItem,
    ReadingLinkItem
    // ChangelogItem
  },
  data () {
    return {
      announcementList: []
    }
  },
  created () {
  }
}
</script>

<style scoped>

</style>
