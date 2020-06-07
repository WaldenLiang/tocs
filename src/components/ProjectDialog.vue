<template>
  <q-dialog v-model="visible">
    <q-card style="min-width: 450px">
      <q-card-section>
        <div class="text-h6">CREATE PROJECT</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-form @submit="onSubmit"
                class="q-gutter-md">
          <q-input v-model="form.name"
                   standout
                   label="Project Name"
                   color="theme-lighter"
                   type="text" />
          <q-input v-model="form.comment"
                   standout
                   label="Project Comment"
                   color="theme-lighter"
                   type="textarea" />
        </q-form>
      </q-card-section>

      <q-card-actions align="right"
                      class="text-primary">
        <q-btn color="theme-linear"
               text-color="theme-lighter"
               icon="check_circle"
               label="Submit" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  data () {
    return {
      visible: false,
      form: {
        name: '',
        comment: ''
      }
    }
  },
  methods: {
    onSubmit () {
    },
    show () {
      this.visible = true
    }
  }
}
</script>

<style scoped>

</style>
