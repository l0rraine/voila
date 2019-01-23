import router from '@/router'
import store from '@/store'

router.beforeEach((to, from, next) => {
  // If visiting login view but you already have logged in, you should not be able to see this view
  if (to.name === 'Login') {
    return next({})
  }
  // If you are visiting '/' and you are a guest then, you must be redirected to login
  if (to.meta.requireAuth && !store.state.user.name) {
    return next({
      path: '/login',
      query: {
        redirect: to.fullPath
      }
    })
  }

  return next()
})
