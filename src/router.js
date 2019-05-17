import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Inicio from './views/Inicio.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/inicio',
      name: 'inicio',
      component: Inicio
    },
  ]
})
