<template>
  <v-app-bar
    app
    color="blue-grey darken-2"
    dark
    elevation="1">
    <v-toolbar-title>Vue Shopping Cart Architecture</v-toolbar-title>
    <v-spacer />

    <cart-preview></cart-preview>
  </v-app-bar>
</template>

<script>
import CartPreview from '@/components/CartPreview'

export default {
  components: {
    'cart-preview': CartPreview
  }
}
</script>