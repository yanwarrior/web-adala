import Vue from 'vue'
import Vuex from 'vuex'
import category from '@/store/modules/category'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    category
  },
  strict: debug
})