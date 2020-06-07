<template>
  <common>
    <q-form
      @submit="onSubmit"
      class="q-gutter-md">
      <q-input
        v-model="form.account"
        standout="bg-theme-linear text-theme-light"
        label="EMAIL"
        placeholder="JeanDoe@excample.com"
        hide-hint
        hint="Only Email supported"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
        no-error-icon />
      <q-input
        v-model="form.nickname"
        standout="bg-theme-linear text-theme-light"
        label="NICKNAME"
        placeholder="Jean Doe"
        hide-hint
        hint="Type your nickname"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
        no-error-icon />
      <q-input
        v-model="form.password"
        type="password"
        standout="bg-theme-linear text-theme-light"
        label="PASSWORD"
        placeholder="******"
        hide-hint
        hint="Type your nickname"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
        no-error-icon />
      <q-input
        v-model="form.confirmationPassword"
        standout="bg-theme-linear text-theme-light"
        label="CONFIRMATION PASSWORD"
        placeholder="******"
        hide-hint
        hint="Type your nickname"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
        no-error-icon />
      <div>
        <q-btn class="full-width"
               label="Submit"
               type="submit"
               color="theme-linear"
               text-color="theme-light"
               size="18px" />
      </div>
      <div>
        <q-btn class="full-width"
               to="/sign-in"
               label="Already have a tocs account? Go Signing in." />
      </div>
    </q-form>
  </common>
</template>

<script>
import Common from './components/Common'

export default {
  components: {
    Common
  },
  data () {
    return {
      form: {
        account: '',
        nickname: '',
        password: '',
        confirmationPassword: ''
      }
    }
  },
  methods: {
    onSubmit () {

    }
  }
}
</script>

<style lang="stylus">
</style>
