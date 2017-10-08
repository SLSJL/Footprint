import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/page/login'
import Home from '@/page/home/home'
import FootPrint from '@/page/home/footPrint'
import Stats from '@/page/home/stats'
import User from '@/page/home/user'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      name: 'home',
      path: '/home',
      component: Home,
      children: [
        {
          name: 'footPrint',
          path: '/home/footprint',
          component: FootPrint
        },
        {
          name: 'stats',
          path: '/home/stats',
          component: Stats
        },
        {
          name: 'user',
          path: '/home/user',
          component: User
        }
      ]
    }
  ]
})
