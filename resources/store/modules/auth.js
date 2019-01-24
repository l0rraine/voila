export default {
  namespaced: true,
  state: {
    name: window.localStorage.getItem('user' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('user' || '[]')).name,
    apiToken: window.localStorage.getItem('user' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('user' || '[]')).api_token
  },
  mutations: {
    login (state, user) {
      state.name = user.name
      state.apiToken = user.apiToken
      window.this.$storelocalStorage.setItem('user', JSON.stringify(user))
    },
    logout (state) {
      window.localStorage.removeItem('user')
    }
  }
}
