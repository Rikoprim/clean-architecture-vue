import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Checkout from '@/views/Checkout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/checkout',
      name: 'Checkout',
      component: Checkout
    }
  ]
})
