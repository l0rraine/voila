import { dashboard } from '@/router/router'
import { router } from '@/router/index'

export default {
  state: {
    routers: [
      dashboard
    ]
  },
  mutations: {
    // 动态添加主界面路由，需要缓存
    updateAppRouter (state, routes) {
      state.routers.push(...routes)
      router.addRoutes(routes)
    },
    // 动态添加全局路由，不需要缓存
    updateDefaultRouter (state, routes) {
      router.addRoutes(routes)
    }
  }
}
