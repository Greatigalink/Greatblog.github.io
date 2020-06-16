import Vue from 'vue'
import Router from 'vue-router'

import test from '@/components/function/test.vue'

Vue.use(Router)

const routes = [
  {
    path: '/test',
    name: 'test',
    components: test
  },
  {
    path: '/',
    redirect: '/test'
  }
]

var router = new Router({
  routes:routes
})

export default router
