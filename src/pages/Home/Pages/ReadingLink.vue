<template>
  <div class="q-pt-xl">
    <div class="q-mb-lg">
      <div class="row q-col-gutter-md">
        <div class="col-4 cursor-pointer">
          <q-card class="bg-theme-linear text-theme-lighter">
            <q-card-section>
              <q-icon name="add_box"
                      size="42px" />
              <div class="text-h6">CREATE A LINK</div>
              <div class="text-subtitle2">share your article</div>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-4 cursor-pointer">
          <q-card class="bg-theme-linear text-theme-lighter">
            <q-card-section>
              <q-icon name="library_books"
                      size="42px" />
              <div class="text-h6">LIBRARY</div>
              <div class="text-subtitle2">find you want</div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
    <div>
      <div class="q-mb-lg flex items-center justify-between">
        <h2 class="text-h6 q-mb-sm"
            style="font-size: 16px; font-weight: bold">FOLLOWED READING LINK</h2>
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
        </q-tabs>
      </div>
      <div class="row q-col-gutter-md">
        <reading-link-item class="col-4" />
        <reading-link-item class="col-4" />
        <reading-link-item class="col-4" />
        <reading-link-item class="col-4" />
        <reading-link-item class="col-4" />
        <reading-link-item class="col-4" />
      </div>
    </div>
  </div>
</template>

<script>
import ReadingLinkItem from 'components/ReadingLinkItem'

export default {
  components: { ReadingLinkItem },
  data () {
    return {
      tab: 'all'
    }
  }
}
</script>

<style scoped>

</style>
