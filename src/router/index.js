import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/home/Home'
import ImageLayer from '@/pages/home/components/ImageLayer'
import Elevationlayer from '@/pages/home/components/Elevationlayer'
import Myautotest from '@/pages/home/components/Myautotest'
import WmsLayer from '@/pages/home/components/WmsLayer'
import Login from '@/pages/login/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/imageLayer',
          name: 'imageLayer',
          component: ImageLayer
        }, {
          path: '/elevationlayer',
          name: 'elevationlayer',
          component: Elevationlayer
        }, {
              path: '/myautotest',
              name: 'myautotest',
              component: Myautotest
          }, {
              path: '/wmsLayer',
              name: 'wmsLayer',
              component: WmsLayer
          }
      ]
    }, {
      path: '/login',
      name: 'login',
      component:Login
    }
  ]
})
