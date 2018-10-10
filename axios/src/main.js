import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

import router from './router'
import store from './store'

axios.defaults.baseURL = 'https://vue-axios-aa33b.firebaseio.com'
axios.defaults.headers.common['Authorization'] = 'afds'
axios.defaults.headers.get['Accept'] = 'application/json'

const requestInterceptor = axios.interceptors.request.use(config => {
  console.log('request interceptor', config)
  config.headers['something']
  return config
})
const responseInterceptor = axios.interceptors.response.use(res => {
  console.log('response interceptor', res)
  return res
})
axios.interceptors.request.eject(requestInterceptor)
axios.interceptors.response.eject(responseInterceptor)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
