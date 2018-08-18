import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './routes'

Vue.use(VueRouter)
const router = new VueRouter({
  routes,
  // no hashtag style:
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { selector: to.hash};
    }
    return {x: 0, y: 0};
  }
})

router.beforeEach((to, from, next) => {
  // this gets executed all the time, so use it for generic checks
  console.log('global beforeEach');
  //let the request continue its journey (abort: next(false), redirect: next('/user'))
  next();
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
