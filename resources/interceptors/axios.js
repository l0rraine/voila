import Vue from 'vue'
import axios from 'axios'
import { API_PATH } from '@/utils/consts'

axios.defaults.headers.common['X-CSRF-TOKEN'] = window.Laravel.csrfToken
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.baseURL = API_PATH

axios.interceptors.request.use(function (config) {
  config.headers['Authorization'] = 'sdfsdfsf'

  return config
}, function (error) {
  return Promise.reject(error)
})

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  // Do something with response data
  return response
}, function (err) {
  switch (err.response.status) {
    case 504:
    case 404:
      Vue.showSnack('服务器被吃了⊙﹏⊙∥')
      break
    case 403:
      Vue.showSnack('权限不足,请联系管理员!')
      break
    case 419:
      Vue.showSnack('csrf错误')
      break
    default:
      Vue.showSnack('未知错误!')
      break
  }
  return Promise.reject(err)
})
