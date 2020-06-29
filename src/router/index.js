/*
  路由器对象模块
*/
import Vue from 'vue'
import VueRouter from 'vue-router'
import Msite from '@/views/Msite/Msite'
import Search from '@/views/Search/Search'
import Order from '@/views/Order/Order'
import Profile from '@/views/Profile/Profile'
import Login from '@/views/Login/Login'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/msite',
      component: Msite,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/search',
      component: Search,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/order',
      component: Order,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/login',
      component: Login
    },
    {
      // 默认
      path: '/',
      redirect: '/msite'
    }
  ]
})

export default router
