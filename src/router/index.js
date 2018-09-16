import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/components/pages/IndexPage'
import ProductSearch from '@/components/pages/ProductSearch'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'IndexPage',
      component: IndexPage
    },
    {
      path: '/search',
      name: 'ProductSearch',
      component: ProductSearch
    }
  ]
})
