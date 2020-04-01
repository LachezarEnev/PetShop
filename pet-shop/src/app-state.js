import Vue from 'vue';
import Vuex from 'vuex';
import  authState  from './components/auth/store/auth-state';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {    
    authState         
  }
});