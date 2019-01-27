import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/home/Home'
import ImageLayer from '@/pages/home/components/ImageLayer'
import Elevationlayer from '@/pages/home/components/Elevationlayer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
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

        }
      ]
    }
  ]
})
