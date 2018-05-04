import Vue from 'vue'
import Router from 'vue-router'
import GitHub from '@/components/GitHub'
import HolaMundo from '@/components/HolaMundo'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'GitHub',
      component: GitHub
    },
    {
      path: '/es',
      name: 'Hola',
      component: HolaMundo
    }
  ]
})
