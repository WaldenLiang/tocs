<template>
  <div class="q-pt-xl">
    <div class="q-mb-lg">
      <div class="row q-col-gutter-md">
        <div class="col-4 cursor-pointer">
          <q-card class="bg-theme-linear text-theme-lighter"
                  @click="$refs.projectDialog.show()">
            <q-card-section>
              <q-icon name="add_box"
                      size="42px" />
              <div class="text-h6">CREATE PROJECT</div>
              <div class="text-subtitle2">whenever you like</div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
    <div>
      <div class="q-mb-lg flex items-center justify-between">
        <h2 class="text-h6 q-mb-sm"
            style="font-size: 16px; font-weight: bold">FOLLOWED PROJECTS</h2>
        <q-tabs v-model="tab"
                narrow-indicator
                dense
                align="left">
          <q-tab class="text-theme-dark"
                 name="all"
                 label="ALL" />
          <q-tab class="text-theme-dark"
                 name="star"
                 label="STARED" />
          <q-tab class="text-theme-dark"
                 name="owner"
                 label="AS OWNER" />
          <q-tab class="text-theme-dark"
                 name="admin"
                 label="AS ADMIN" />
          <q-tab class="text-theme-dark"
                 name="member"
                 label="AS MEMBER" />
          <q-tab class="text-theme-dark"
                 name="guest"
                 label="AS GUEST" />
        </q-tabs>
      </div>
      <div class="row q-col-gutter-md">
        <project-item class="col-3" />
        <project-item class="col-3" />
        <project-item class="col-3" />
        <project-item class="col-3" />
        <project-item class="col-3" />
      </div>
    </div>
    <project-dialog ref="projectDialog" />
  </div>
</template>

<script>
import ProjectItem from 'components/ProjectItem'
import ProjectDialog from 'components/ProjectDialog'

export default {
  components: {
    ProjectItem,
    ProjectDialog
  },
  data () {
    return {
      tab: 'all'
    }
  }
}
</script>

<style scoped>

</style>
