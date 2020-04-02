<template> 
<div>
<div v-if="isAuth">   
    <nav class="navbar navbar-expand-lg bg-transparent">
        <div class="main-menu center-block">
            <ul class="nav navbar-nav">                
                <li><a class="nav-link" style="color: peru;" @click="category('dog')"><i class="fas fa-dog"></i> Dog</a></li>
                <li><a class="nav-link" style="color: peru;" @click="category('cat')"><i class="fas fa-cat"></i> Cat</a></li>
                <li><a class="nav-link" style="color: peru;" @click="category('bird')"><i class="fas fa-crow"></i> Bird</a></li>
                <li><a class="nav-link" style="color: peru;" @click="category('fish')"><i class="fas fa-fish"></i> Fish</a></li>                
                <li><a class="nav-link" style="color: peru;" @click="category('other')"><i class="fas fa-paw"></i> Other</a></li>             
            </ul>
        </div>
    </nav>    
<div v-if="allPets" >
<div class="container">    
    <div class="row">    
        <div class="col-6 col-sm-6 col-md-4 col-lg-3 mb-3" v-for="pet in allPets" :key="pet._id">
            <div class="card h-100 mt-2">
                <div class="card-img-top image-container center-block zoom">
                    <router-link tag="img" :to="{ name: 'details', params: { id: pet._id } }" :src="pet.imageURL"></router-link>
                </div>
                <div class="card-body text-center h-25 pb-0 pt-0 pl-0 pr-0">                    
                    <h5 class="card-title font-weight-bold" style="color:grey"><i>{{pet.title}}</i></h5>                    
                </div>
                <div class="card-body text-center h-25 pb-0 pt-0 pl-0 pr-0 mt-3">                    
                    <h6 class="card-title font-weight-bold">Tel: {{pet.phone}}</h6>                    
                </div>
                <div class="mb-1">
                    <ul class="list-group list-group-flush mb-0">
                        <li class="list-group-item text-center text-danger h5 ">{{pet.price}} BGN</li>
                    </ul>
                </div>
                <div class="card-footer d-flex justify-content-around text-center bg-white"> 
                    <div class="d-flex justify-content-between">           
                    <div class="mr-2">
                        <button><router-link :to="{ name: 'details', params: { id: pet._id } }" style="color: peru">Details</router-link></button>  
                    </div>                     
                    <div v-if="isPublisher(pet.username)">
                        <button disabled class="text-danger pl-3 pr-3" @click="like(pet._id)"> {{pet.likes}} <i class="fas fa-heart"></i></button> 
                    </div> 
                    <div v-if="!isPublisher(pet.username)">
                        <button class="text-danger pl-3 pr-3" @click="like(pet._id)" > {{pet.likes}} <i class="fas fa-heart"></i></button> 
                    </div>                    
               </div>                                
          </div>
                <div class="text-center">                
                    <span class="text-info">{{pet.option}}</span>              
                </div>
            </div>
        </div>
    </div>    
  </div> 
  </div> 
 </div>
<div v-if="!isAuth" class="d-md-flex flex-md-equal">
        <div style="padding-left:7%; padding-top:3%;" class="col-md-6 mt-3">
          <h1 class="featurette-heading">Here you will find the pet you've <span style="color:peru;">always dreamed about!</span></h1>
          <p class="lead mt-4"><i class="fas fa-paw"></i> Join our family.</p>
          <p style="padding-left:5%" class="lead"><i class="fas fa-paw" style="color: peru;"></i> If you already have an account click on <router-link to="/login"><span style="color:peru"><b>Login</b></span></router-link></p>
          <p style="padding-left:10%" class="lead"><i class="fas fa-paw"></i> If you don't have an account already then click on <router-link to="/register"><span style="color:peru"><b>Register</b></span></router-link></p>
          <p style="padding-left:15%" class="lead" ><i class="fas fa-paw" style="color: peru;"></i> Don't wait! Go find your petMate!</p>
        </div>
        <div class="col-md-6 mt-5">
          <img class="home-picture" src="../assets/pets.png" />
        </div>
      </div>  
</div>  
</template>

<script>
import { mapGetters } from 'vuex';
import  petsMixin  from '../mixins/pet-mixin.js';

export default {     
data()  {
    return {
      allPets: {},                                                 
    };
},
 computed: {
    ...mapGetters(['isAuth'])      
  },
  created() { 
    if(localStorage.getItem('authtoken')) {   
      this.getAllPets();  
    }        
  },
  watch: {
      allPets: function() {         
        }        
    }, 
  methods: {
    isPublisher(username) {
      if(username === localStorage.getItem('username')){
        return true;
      }
    },    
     like(id){   
        this.likePet(id).then(() => {
          this.getAllPets();    
        })           
    }, 
    category(category){
      this.$router.push({name: 'category', params: { category: category }})  
    }                       
},
mixins: [petsMixin] 
}
</script>

<style scoped>
.home-picture{
    top:0;
    left:0;
    transform: none;
    width: 100%;
    position: static;
    margin: 0 auto;
  } 

  button{
    border-radius: 6px;
    border: 1px solid #b2b8ad;   
    outline: none; 
  } 

  button:active {    
    border: none;
  }

  li:hover { 
    color:peru; 
    border-bottom: 1.2px solid peru;
    cursor: pointer;
}
img:hover {    
    cursor: pointer;
}

</style>