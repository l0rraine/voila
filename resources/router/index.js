import Vue from 'vue'
import util from '@/libs/util'
import VueRouter from 'vue-router'
import { routers } from './router'

Vue.use(VueRouter)

// 路由配置
const RouterConfig = {
  hashbang: false,
  linkActiveClass: 'active',
  base: util.getRouterBase(),
  // mode: 'history',
  routes: routers
}

export const router = new VueRouter(RouterConfig)

router.beforeEach((to, from, next) => {
  util.title(to.meta.title)
  util.toDefaultPage(routers, to.name, router, next)
  next()
})

router.afterEach((to) => {
  // Util.openNewPage(router.app, to.name, to.params, to.query)
  window.scrollTo(0, 0)
})
