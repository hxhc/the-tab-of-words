// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import bus from '@/utils/bus'
import App from './App'

Vue.config.productionTip = false

document.documentElement.className = bus.store.settings.fontSize
document.body.className = bus.store.settings.theme

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})

console.log('// Signed in Chrome / Firefox Account to sync your settings.')
console.log('// You can press SPACEBAR / ENTER to get another random word.')
