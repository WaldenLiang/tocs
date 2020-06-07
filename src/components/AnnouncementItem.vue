<template>
  <q-item>
    <q-item-section>
      <q-item-label class="text-theme-dark"
                    style="font-size: 16px; font-weight: 500">Ubi est azureus absolutio
      </q-item-label>
      <q-item-label caption
                    style="font-size: 14px">Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.
      </q-item-label>
      <q-item-label>
        <q-chip square
                dense>
          <q-tooltip>
            Announcement Level
          </q-tooltip>
          <q-avatar icon="equalizer"
                    color="red"
                    text-color="white" />
          Important
        </q-chip>
        <q-chip square
                dense>
          <q-tooltip>
            Creator
          </q-tooltip>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/boy-avatar.png"
                 alt="">
          </q-avatar>
          John
        </q-chip>
        <q-chip square
                dense>
          <q-tooltip>
            Location
          </q-tooltip>
          <q-avatar icon="room"
                    color="theme-lighter"
                    text-color="white" />
          Bosma Lab
        </q-chip>
      </q-item-label>
    </q-item-section>
    <q-item-section side
                    top>
      <q-item-label caption>
        1 hour ago
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
export default {}
</script>

<style scoped>

</style>
