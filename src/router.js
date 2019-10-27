import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'

axios.defaults.baseURL = process.env.BASE_URL;
axios.defaults.serverUrl = 'http://mednefits.local';


import Auth from './views/Auth.vue'
import Dashboard from './views/Dashboard.vue'
import Home from './views/Home.vue'


Vue.use(Router)
Vue.use(axios)


export default new Router({
  // mode: 'history',
  // base: process.env.BASE_URL,
  linkActiveClass: 'router-active',
  routes: [
    { path: '*', redirect: '/auth'},
    { path: '/auth', name: 'Auth', component: Auth },
    {
      path: '/dashboard',
      name: 'Dashboard',
      redirect: '/dashboard/home',
      component: Dashboard,
      // meta: { auth: true },
      children: [
        { name: 'Home', path: '/dashboard/home', component: Home },
      ]
    },
    
  ]
})
