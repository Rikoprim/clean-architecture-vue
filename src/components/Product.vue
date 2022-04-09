<template>
  <v-card hover outlined>
    <v-card-text>
      <v-img height="200" :src="product.image" :alt="product.title" />
      <p class="mt-6 mb-0 title success--text">{{product.title}}</p>
      <p class="pink--text body-1">${{product.price}}</p>
      <p>{{product.description}}</p>
      <add-cart :pushproduct="product"></add-cart>
    </v-card-text>
  </v-card>
</template>

<script>
import AddCart from '@/components/AddCart.vue'

export default {
  props: ['product'],
  components: {
    'add-cart': AddCart
  }
}
</script>