import Vue from 'vue'
import VueRouter from 'vue-router' 
import Tasks from '../views/Tasks.vue' 
import Dictionary from '../views/Dictionary.vue'
   
Vue.use(VueRouter)

const routes = [
  
  {
    path: '/',
    title: 'tasks',
    component: Tasks,
  },

 
  {
    path: '/dictionary',
    title: 'dictionary',
    component: Dictionary,
    
  }
 

]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes,
  
})
 
export default router
