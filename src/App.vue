<template>
  <v-app>
    <nav-bar></nav-bar>
    <v-content>
      <v-container fluid>
        <router-view/>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import NavBar from '@/layouts/NavBar.vue'

export default {
  name: 'App',
  components: {
    'nav-bar': NavBar
  }
}
</script>

<style>

</style>
