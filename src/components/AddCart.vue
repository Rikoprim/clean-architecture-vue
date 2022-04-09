<template>
  <div>
    <v-btn block color="success" @click="addToCart" :loading="loading">Add to Cart</v-btn>
  </div>
</template>

<script>
export default {
  props: ['pushproduct'],
  data () {
    return {
      loading: false
    }
  },
  methods: {
    addToCart () {
      let data = {
        product: this.pushproduct,
        quantity: 1
      }
      this.loading = true
      this.$store.dispatch('cart/addCart', data, { root: true })
        .then(res => {
          this.loading = false
        })
    }
  }
}
</script>