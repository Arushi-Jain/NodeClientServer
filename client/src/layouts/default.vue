<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
     <q-toolbar color="secondary">
      <q-btn
        flat round dense
        icon="menu"
        @click="left = !left"
        aria-label="Toggle menu on left side"
      />
      <q-toolbar-title>
        CYRRUP SOLUTIONS
      </q-toolbar-title>
    </q-toolbar>
     <q-layout-drawer
      side="left"
      v-model="left"
      :behavior="behavior"
      :content-class="$q.theme === 'mat' ? 'bg-grey-3' : null"
    >
      <q-scroll-area class="fit">
        <q-list-header>
          <q-icon name="person" size="80pt" class="justify-center"/>
         </q-list-header>
        <q-item to="/">
          <q-item-side icon="home" />
          <q-item-main label= 'home' />
        </q-item>
        <q-item to="/users">
          <q-item-side icon="chrome_reader_mode" />
          <q-item-main label= 'users' />
        </q-item>
        <q-item >
          <q-item-side icon="settings" />
          <q-item-main label= 'settings'/>
        </q-item>
        <q-item to="/login">
          <q-item-side icon="power_settings_new" />
          <q-item-main label= 'logout' />
        </q-item>
      </q-scroll-area>
    </q-layout-drawer>
    </q-layout-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'LayoutDefault',
  data () {
    return {
      behavior: 'default',
      left: false
    }
  },
  methods: {
    openURL
  }
}
</script>

<style>
</style>
