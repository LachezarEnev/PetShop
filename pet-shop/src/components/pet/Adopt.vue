<template>
<div>
    <div v-if="allPets.length === 0 && isLoaded">
        <h1 class="text-center" style="color: peru;">There are no pets for adoption yet!</h1>
    </div>  
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
                        <button class="text-danger pl-3 pr-3" @click="like(pet._id)"> {{pet.likes}} <i class="fas fa-heart"></i></button> 
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
</template>

<script>
import  petsMixin  from '../../mixins/pet-mixin.js';

export default {
data()  {
    return {
      allPets: {},
      isLoaded: false,           
    };
}, 
  created() { 
      this.getAdoptPets().then(() => {
        this.isLoaded = true   
      })   
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
          this.getAdoptPets();
          })   
      }  
  },
  mixins: [petsMixin] 
}
</script>

<style scoped>
button{
    border-radius: 6px;
    border: 1px solid #b2b8ad;   
    outline: none; 
  } 

  button:active {    
    border: none;
  }

  img:hover {    
    cursor: pointer;
}
</style>