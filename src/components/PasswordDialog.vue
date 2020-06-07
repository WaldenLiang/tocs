<template>
  <q-dialog v-model="visible">
    <q-card style="min-width: 400px;">
      <q-card-section>
        <div class="text-h6">RESET PASSWORD</div>
      </q-card-section>
      <q-card-section class="q-pt-none">
        <q-form
          @submit="onSubmit"
          class="q-gutter-md">
          <q-input v-model="oldPass"
                   standout
                   type="password"
                   hide-bottom-space
                   label="Old Password"
                   placeholder="Jean Doe"
                   color="theme-light" />
          <q-input v-model="newPass"
                   standout
                   type="password"
                   hide-bottom-space
                   label="New Password"
                   placeholder="Jean Doe"
                   color="theme-light" />
          <q-input v-model="confirmPass"
                   standout
                   type="password"
                   hide-bottom-space
                   label="Confirmation Password"
                   placeholder="Jean Doe"
                   color="theme-light" />
        </q-form>
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
      oldPass: '',
      newPass: '',
      confirmPass: ''
    }
  },
  methods: {
    show () {
      this.visible = true
    },
    onSubmit () {
    }
  }
}
</script>

<style scoped>

</style>
