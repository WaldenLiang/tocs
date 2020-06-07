<template>
  <div style="width: 95%; max-width: 400px">
    <div class="q-mb-lg text-center">
      <logo style="width: 80px; height: 80px" />
      <h1 class="q-my-none text-theme-dark"
          style="font-size: 45px">
        {{ $route.name === 'SignIn'? 'Sign in' : 'Sign up' }}
        <span class="text-theme-dark"
              style="font-weight: 500">tocs</span>
      </h1>
    </div>
    <div>
      <slot />
    </div>
    <div class="q-mt-lg">
      <div class="text-grey-6 text-center"
           style="font-weight: bold">
        <div class="divide">
          <span class="q-px-md">Design by waldenliang@outlook.com</span>
        </div>
      </div>
      <div class="q-gutter-md text-center q-mt-md">
        <a href="https://github.com/WaldenLiang"
           target="_blank"
           class="decoration-none">
          <q-btn round
                 color="purple"
                 to="">
            <q-icon name="fab fa-github" />
          </q-btn>
        </a>
        <a href="https://waldenliang.github.io/"
           target="_blank"
           class="decoration-none">
          <q-btn round
                 color="orange">
            <q-icon name="fas fa-rss" />
          </q-btn>
        </a>
        <a href="mailto:waldenliang@outlook.com"
           class="decoration-none">
          <q-btn round
                 color="primary">
            <q-icon name="fas fa-envelope" />
          </q-btn>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from 'components/Logo'

export default {
  components: {
    Logo
  }
}
</script>

<style lang="stylus">
</style>
