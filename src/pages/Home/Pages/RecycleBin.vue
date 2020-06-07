<template>
  <div class="q-pt-xl">
    <div class="q-mb-lg">
      <div class="row q-col-gutter-md">
        <div class="col-4 cursor-pointer">
          <q-card class="bg-theme-linear text-theme-lighter">
            <q-card-section>
              <q-icon name="delete"
                      size="42px" />
              <div class="text-h6">EMPTY RECYCLE BIN</div>
              <div class="text-subtitle2">remove all projects</div>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-4 cursor-pointer">
          <q-card class="bg-theme-linear text-theme-lighter">
            <q-card-section>
              <q-icon name="sync"
                      size="42px" />
              <div class="text-h6">REFRESH</div>
              <div class="text-subtitle2">sync data</div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
    <div>
      <div class="q-mb-lg flex items-center justify-between">
        <h2 class="text-h6 q-mb-sm"
            style="font-size: 16px; font-weight: bold">DELETED PROJECTS</h2>
      </div>
      <div class="row q-col-gutter-md">
        <project-item class="col-3" />
        <project-item class="col-3" />
        <project-item class="col-3" />
        <project-item class="col-3" />
        <project-item class="col-3" />
      </div>
    </div>
  </div>
</template>

<script>
import ProjectItem from 'components/ProjectItem'

export default {
  components: { ProjectItem },
  data () {
    return {
      tab: 'all'
    }
  }
}
</script>

<style scoped>

</style>
