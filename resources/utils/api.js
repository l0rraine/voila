import axios from 'axios'

export function doLogin ({ login, password }) {
  return axios.post('/login', {
    params: {
      login: login,
      password: password
    }
  }).then(response => response.data).catch(() => {})
}

export function getDashboard ({ dashboardKey, filters }) {
  return axios.get(`dashboard/${dashboardKey}`, {
    params: { ...filters }
  }).then(response => response.data)
}
