export default {
  namespaced: true,
  state: {
    snack: ''
  },
  mutations: {
    setSnack (state, snack) {
      state.snack = snack
    }
  }
}
