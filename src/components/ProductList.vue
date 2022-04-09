<template>
  <div>
    <v-row>
      <v-col md="4" sm="6" xs="12" v-for="(item, idx) in products" :key="idx">
        <product class="my-5" :key="idx" :product="item"></product>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Product from '@/components/Product.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    'product': Product
  },
  mounted () {
    this.$store.dispatch('product/getProducts', null, { root: true })
  },
  computed: {
    ...mapGetters('product', ['products'])
  }
}
</script>