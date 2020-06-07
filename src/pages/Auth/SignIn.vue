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
      <div>
        <q-btn class="full-width"
               label="Submit"
               type="submit"
               color="theme-linear"
               text-color="theme-light"
               size="18px"
               to="/" />
      </div>
      <div>
        <q-btn class="full-width"
               to="/sign-up"
               label="No tocs account? Go Signing up." />
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
        password: ''
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
