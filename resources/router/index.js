import Vue from 'vue'
import VueRouter from 'vue-router'
import { routers } from './router'
import util from '@/libs/util'

Vue.use(VueRouter)

// 路由配置
const RouterConfig = {
  // hashbang: false,
  // linkActiveClass: 'active',
  // mode: 'history',
  base: util.getRouterBase(),
  // mode: 'history',
  routes: routers
}

export const router = new VueRouter(RouterConfig)

router.beforeEach((to, from, next) => {
  // Util.title(to.meta.title)
  // Util.toDefaultPage(routers, to.name, router, next)
  next()
})

router.afterEach((to) => {
  // Util.openNewPage(router.app, to.name, to.params, to.query)
  window.scrollTo(0, 0)
})
