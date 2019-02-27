import { dashboard } from '@/router/router'
import { router } from '@/router/index'

export default {
  namespaced: true,
  state: {
    routers: [
      dashboard
    ],
    menuList: []
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
    },
    // 接受前台数组，刷新菜单
    updateMenulist (state, routes) {
      state.menuList = routes
    }
  }
}
