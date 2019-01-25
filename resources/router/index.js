import Vue from 'vue'
import Router from 'vue-router'

import LoginView from '@/views/auth/LoginView'
import Dashboard from '@/views/Dashboard'

import { getRouterBase } from '@/utils/util'

Vue.use(Router)

export default new Router({
  hashbang: false,
  linkActiveClass: 'active',
  mode: 'history',
  base: getRouterBase(),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      hidden: true,
      meta: {
        auth: false
      }
    }, {
      path: '/',
      name: 'dashboard',
      component: Dashboard,
      hidden: true,
      meta: {
        auth: true
      }
    }
  ]
})
