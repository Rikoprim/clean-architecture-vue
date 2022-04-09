const cart = {
  namespaced: true,

  state: {
    carts: []
  },

  actions: {
    addCart ({ commit, getters }, payload) {
      let cart = getters.carts
      let data = payload.product
      data['quantity'] = payload.quantity
      cart.push(data)
      commit('setCart', cart)
    },
    deleteCart ({ commit, getters }, id) {
      console.log(id);
      let cart = []
      if (id) {
        for (let index = 0; index < getters.carts.length; index++) {
          const element = getters.carts[index]
          if (element.id !== id) {
            cart.push(element)
          }
        }
      }
      commit('setCart', cart)
    }
  },

  mutations: {
    setCart (state, val) {
      state.carts = val
    }
  },

  getters: {
    carts (state) {
      return state.carts
    }
  }
}

export default cart
