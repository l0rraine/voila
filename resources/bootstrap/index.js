import store from '@/store'
import '@/interceptors/axios'

export default {
  install (Vue, options) {
    // In this way we'll expose our class in all Vue components
    Vue.showSnack = function (msg) { store.commit('snackbar/setSnack', msg) }
    Vue.prototype.$snack = function (msg) { store.commit('snackbar/setSnack', msg) }
    Vue.mixin({

    })
  }
}
