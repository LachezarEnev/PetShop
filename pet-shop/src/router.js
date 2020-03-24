import Vue from "vue";
import Router from "vue-router";
import Home from './components/Home.vue';
import Login from './components/auth/Login.vue'
import Register from './components/auth/Register.vue'

Vue.use(Router);

export default new Router({
    linkExactActiveClass: "active",
    routes: [
      {
        path: "/",
        name: "Home",
        components: {         
          default: Home          
        }
      },
      {
        path: "/login",
        name: "Login",
        components: {          
          default: Login          
        }
      },
      {
        path: "/register",
        name: "Register",
        components: {         
          default: Register          
        }
      },      
    ],
    scrollBehavior: to => {
      if (to.hash) {
        return { selector: to.hash };
      } else {
        return { x: 0, y: 0 };
      }
    }
  });