import Vue from 'vue'
import Vuex from 'vuex'

import dashboard from './modules/dashboard'
import snackbar from './modules/snackbar'
import routes from './modules/routes'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    dashboard,
    snackbar,
    routes
  }
})
