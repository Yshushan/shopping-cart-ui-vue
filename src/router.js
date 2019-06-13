import Vue from 'vue'
import Router from 'vue-router'

import ExpansionPanel from './demo/ExpansionPanel'
import List from './demo/List'
import Card from './demo/Card'
import Alert from './demo/Alert'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/demo/expansion-panel',
      name: 'expansion-panel',
      component: ExpansionPanel
    },
    {
      path: '/demo/list',
      name: 'list',
      component: List
    },
    {
      path: '/demo/card',
      name: 'card',
      component: Card
    },
    {
      path: '/demo/alert',
      name: 'alert',
      component: Alert
    }
  ]
})
