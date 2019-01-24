import Vue from 'vue'
// vuetify
import Vuetify from 'vuetify/lib'

import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader
import 'vuetify/src/stylus/app.styl'

import '@/styles/common.less'

import Bootstrap from '@/bootstrap'

import router from '@/router'
import store from '@/store'

import App from '@/App'

Vue.use(Vuetify, {
  iconfont: 'md'
})

Vue.use(Bootstrap)
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
