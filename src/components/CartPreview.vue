<template>
  <v-menu>
    <template v-slot:activator="{on}">
      <v-btn color="success" v-on="on">
        Checkout
        <v-badge v-if="carts.length > 0" :content="carts.length" inline></v-badge>
      </v-btn>
    </template>

    <v-card width="400">
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="headline font-weight-bold">Cart</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>
      <v-card-text v-if="carts.length > 0">
        <v-list>
          <v-list-item v-for="(item, idx) in carts" :key="idx">
            <v-list-item-avatar>
              <img :src="item.image" :alt="item.title">
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>{{item.title}}</v-list-item-title>
              <v-list-item-subtitle>{{item.quantity}} item</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
              <v-btn icon small>
                <v-icon @click="deleteCart(item.id)">mdi-delete</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list>

        <v-card-actions>
          <v-btn block color="primary" rounded @click="$route.name !== 'Checkout' && $router.push({name: 'Checkout'})">
            Procedd to checkout
          </v-btn>
        </v-card-actions>
      </v-card-text>

      <v-card-text v-else>
        <p>No Item</p>
      </v-card-text>
    </v-card>
  </v-menu>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters('cart', ['carts'])
  },
  methods: {
    ...mapActions('cart', ['deleteCart'])
  }
}
</script>