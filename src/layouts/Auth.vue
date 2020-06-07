<template>
  <q-layout class="flex items-center justify-center">
    <q-page-container class="full-width flex items-center justify-center">
      <transition
        appear
        enter-active-class="animated fadeInRight"
        leave-active-class="animated fadeOutLeft">
        <router-view class="absolute" />
      </transition>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {}
</script>

<style scoped>

</style>
