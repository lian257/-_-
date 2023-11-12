import Vue from 'vue'
import VueRouter from 'vue-router'
import MyComponent from 'src/responsive-book-website-main/BookView.html'

Vue.use(VueRouter)

const routes = [
  {
    path: '/element',
    name: 'element',
    component: () => import('../views/element.vue')
  },
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },



]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
