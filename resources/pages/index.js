import Vue from 'vue'
// vuetify
import Vuetify from 'vuetify/lib'

import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader
import 'vuetify/src/stylus/app.styl'

import '@/styles/common.less'

import { router } from '@/router/index'
import util from '@/libs/util.js'

import App from '@/App'

import Bootstrap from '@/bootstrap'

import store from '@/store'

Vue.use(Vuetify, {
  iconfont: 'md'
})

Vue.router = router
App.router = Vue.router
Vue.use(Bootstrap)
Vue.config.productionTip = false

Vue.use(require('@websanova/vue-auth'), {
  tokenDefaultName: 'user-token',
  auth: require('@websanova/vue-auth/drivers/auth/bearer.js'),
  http: require('@websanova/vue-auth/drivers/http/axios.1.x.js'),
  router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js')
})

new Vue({
  store,
  router: router,
  render: h => h(App),
  created () {
    // 调用方法，动态生成路由
    util.initRouter(this)
  }
}).$mount('#app')
