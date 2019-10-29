import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'

axios.defaults.baseURL = process.env.BASE_URL;
axios.defaults.serverUrl = 'http://mednefits.local';


import Auth from './views/Auth.vue'
import Dashboard from './views/Dashboard.vue'
import Home from './views/Home.vue'
import Post from './views/Post.vue'
import PostCreate from './views/PostCreate.vue'


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
      redirect: '/post',
      component: Dashboard,
      // meta: { auth: true },
      children: [
        { name: 'Home', path: '/home', component: Home },
        { name: 'Post', path: '/post', component: Post },
        { name: 'PostCreate', path: '/postCreate', component: PostCreate },
      ]
    },
    
  ]
})
