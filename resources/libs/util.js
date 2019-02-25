import Vue from 'vue'

import api from './api'

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

util.initRouter = function (vm) {
  const constRoutes = []
  const otherRoutes = []

  // 404路由需要和动态路由一起注入
  const otherRouter = [{
    path: '/*',
    name: 'error-404',
    meta: {
      title: '404-页面不存在',
      auth: false
    },
    component: 'error-page/404'
  }]
  // 模拟异步请求
  api.getMenu().then(res => {
    var menuData = res.data.data
    console.log(menuData)
    util.initRouterNode(constRoutes, menuData)
    util.initRouterNode(otherRoutes, otherRouter)
    // 添加主界面路由
    vm.$store.commit('updateAppRouter', constRoutes.filter(item => item.children.length > 0))
    // 添加全局路由
    vm.$store.commit('updateDefaultRouter', otherRoutes)
    // 刷新界面菜单
    // vm.$store.commit('updateMenulist', constRoutes.filter(item => item.children.length > 0))

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
  })
}

// 生成路由节点
util.initRouterNode = function (routers, data) {
  for (let item of data) {
    let menu = Object.assign({}, item)
    menu.component = import(`@/views/${menu.component}.vue`)
    // menu.component = lazyLoading(menu.component);

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

export default util
