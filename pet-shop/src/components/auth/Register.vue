<template>
<div class="container">
<div class="row justify-content-center">
<div class="col-md-4">
  <h1 class="text-italic text-center mt-5">Register</h1>
  <form @submit.prevent="registerHandler">
    <div class="form-group">
      <label for="username">Username</label>
      <input name="username" type="text" id="username" class="form-control" placeholder="Username..." v-model="username" @blur="$v.username.$touch">
    <template v-if="$v.username.$error">
        <div class="alert alert-danger" v-if="!$v.username.required">Username is required!</div>        
      </template>
    </div>      
    <div class="form-group">
      <label for="password">Password</label>
      <input name="password" type="password" id="password" class="form-control" placeholder="Password..." v-model="password" @blur="$v.password.$touch">
     <template v-if="$v.password.$error">
        <div class="alert alert-danger" v-if="!$v.password.required">Password is required!</div>        
      </template>
    </div>   
    <div class="form-group">
      <label for="rePassword">Repeat Password</label>
      <input name="rePassword" type="password" id="rePassword" class="form-control" placeholder="Repeat Password..." v-model="rePassword" @blur="$v.rePassword.$touch">
    <template v-if="$v.rePassword.$error">
        <div class="alert alert-danger" v-if="!$v.rePassword.sameAs">Passwords don't match!</div>
      </template>
    </div>     
    <div class="text-center"> 
    <button :disabled="!username || !password || !rePassword" class="btn btn-warning">Register</button>
    </div>
  </form>
  <p class="text-center mt-3">Already Registered? <router-link to="/login"><span style="color:peru">Login</span></router-link></p>
</div>
</div>
</div>
</template>

<script>
import { validationMixin } from 'vuelidate';
import { required, sameAs } from 'vuelidate/lib/validators';

export default {
    mixins: [validationMixin],
data()  {
    return {
      username: '',
      password: '',
      rePassword: '',
    };
},
validations: {
    username: {
      required     
    },
    password: {
      required      
    },
     rePassword: {
      sameAs: sameAs('password')
    },
},
methods: {
    registerHandler() {

    }
}
}
</script>

<style scoped>
</style>