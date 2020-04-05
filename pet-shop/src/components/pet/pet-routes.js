import { authGuard } from '../../utils/guards';
import Pet from './Pet.vue';

export default [
    {
      path: '/pet',
      component: Pet,
      redirect: { name: 'create' },
      children: [
        {
            path: "/create", 
            component: () => import('./Create.vue')  
          },
          {
            path: "/buy", 
            component: () => import('./Buy.vue') 
          },
          {
            path: "/adopt", 
            component: () => import('./Adopt.vue') 
          },
          {
            path: "/details/:id", 
            name: 'details', 
            component: () => import('./Details.vue') 
          },
          {
            path: "/edit/:id",
            name: 'edit', 
            component: () => import('./Edit.vue') 
          },
          {
            path: "/my", 
            component: () => import('./My.vue') 
          },
          {
            path: "/search/:search",
            name: 'search',            
            component: () => import('./Search.vue') 
          },
          {
            path: "/noResult", 
            component: () => import('./NoResult.vue') 
          },
          {
            path: "/category",
            name: 'category', 
            component: () => import('./Category.vue') 
          },           
      ],
      beforeEnter: authGuard     
    }
  ];