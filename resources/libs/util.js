import Vue from 'vue'

import api from './api'
import lazyLoading from './lazyLoading.js'

export const hyphenate = str => str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
export const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1)
export const callConsole = (func, str, ...data) => console[func](`SHARP : ${str}`, ...data)
export let log = (...args) => callConsole('log', ...args)
export let warn = (...args) => callConsole('warn', ...args)
export let error = (...args) => callConsole('error', ...args)

let util = {

}

export const ignoreWarns = callback => {
  Vue.config.silent = true
  callback()
  Vue.config.silent = false
}

util.parseBlobJSONContent = function (blob) {
  return new Promise(resolve => {
    let reader = new FileReader()
    reader.addEventListener('loadend', function () {
      resolve(JSON.parse(reader.result))
    })
    reader.readAsText(blob)
  })
}

util.getFileName = function (headers = {}) {
  let { 'content-disposition': disposition } = headers
  if (disposition && disposition.includes('attachment')) {
    let filenameRE = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/
    let matches = filenameRE.exec(disposition)
    if (matches != null && matches[1]) {
      return matches[1].replace(/['"]/g, '')
    }
  }
  return null
}

util.getBaseUrl = function () {
  if (process.env.NODE_ENV === 'production') {
    const meta = document.head.querySelector('meta[name=baseUrl]')
    return meta ? `/${meta.content}` : '/admin'
  } else {
    return ''
  }
}

util.getApiUrl = function () {
  if (process.env.NODE_ENV === 'production') {
    const meta = document.head.querySelector('meta[name=apiUrl]')
    return meta ? `/${meta.content}` : '/admin'
  } else {
    return 'http://localhost:1010/admin'
  }
}

util.title = function (title) {
  title = title || 'Voila admin'
  window.document.title = title
}

util.initRouter = function (vm) {
  const constRoutes = []
  const otherRoutes = []

  // 404路由需要和动态路由一起注入
  const otherRouter = [{
    path: '/*',
    name: 'error-404',
    alias: '*',
    meta: {
      title: '404-页面不存在'
    },
    component: 'error-page/404'
  }]
  // 模拟异步请求
  api.getMenu().then(res => {
    const menuData = res.data.data
    util.initRouterNode(constRoutes, menuData)
    util.initRouterNode(otherRoutes, otherRouter)
    // 添加主界面路由
    vm.$store.commit('routes/updateAppRouter', constRoutes.filter(item => item.children.length > 0))
    // 添加全局路由
    vm.$store.commit('routes/updateDefaultRouter', otherRoutes)
    // 刷新界面菜单
    vm.$store.commit('routes/updateMenulist', constRoutes.filter(item => item.children.length > 0))

    // let tagsList = []
    //
    // vm.$store.state.app.routers.map((item) => {
    //   if (item.children.length <= 1) {
    //     tagsList.push(item.children[0])
    //   } else {
    //     tagsList.push(...item.children)
    //   }
    // })
    // vm.$store.commit('setTagsList', tagsList)

    console.log(vm.$store.state.routes.routers)
  })
}

// 生成路由节点
util.initRouterNode = function (routers, data) {
  for (let item of data) {
    let menu = Object.assign({}, item)
    // menu.component = import(`@/views/${menu.component}.vue`)
    menu.component = lazyLoading(menu.component)
    if (item.children && item.children.length > 0) {
      menu.children = []
      util.initRouterNode(menu.children, item.children)
    }
    let meta = {}
    // 给页面添加标题
    meta.permission = menu.permission ? menu.permission : null
    meta.title = menu.title ? menu.title : null

    menu.meta = meta

    routers.push(menu)
  }
}

util.oneOf = function (ele, targetArr) {
  if (targetArr.indexOf(ele) >= 0) {
    return true
  } else {
    return false
  }
}

util.getRouterBase = function () {
  return window.config.routeBase
}

/**
 * 访问路由时
 *
 * @param routers
 * @param name
 * @param route
 * @param next
 */
util.toDefaultPage = function (routers, name, route, next) {
  let len = routers.length
  let i = 0
  let notHandle = true
  while (i < len) {
    if (routers[i].name === name && routers[i].children && routers[i].redirect === undefined) {
      route.replace({
        name: routers[i].children[0].name
      })
      notHandle = false
      next()
      break
    }
    i++
  }
  if (notHandle) {
    next()
  }
}

export default util
