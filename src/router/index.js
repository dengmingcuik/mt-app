import Vue from 'vue'
import VueRouter from 'vue-router'
import DefaultPage from '@/layout/DefaultPage'
import Index from '@/page/Index'

Vue.use(VueRouter)

export default new VueRouter({
  scrollBehavior() {
    return {
      x: 0,
      y: 0
    }
  },
  routes: [
    {
      path: '/',
      name: 'defaultPage',
      redirect: '/index',
      component: DefaultPage,
      children: [
        {
          path: '/index',
          name: 'index',
          component: Index
        },
        {
          path: '/changeCity',
          name: 'changeCity',
          component: () => import('@/page/ChangeCity')
        },
        {
          path: '/s/:name',
          name: 'goods',
          component: () => import('@/page/GoodsList')
        },
        {
          path: '/detail',
          name: 'detail',
          component: () => import('@/page/Detail')
        }
      ]
    },
    {
      path: '/blank',
      name: 'BlankPage',
      component: () => import('@/layout/BlankPage'),
      children: [
        {
          path: '/login',
          name: 'login',
          component: () => import("@/page/Login")
        },
        {
          path: '/register',
          name: 'register',
          component: () => import("@/page/Register")
        }
      ]
    }
  ]
})
