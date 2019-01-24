import Vue from 'vue'
import store from '@/store'
import AxiosInterceptor from '@/interceptors/axios'
import RouterInterceptor from '@/interceptors/router'

Vue.use(require('@websanova/vue-auth'), {
  auth: require('@websanova/vue-auth/drivers/auth/bearer.js'),
  http: require('@websanova/vue-auth/drivers/http/axios.1.x.js'),
  router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js')
})

export default {
  install (Vue, options) {
    // In this way we'll expose our class in all Vue components
    Vue.showSnack = function (msg) { store.commit('snackbar/setSnack', msg) }
    Vue.prototype.$snack = function (msg) { store.commit('snackbar/setSnack', msg) }
    Vue.mixin({

    })
  }
}
