import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import axios from 'axios'

Vue.config.productionTip = false
axios.defaults.baseURL = 'http://localhost:8080'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
