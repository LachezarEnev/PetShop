<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <router-link to="/" class="navbar-brand">Pet<span style="color:orange">Shop</span></router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>  
    
    <div class="collapse navbar-collapse" id="navbarColor01">      
      <ul class="navbar-nav mr-auto navbar-left"> 
        <div v-if="isAuth">        
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fas fa-paw"></i>
              Pets
            </a>
            <div class="dropdown-menu bg-dark dropdown:hover>.dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="/pet/buy"><span style="color:orange">Buy</span></a>
              <a class="dropdown-item" href="/pet/adopt"><span style="color:orange">Adopt</span></a>              
              <div class="dropdown-divider"></div>
              <a class="dropdown-item"><router-link to="/create"><span style="color:orange">Create</span></router-link></a>            
          </div>
          </li> 
        </div> 
        <!-- <div *ngIf='isLoggedIn' class="ml-3">
          <form #searchForm="ngForm" (ngSubmit)="search()">
              <div class="row">
                  <div class="col-7">
                  <input ngModel class="form-control" type="text" name="search" placeholder="Search a pet..." aria-label="Search" required>
              </div>
              <div class="col-5">
                  <button [disabled]="searchForm.invalid" class="btn btn-default" type="submit"><span style="color: orange;"><i class="fas fa-search"></i> Search</span></button>
              </div>
              </div>          
          </form>
      </div>  -->
      </ul>            
      <ul class="navbar-nav navbar-right">          
      <li v-if="!isAuth" class="nav-item">
        <router-link to="/login" class="nav-link"><i class="fas fa-user"></i> Profile</router-link>
      </li>
      <li class="nav-item dropdown" v-if="isAuth">
        <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fas fa-user"></i>
          Hello, {{username | capitalize }}!
        </a>
        <div class="dropdown-menu bg-dark dropdown:hover>.dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="/pet/my-pets" style="color: orange;"><i class="fas fa-paw"></i> My Pets</a>                             
      </div>
      </li> 
      <li class="nav-item" v-if="isAuth">
        <a class="nav-link" @click="logout"><i class="fas fa-sign-out-alt"></i> Exit</a>
      </li> 
    </ul>   
    </div>    
  </nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { logoutSuccess } from '../auth/store/auth-state.js';

export default {
  data()  {
    return {      
      username: localStorage.getItem('username'),       
    };
},
  computed: {
    ...mapGetters(['isAuth'])      
  }, 
  methods: {       
    ...mapActions([logoutSuccess]),
    logout() {      
      this[logoutSuccess]();
      this.$router.push('/login');
    },
  },
  filters: {
  capitalize: function (value) {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
  }
}
}

</script>

<style scoped>
.dropdown:hover>.dropdown-menu {
    display: block;
  }
</style>