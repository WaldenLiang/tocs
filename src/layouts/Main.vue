<template>
  <q-layout view="lHh Lpr lFf">
    <q-header style="z-index: auto">
      <q-toolbar class="bg-white text-theme-dark">
        <q-toolbar-title class="flex items-center cursor-pointer"
                         style="font-size: 0"
                         @click="$router.push('/')">
          <logo class="q-mr-sm"
                style="width: 35px; height: 35px" />
          <span style="font-size: 24px; font-weight: bold">tocs</span>
        </q-toolbar-title>
        <div class="q-gutter-md flex items-center"
             style="font-size: 0">
          <q-btn flat
                 round
                 dense
                 icon="email" />
          <q-btn flat
                 round
                 dense
                 icon="help" />
          <q-btn flat
                 round
                 dense
                 icon="more_vert" />
          <q-select bottom-slots
                    v-model="language"
                    standout="bg-theme-linear"
                    dense
                    hide-bottom-space
                    rounded
                    :options="languageOptions"
                    :menu-offset="[0, 10]">
            <template v-slot:prepend>
              <q-icon name="public" />
            </template>
          </q-select>
          <q-btn round
                 style="font-size: 0">
            <q-avatar color="theme-dark"
                      text-color="theme-light">
              W
            </q-avatar>
            <q-menu max-width="500px"
                    :offset="[0, 10]"
                    auto-close>
              <div class="row no-wrap q-pa-md">
                <div class="column justify-center items-center">
                  <q-avatar size="72px"
                            color="theme-dark"
                            text-color="theme-light">W
                  </q-avatar>
                  <div class="text-subtitle1 q-mt-md q-mb-xs">
                    <div class="text-weight-bold text-center"
                         style="font-size: 20px">Walden Liang
                    </div>
                    <div class="text-center text-grey-6">waldenliang@outlook.com</div>
                  </div>
                  <q-btn class="q-mt-md"
                         color="theme-lighter"
                         label="sign out"
                         to="/sign-in" />
                </div>
                <q-separator vertical
                             inset
                             class="q-mx-md" />
                <div class="column">
                  <div class="text-h6 q-mb-md">Actions</div>
                  <div>
                    <q-btn class="full-width q-mb-sm"
                           color="theme-linear"
                           align="between"
                           icon="visibility"
                           label="View Profile Detail" />
                    <q-btn class="full-width q-mb-sm"
                           color="theme-linear"
                           align="between"
                           icon="face"
                           label="Change Avatar"
                           @click="$refs.avatarDialog.show()" />
                    <q-btn class="full-width q-mb-sm"
                           align="between"
                           color="theme-linear"
                           icon="account_circle"
                           label="Change Nickname"
                           @click="$refs.nicknameDialog.show()" />
                    <q-btn class="full-width"
                           align="between"
                           color="theme-linear"
                           icon="lock"
                           label="Reset Password"
                           @click="$refs.passwordDialog.show()" />
                  </div>
                </div>
              </div>
            </q-menu>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <avatar-dialog ref="avatarDialog" />
    <nickname-dialog ref="nicknameDialog" />
    <password-dialog ref="passwordDialog" />
  </q-layout>
</template>

<script>
import Logo from 'components/Logo'
import AvatarDialog from 'components/AvatarDialog'
import NicknameDialog from 'components/NicknameDialog'
import PasswordDialog from 'components/PasswordDialog'

export default {
  name: 'MainLayout',
  components: {
    Logo,
    AvatarDialog,
    NicknameDialog,
    PasswordDialog
  },
  data () {
    return {
      language: 'ENGLISH',
      languageOptions: [
        {
          value: 'en-US',
          label: 'ENGLISH'
        },
        {
          value: 'zh-CN',
          label: '简体中文'
        }
      ]
    }
  }
}
</script>
