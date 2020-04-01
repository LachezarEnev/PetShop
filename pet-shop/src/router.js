import Vue from 'vue';
import VueRouter from 'vue-router';

// import { innerGuard, authGuard } from './utils/guards.js'
import Home from './components/Home.vue';
import Login from './components/auth/Login.vue';
import Register from './components/auth/Register.vue';
import Create from './components/pet/Create.vue';
import Buy from './components/pet/Buy.vue';
import Adopt from './components/pet/Adopt.vue';
import Details from './components/pet/Details.vue';
import Edit from './components/pet/Edit.vue';
import My from './components/pet/My.vue';
import Search from './components/pet/Search.vue';
import NoResult from './components/pet/NoResult.vue';
import Category from './components/pet/Category.vue';

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
  },
  {
    path: "/buy", 
    component: Buy
  },
  {
    path: "/adopt", 
    component: Adopt
  },
  {
    path: "/details/:id", 
    name: 'details', 
    component: Details
  },
  {
    path: "/edit/:id",
    name: 'edit', 
    component: Edit
  },
  {
    path: "/my", 
    component: My
  },
  {
    path: "/search",
    name: 'search', 
    component: Search
  },
  {
    path: "/noResult", 
    component: NoResult
  },
  {
    path: "/category",
    name: 'category', 
    component: Category
  },
]

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes
});


 