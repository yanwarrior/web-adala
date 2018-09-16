import ProductService from '@/services/ProductService'


const state = {
  products: [],
  q: '',
  service: new ProductService()
}

const getters = {
  getProducts(state) {
    return state.products
  },

  getQ(state) {
    return `Search result "${state.q}"`
  }
}

const mutations = {
  setProducts(state, { data }) {
    state.products = data.results
  },

  setQ(state, q) {
    state.q = q
  }
}

const actions = {
  setProduct(context, {slug}) {
    context.state.service.all(slug)
      .then(resp => {
        console.log(resp)
      })
  },

  searchProducts(context, {q}) {
    context.commit('setQ', q)
    context.state.service.search(q) 
      .then(resp => {
        context.commit('setProducts', resp)
      })
  }
}

export default {
  namespaced: true,
  state, 
  getters,
  mutations,
  actions
}