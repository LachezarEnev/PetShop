import { innerGuard } from '../../utils/guards';
import Login from './Login.vue';
import Register from './Register.vue';
import Auth from './Auth.vue';

export default [
    {
      path: '/auth',
      component: Auth,
      redirect: { name: 'login' },
      children: [
        {
            path: "/login",
            component: Login    
          },
          {
            path: "/register", 
            component: Register   
          },
      ],
      beforeEnter: innerGuard
    }
  ];