<template>
  <div>
    <q-card class="cursor-pointer"
            @click="$router.push('/project/adsghasf')">
      <q-img src="https://cdn.quasar.dev/img/parallax2.jpg"
             basic>
        <div class="absolute-bottom text-subtitle2 flex items-center justify-between no-wrap">
          Audax alter exsul
          <q-btn icon="more_vert"
                 round
                 size="12px"
                 @click.stop>
            <q-menu>
              <q-list>
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
        </div>
      </q-img>
    </q-card>
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus"
       scoped>
.q-img__content > div
  padding 8px
</style>
