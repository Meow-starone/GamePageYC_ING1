import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TextPage from '@/components/TextPage'
import Tittle1 from '@/components/Tittle1'
import Tittle2 from '@/components/Tittle2'
import Tittle3 from '@/components/Tittle3'
import Tittle4 from '@/components/Tittle4'
import Tittle5 from '@/components/Tittle5'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/textpage',
      name: 'textpage',
      component: TextPage
    },
    {
      path: '/Tittle1',
      name: 'Tittle1',
      component: Tittle1
    },
    {
      path: '/Tittle2',
      name: 'Tittle2',
      component: Tittle2
    },
    {
      path: '/Tittle3',
      name: 'Tittle3',
      component: Tittle3
    },
    {
      path: '/Tittle4',
      name: 'Tittle4',
      component: Tittle4
    },
    {
      path: '/Tittle5',
      name: 'Tittle5',
      component: Tittle5
    },
  ]
})
