import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import router from './router'

import 'element-ui/lib/theme-chalk/index.css'
import 'normalize.css'

import VueClipboard from 'vue-clipboard2'

VueClipboard.config.autoSetContainer = true // add this line
Vue.use(VueClipboard)

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
