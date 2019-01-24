import Vue from 'vue'
import Vuex from 'vuex'

import dashboard from './modules/dashboard'
import auth from './modules/auth'
import snackbar from './modules/snackbar'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    dashboard,
    auth,
    snackbar
  }
})
