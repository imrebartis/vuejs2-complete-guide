import Vue from 'vue'
import App from './App.vue'

Vue.directive('highlight', {
  bind(el, binding, vnode) {
    var delay = 0
    if (binding.modifiers['delayed']) {
      delay = 3000
    }
    setTimeout(() => {
      // el.style.backgroundColor = 'green'
      // el.style.backgroundColor = binding.value
      // if v-highlight:background:
      if (binding.arg === "background") {
        el.style.backgroundColor = binding.value
      } else {
        // if v-highlight:
        el.style.color = binding.value
      }
    }, delay)
  }
})


new Vue({
  el: '#app',
  render: h => h(App)
})
