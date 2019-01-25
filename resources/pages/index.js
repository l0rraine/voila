import Vue from 'vue'
// vuetify
import Vuetify from 'vuetify/lib'

import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader
import 'vuetify/src/stylus/app.styl'

import '@/styles/common.less'

import router from '@/router'
import store from '@/store'

import App from '@/App'

import Bootstrap from '@/bootstrap'

Vue.use(Vuetify, {
  iconfont: 'md'
})
// import RouterInterceptor from '@/interceptors/router'

Vue.router = router
App.router = Vue.router
Vue.use(Bootstrap)
Vue.config.productionTip = false

Vue.use(require('@websanova/vue-auth'), {
  tokenDefaultName: 'user-token',
  auth: require('@websanova/vue-auth/drivers/auth/bearer.js'),
  http: require('@websanova/vue-auth/drivers/http/axios.1.x.js'),
  router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js'),
})

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
