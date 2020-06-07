<template>
  <q-dialog v-model="visible">
    <q-card style="max-width: 398px">
      <q-card-section>
        <div class="text-h6">
          CHANGE AVATAR
        </div>
      </q-card-section>
      <div class="q-px-lg q-gutter-xs q-mb-sm"
           style="box-sizing: border-box">
        <q-avatar v-for="item in avatars"
                  :key="item"
                  font-size="0px"
                  size="55px">
          <img :src="item"
               :alt="item">
        </q-avatar>
      </div>
      <q-card-actions align="right"
                      class="text-primary">
        <q-btn color="theme-linear"
               text-color="theme-light"
               label="Submit"
               icon="check_circle" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import avatars from './avatars.json'

export default {
  data () {
    return {
      visible: false,
      avatars
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
