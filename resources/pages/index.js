import Vue from 'vue'

import '@/styles/common.less'

import App from '@/App'

import '@/bootstrap'

import '@/interceptors/axios'
import '@/interceptors/router'

import router from '@/router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
