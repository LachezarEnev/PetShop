import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './components/Home.vue';
import Login from './components/auth/Login.vue'
import Register from './components/auth/Register.vue'
import Create from './components/pet/Create.vue'

const routes = [
  {
    path: "/", 
    component: Home
  },
  {
    path: "/login", 
    component: Login
  },
  {
    path: "/register", 
    component: Register
  },
  {
    path: "/create", 
    component: Create
  }
]

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes
});


 