import Vue from 'vue'
import VueRouter from 'vue-router'
import TV from '../views/TV.vue'
import Book from '../views/Book.vue'
import Chat from '../views/Chat.vue'
import TvDetails from '../views/TvDetails.vue'







Vue.use(VueRouter)

const routes = [
  {path:'/',name:'TV',component:TV},
  {path:'/music',name:'Music',component:()=>import('../views/Music.vue')},
  {path:'/book',name:'Book',component:Book},
  {path:'/chat',name:'Chat',component:Chat},
  {path:'/tvdetails/:id',name:'TvDetails',component:TvDetails},



 
  
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
