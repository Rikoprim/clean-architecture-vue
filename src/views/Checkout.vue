<template>
  <div>
    <v-card>
      <v-data-table
        :items="dataCarts"
        :headers="headers"
        hide-default-footer
      >
        <template v-slot: item.thumbnailUrl="{item}">
          <div class="p-2">
            <img width="60" :src="item.thumbnailUrl" :alt="item.product" />
          </div>
        </template>
        <template v-slot: item.product="{item}">
          <div class="d-flex flex-column py-3">
            <span class="title success--text">{{item.product}}</span>
            <span class="subtitle-2">{{item.description}}</span>
          </div>
        </template>
      </v-data-table>
      <v-card-actions class="pa-4">
        <v-btn @click="$router.push({name: 'Home'})">Continue Shopping</v-btn>
        <v-spacer/>
        <v-btn class="px-4" color="primary">Confirm</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      headers: [
        {value: 'thumbnailUrl', width: 50, class: 'title'},
        {value: 'product', text: 'Product', width: 300, class: 'header'},
        {value: 'quantity', text: 'Quantity', class: 'header'},
        {value: 'price', text: 'Price', class: 'header'},
        {value: 'subtotal', text: 'Subtotal', class: 'header'}
      ],
      success: false
    }
  },
  computed: {
    ...mapGetters('cart', ['carts']),
    dataCarts: function () {
      return this.carts.map(item => ({
        thumbnailUrl: item.image,
        product: item.title,
        description: item.description,
        quantity: item.quantity,
        price: `$${item.price.toLocaleString()}`,
        subtotal: `$${(item.quantity * item.price).toLocaleString()}`
      }))
    }
  }
}
</script>

<style>
  .header {
    font-size: 0.9em !important;
  }
</style>