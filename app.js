

Vue.component('my-cmp', {
  data: function() {
    return {
      status: 'Critical'
    }
  },
  template: '<p>Server status: {{status}}</p>'
})

new Vue({
    el: '#app'
  });
