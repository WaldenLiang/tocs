<template>
  <q-dialog v-model="visible">
    <q-card style="min-width: 400px;">
      <q-card-section>
        <div class="text-h6">CHANGE NICKNAME</div>
      </q-card-section>
      <q-card-section class="q-pt-none">
        <q-input v-model="nickname"
                 standout
                 hide-bottom-space
                 label="Nickname"
                 placeholder="Jean Doe"
                 color="theme-light" />
      </q-card-section>
      <q-card-section align="right">
        <q-btn color="theme-linear"
               text-color="theme-light"
               label="Submit"
               icon="check_circle"
               @click="visible = false" />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  data () {
    return {
      visible: false,
      nickname: ''
    }
  },
  methods: {
    show () {
      this.visible = true
    }
  }
}
</script>

<style scoped>

</style>
