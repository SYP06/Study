import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login'
import Index from '../views/index'
import Regist from '../views/regist'
import BlogDetail from '../views/blog-detail'
import SendBlog from '../views/sendBlog'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/regist',
    name: 'Regist',
    component: Regist
  },
  {
    path: '/blog/detail/:blogId',
    name: 'BlogDetail',
    component: BlogDetail
  },
  {
    path: '/sendBlog',
    name: 'SendBlog',
    component: SendBlog
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
