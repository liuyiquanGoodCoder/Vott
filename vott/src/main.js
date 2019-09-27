import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vott from 'vott-ct'

Vue.config.productionTip = false

debugger;
Vue.use(vott)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
