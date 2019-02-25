import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { API_PATH } from '@/libs/consts'

Vue.use(VueAxios, axios)

// axios.defaults.headers.common['Authorization'] = 'Bearer ' +
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.baseURL = API_PATH

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  // Do something with response data
  return response
}, function (err) {
  let errors
  if (err.response.data.errors) {
    errors = '  #'
    errors += Object.values(err.response.data.errors).join('  #')
  }
  switch (err.response.status) {
    case 504:
    case 404:
      Vue.showSnack('服务器被吃了⊙﹏⊙∥')
      break
    case 403:
      Vue.showSnack(err.response.data.message || '权限不足,请联系管理员!')
      break
    case 419:
      Vue.showSnack('csrf错误')
      break
    case 500:
    default:
      Vue.showSnack(err.response.data.message + errors)
      break
  }
  return Promise.reject(err)
})
