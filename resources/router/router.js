import Main from '@/views/Dashboard'

// 不作为Main组件的子页面展示的页面单独写，如下
export const loginRouter = {
  path: '/login',
  name: 'login',
  meta: {
    title: 'Login - 登录',
    auth: false
  },
  hidden: true,
  component: () => import('@/views/auth/LoginView')
}
export const page403 = {
  path: '/403',
  meta: {
    title: '403-权限不足',
    auth: false
  },
  hidden: true,
  name: 'error-403',
  component: () => import('@/views/error-page/403')
}

export const page500 = {
  path: '/500',
  meta: {
    title: '500-服务端错误',
    auth: false
  },
  hidden: true,
  name: 'error-500',
  component: () => import('@/views/error-page/500')
}

// 作为Main组件的子页面展示但是不在左侧菜单显示的路由写在otherRouter里
export const dashboard = {
  path: '/',
  name: 'dashboard',
  component: Main,
  meta: {
    auth: true
  },
  hidden: true
}

// 作为Main组件的子页面展示并且在左侧菜单显示的路由写在appRouter里
export const appRouter = [
]

// 所有上面定义的路由都要写在下面的routers里
export const routers = [
  loginRouter,
  dashboard,
  ...appRouter,
  page500,
  page403
]
