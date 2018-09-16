import CategoryService from '@/services/CategoryService'


const state = {
  categories: [],
  service: new CategoryService()
}

const getters = {
  getCategories(state) {
    return state.categories
  }
}

const mutations = {
  setCategories(state, payload) {
    state.categories = payload
  }
}

const actions = {
  initCategories(context, payload) {
    context.state.service.getCategories()
      .then(resp => {
        context.commit('setCategories', resp.data.results)
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