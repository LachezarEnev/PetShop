import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './components/Home.vue';
import NotFound from './components/shared/NotFound.vue'
import authRoutes from './components/auth/auth-routes';
import petRouts from './components/pet/pet-routes';
import { globalAuthGuard } from './utils/guards';

const appRoutes = [
  {
    path: "/", 
    redirect: "/home"
  }, 
  {
    path: "/home", 
    component: Home
  }, 
  {
    path: "*", 
    component: NotFound
  },   
]

const routes = [...appRoutes, ...authRoutes, ...petRouts];

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes,  
});

router.beforeEach(globalAuthGuard);

export default router;


 