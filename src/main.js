import Vue from 'vue'
import Antd from 'ant-design-vue'
import App from './App'
import store from '@/store'
import 'ant-design-vue/dist/antd.css'
import router from './router'

Vue.config.productionTip = false

Vue.use(Antd)

new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
