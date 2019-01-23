import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Login from '@/views/auth/Login'
import Dashboard from '@/views/Dashboard'

export default new Router({
    routes: [
        {
            path: '/login',
            name: 'login',
            component: Login,
            hidden: true,
            meta: {
                requireAuth: false
            }
        }, {
            path: '/',
            name: 'dashboard',
            component: Dashboard,
            hidden: true,
            meta: {
                requireAuth: true
            }
        }
    ]
});