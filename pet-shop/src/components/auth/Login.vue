<template>
<div class="container">
<div class="row justify-content-center">
<div class="col-md-4">
  <h1 class="text-italic text-center mt-5">Login</h1>
  <form @submit.prevent="loginHandler" ref="loginForm">    
    <div class="form-group">
      <label for="username">Username</label>
      <input name="username" type="text" id="username" class="form-control" placeholder="Username..." v-model="username" @blur="$v.username.$touch" />
     <template v-if="$v.username.$error">
        <div class="alert alert-danger" v-if="!$v.username.required">Username is required!</div>        
      </template>
    </div>   
    <div class="form-group">
      <label for="password">Password</label>
      <input name="password" type="password" id="password" class="form-control" placeholder="Password..." v-model="password" @blur="$v.password.$touch" />
    <template v-if="$v.password.$error">
        <div class="alert alert-danger" v-if="!$v.password.required">Password is required!</div>        
      </template>
    </div>  
    <div class="text-center"> 
    <button :disabled="$v.$invalid" class="btn btn-warning">Login</button>
    </div>
  </form>
  <p class="text-center mt-3">Don't have account yet? <router-link to="/register"><span style="color:peru">Register</span></router-link></p>
  </div>
</div>
</div>
</template>

<script>
import { validationMixin } from 'vuelidate';
import { required } from 'vuelidate/lib/validators';
import { loginSuccess } from '../auth/store/auth-state.js';
import { mapActions } from 'vuex';

export default {
mixins: [validationMixin],
data()  {
    return {
      loading: false,
      username: '',
      password: '',
    };
},
validations: {
    username: {
      required     
    },
    password: {
      required      
    }
},
methods: {
  ...mapActions([loginSuccess]),
    async loginHandler() {
      try {
        this.loading = true;
        await this[loginSuccess]({
          username: this.username,
          password: this.password
        });
        this.loading = false;
        this.$router.push('/');
      } catch (err) {
        this.loading = false;
        this.$refs.loginForm.reset();
      }
    }
  }
}
</script>

<style scoped>
</style>