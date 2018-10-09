import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

import router from './router'
import store from './store'

axios.defaults.baseURL = 'https://vue-axios-aa33b.firebaseio.com'
axios.defaults.headers.common['Authorization'] = 'afds'
axios.defaults.headers.get['Accept'] = 'application/json'

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
