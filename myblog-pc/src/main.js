import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import axios from 'axios'
// import VueAxios from 'vue-axios'
import http from './utils/http'


// Vue.use(VueAxios, axios)

Vue.prototype.$http = http


Vue.config.productionTip = false

let app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

export default app
