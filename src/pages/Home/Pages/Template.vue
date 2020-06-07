<template>
  <div class="q-pt-xl">
    <div class="q-mb-lg">
      <div class="row q-col-gutter-md">
        <div class="col-4 cursor-pointer">
          <q-card class="bg-theme-linear text-theme-lighter full-height">
            <q-card-section>
              <q-icon name="add_box"
                      size="42px" />
              <div class="text-h6">CREATE TEMPLATE</div>
              <div class="text-subtitle2">custom template</div>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-4 cursor-pointer">
          <q-card class="bg-theme-linear text-theme-lighter full-height">
            <q-card-section>
              <q-icon name="store"
                      size="42px" />
              <div class="text-h6">TEMPLATE STORE</div>
              <div class="text-subtitle2">find you really want</div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
    <div>
      <h2 class="text-h6 q-mb-sm"
          style="font-size: 16px; font-weight: bold">TEMPLATES</h2>
      <div class="row q-col-gutter-md">
        <template-item class="col-4" />
        <template-item class="col-4" />
        <template-item class="col-4" />
        <template-item class="col-4" />
        <template-item class="col-4" />
      </div>
    </div>
  </div>
</template>

<script>
import TemplateItem from 'components/TemplateItem'

export default {
  components: { TemplateItem }
}
</script>

<style scoped>

</style>
