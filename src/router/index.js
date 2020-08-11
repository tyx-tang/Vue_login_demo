import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../views/Login.vue'
import UserInfo from '../views/UserInfo.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/user_info',
    name: 'UserInfo',
    component: UserInfo,
    meta: {
      title: '商家页面'
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
