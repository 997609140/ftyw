import Vue from 'vue'
import Router from 'vue-router'
import MyHome from '@/components/MyHome'
import MyMusic from '@/components/MyMusic'
<<<<<<< HEAD
import LoGin from '@/components/LoGin'
=======
import register from '@/components/register'

>>>>>>> 001d0624d1e44fd030889892a48839de91436112
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
<<<<<<< HEAD
    
    {
      path: '/LoGin',
      name: 'LoGin',
      component: LoGin
=======
    {
      path: '/register',
      name: 'register',
      component: register
>>>>>>> 001d0624d1e44fd030889892a48839de91436112
    }
  ]
})
	