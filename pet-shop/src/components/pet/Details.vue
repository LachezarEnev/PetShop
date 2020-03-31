<template>
<div class="container">       
    <div class="row">
        <div class="col-md-7 mt-2">
            <p class="h4 text-center" style="color:chocolate">{{pet.title}}</p> 
            <div class="zoom">
                <img :src="pet.imageURL">
                <p class="h5 text-muted mt-2">Category: {{pet.category}}</p>                              
            </div>
        </div>
        <div class="col-md-5"> 
            <div class="card-body bg-transparent shadow  mt-5">       
                <p class="font-weight-bold text-danger h6">Price: {{pet.price}} BGN</p>
                <p class="font-weight-bold h6"><span class="text-muted">Tel:</span> {{pet.phone}}</p>
                <p class="font-weight-bold h6"><span class="text-muted">Seller:</span> {{pet.username}}</p>
                <p class="font-weight-bold h6"><span class="text-muted">Address:</span> {{pet.address}}</p>
                <p class="font-weight-bold h6"><span class="text-muted">For:</span> {{pet.option}}</p>
            </div>
            <div class="card-body bg-transparent shadow mt-3">
                <dl>  
                    <p class="font-weight-bold h6 text-muted">Description:</p>                   
                    <dd class="mt-1">{{pet.description}}</dd>
                </dl>
            </div>  
            <div v-if="isPublisher(pet.username)">
                <div class="d-flex justify-content-around text-center mt-3"> 
                    <div class="d-flex justify-content-between">           
                    <div class="mr-3">
                        <button class="myButton-orange"><router-link :to="{ name: 'edit', params: { id: pet._id } }" style="color: #ffffff"><i class="fas fa-edit"></i> Edit</router-link></button>  
                    </div>                     
                    <div>
                        <button class="nav-link myButton-red" @click="deletePet(pet._id, pet.title)"><i class="fas fa-trash"></i> Delete</button>   
                    </div>                                        
                </div>  
            </div>         
        </div>
    </div>
</div>
</div>

</template>

<script>
import { http } from '../../services/httpClient';
import { toastSuccess } from '../../services/toasted';

export default {
    data()  {
    return {
      pet: {}, 
      petId: this.$route.params.id                        
    };
},
 created() {    
      http.get(`pets/${this.petId}`).then((data) => {
      this.pet = data.data       
      })           
  },
methods: {
    isPublisher(username) {
      if(username === localStorage.getItem('username')){
        return true;
      }
    },   
    deletePet(id, title){
        if (confirm("Are you sure you want to delete "+title)) {
      http.delete(`pets/${this.petId}`)
      .then (() => {
            toastSuccess('Pet deleted successfully!')
            this.$router.push('/my')
        });
        }
    }
},
}
</script>

<style scoped>

</style>