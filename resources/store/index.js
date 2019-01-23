import Vue from 'vue'
import Vuex from 'vuex'
import { getDashboard } from '../utils/api'

Vue.use(Vuex)

export const SET_READY = 'SET_READY'
export const UPDATE = 'UPDATE'

export default new Vuex.Store({
  state: {
    ready: false,
    data: null,
    widgets: null,
    routes: null,
    config: null,
    layout: null,
    user: {
      name: window.localStorage.getItem('user' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('user' || '[]')).name,
      apiToken: window.localStorage.getItem('user' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('user' || '[]')).api_token

    }
  },
  mutations: {
    [UPDATE] (state, { data, layout, widgets, config }) {
      state.data = data
      state.widgets = widgets
      state.layout = layout
      state.config = config
    },
    [SET_READY] (state, ready) {
      state.ready = ready
    },
    login (state, user) {
      state.user = user
      window.localStorage.setItem('user', JSON.stringify(user))
    },
    logout (state) {
      window.localStorage.removeItem('user')
    }
  },
  actions: {
    async get ({ state, commit, dispatch, getters }, { dashboardKey, filterValues }) {
      const data = await getDashboard({
        dashboardKey,
        filters: getters['filters/getQueryParams'](filterValues)
      })
      commit(UPDATE, {
        data: data.data,
        widgets: data.widgets,
        layout: data.layout,
        config: data.config
      })
      await dispatch('filters/update', {
        filters: data.config.filters,
        values: filterValues
      })
      commit(SET_READY, true)
    }
  }
})
