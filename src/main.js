import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//import Col from '@/components/Col'
import org from '@/base/index'
import '@/style/index.scss'
// console.log(lib)
Vue.config.productionTip = false
Vue.use(org.Row)
Vue.use(org.Col)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
