import axios from 'axios'

let api = {}

api.doLogin = function ({ login, password }) {
  return axios.post('/login', {
    params: {
      login: login,
      password: password
    }
  }).then(response => response.data).catch(() => {})
}

api.getDashboard = function ({ dashboardKey, filters }) {
  return axios.get(`dashboard/${dashboardKey}`, {
    params: { ...filters }
  }).then(response => response.data)
}

api.getMenu = function () {
  return axios.get('get_menus')
}

export default api
