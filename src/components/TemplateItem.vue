<template>
  <div>
    <q-card class="my-card">
      <q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg" />
      <q-card-section>
        <q-btn round
               class="absolute"
               style="top: 0; right: 12px; transform: translateY(-50%)">
          <q-avatar color="theme-linear"
                    text-color="theme-lighter">
            W
          </q-avatar>
        </q-btn>
        <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis">
            Cafe Basilico
          </div>
        </div>
      </q-card-section>
      <q-card-section class="q-pt-none">
        <div class="text-caption text-grey">
          Small plates, salads & sandwiches in an intimate setting.
        </div>
      </q-card-section>
      <q-separator />
      <q-card-actions>
        <q-btn flat
               round
               icon="event" />
        <q-btn flat
               color="primary">
          Reserve
        </q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>

</style>
