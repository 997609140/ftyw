import Vue from 'vue'
import Router from 'vue-router'
import MyHome from '@/components/MyHome'
import MyMusic from '@/components/MyMusic'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MyHome',
      component: MyHome
    },
    
    {
      path: '/mymusic',
      name: 'MyMusic',
      component: MyMusic
    }
    
  ]
})
