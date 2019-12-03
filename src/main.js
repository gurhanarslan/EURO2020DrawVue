import Vue from 'vue'
import App from './EURO2020.vue'
import Pool from './Pool.vue'


Vue.component('pool-section',Pool)

new Vue({
  el: '#app',
  render: h => h(App)
})
