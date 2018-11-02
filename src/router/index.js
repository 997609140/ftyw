import Vue from 'vue'
import Router from 'vue-router'
import MyHome from '@/components/MyHome'
import MyMusic from '@/components/MyMusic'
import register from '@/components/register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MyHome',
      component: MyHome
    },
    {
      path: '/MyMusic',
      name: 'MyMusic',
      component: MyMusic
    },
    {
      path: '/register',
      name: 'register',
      component: register
    }
  ]
})
	