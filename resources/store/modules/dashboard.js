import filters from './filters'
import api from '@/libs/api'

export const SET_READY = 'SET_READY'
export const UPDATE = 'UPDATE'

export default {
  namespaced: true,
  modules: {
    filters
  },
  state: {
    ready: false,
    data: null,
    widgets: null,
    config: null,
    layout: null,
    auth: null
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
    auth (state, auth) {
      state.auth = auth
    }
  },
  actions: {
    async get ({ state, commit, dispatch, getters }, { dashboardKey, filterValues }) {
      const data = await api.getDashboard({
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
}
