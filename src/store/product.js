import apiFake from '@/helpers/fakeStoreApi'

const product = {
  namespaced: true,

  state: {
    products: []
  },

  actions: {
    getProducts ({ commit }) {
      apiFake.get(`/products`).then((response) => {
        commit('setProducts', response.data)
      }).catch(error => {
        console.log(error)
      })
    }
  },

  mutations: {
    setProducts (state, val) {
      state.products = val
    }
  },

  getters: {
    products (state) {
      return state.products
    }
  }
}

export default product
