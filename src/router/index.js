import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/page/login'
import Footprint from '@/page/footprint'
import Foot from '@/page/footprint/foot'
import Routes from '@/page/footprint/routes'
import Online from '@/page/stats/Online'
import Publish from '@/page/stats/Publish'
import Visit from '@/page/stats/Visit'
import Register from '@/page/stats/register'
import Share from '@/page/stats/Share'
import User from '@/page/system/user'
import Log from '@/page/system/Log'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
      // component: Foot
    },
    {
      name: 'footprint',
      path: '/footprint',
      component: Footprint,
      children: [
        {
          name: 'foot',
          path: '/footprint/foot',
          component: Foot
        },
        {
          name: 'routes',
          path: '/footprint/routes',
          component: Routes
        },
        {
          name: 'online',
          path: '/footprint/online',
          component: Online
        },
        {
          name: 'publish',
          path: '/footprint/publish',
          component: Publish
        },
        {
          name: 'visit',
          path: '/footprint/visit',
          component: Visit
        },
        {
          name: 'register',
          path: '/footprint/register',
          component: Register
        },
        {
          name: 'share',
          path: '/footprint/share',
          component: Share
        },
        {
          name: 'user',
          path: '/footprint/user',
          component: User
        },
        {
          name: 'log',
          path: '/footprint/log',
          component: Log
        }
      ]
    }
  ]
})
