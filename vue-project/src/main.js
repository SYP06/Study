import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//样式重置和rem重置
import './assets/css/reset.css'
import './assets/js/rem.js'

//引入第三方库
import axios from 'axios'
import VueAxios from 'vue-axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

//一定要分开写，不要都合在一个里面 
Vue.use(VueAxios, axios)
Vue.use(ElementUI)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
