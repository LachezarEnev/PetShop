import { innerGuard } from '../../utils/guards';
import Auth from './Auth.vue';

export default [
    {
      path: '/auth',
      component: Auth,
      redirect: { name: 'login' },
      children: [
        {
            path: "/login",
            component: () => import('./Login.vue')   
          },
          {
            path: "/register", 
            component: () => import('./Register.vue')   
          },
      ],
      beforeEnter: innerGuard
    }
  ];