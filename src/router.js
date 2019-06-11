import Vue from 'vue'
import Router from 'vue-router'
import ExpansionPanel from './demo/ExpansionPanel'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/demo/expansion-panel',
      name: 'expansion-panel',
      component: ExpansionPanel
    }
  ]
})
