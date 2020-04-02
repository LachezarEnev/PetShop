<template>
<div>
<div class="h2 text-center font-weight-bold pt-3 pb-3" style="color: peru;">My Pets</div>
<div v-if="myPets">    
    <div class="container"> 
        <table class="table">
            <thead>
                <tr class="row">
                    <th scope="col" class="col-1 d-flex justify-content-center"></th>
                    <th scope="col" class="col-4 d-flex justify-content-center">Title</th>
                    <th scope="col" class="col-2 d-flex justify-content-center">Price</th>
                    <th scope="col" class="col-1 d-flex justify-content-center">For</th>
                    <th scope="col" class="col-1 d-flex justify-content-center">Likes</th>                    
                    <th scope="col" class="col-3 d-flex justify-content-center">Actions</th>
                </tr>
            </thead>
            <tbody>
                <div v-for="pet in myPets" :key="pet._id">
                <tr class="row">
                    <td class="col-1 d-flex justify-content-center">                       
                        <router-link tag="img" :to="{ name: 'details', params: { id: pet._id } }" :src="pet.imageURL"  width="50" height="50"> </router-link>                     
                    </td>
                    <td class="col-4">
                        {{pet.title}}
                    </td>
                    <td class="col-2 text-center">
                        {{pet.price}} BGN
                    </td>
                    <td class="col-1 text-center">
                        {{pet.option}}
                    </td>
                    <td class="col-1">
                        <i class="fas fa-heart pl-3" style="color: darkred;"></i> {{pet.likes}} 
                    </td>
                    <td class="col-3 d-flex justify-content-around">
                        <div>
                            <button class="myButton-olive"><router-link :to="{ name: 'details', params: { id: pet._id } }" style="color: green">Details</router-link></button> 
                        </div> 
                        <div>
                            <button class="myButton-orange"><router-link :to="{ name: 'edit', params: { id: pet._id } }" style="color: white"><i class="fas fa-edit"></i>Edit</router-link></button>
                        </div>                     
                        <div>
                            <button class="myButton-red" @click="deletePet(pet._id, pet.title)">Delete</button> 
                        </div>
                    </td>
                </tr>
            </div>
        </tbody>
    </table>
</div>
</div>
</div>
</template>

<script>
import { http } from '../../services/httpClient';
import { toastSuccess } from '../../utils/toasted';

export default {
    data()  {
    return {
      myPets: {},
      username: localStorage.getItem('username'),                      
    };
}, 
  created() {    
      http.get(`pets/?query={"username": "${this.username}"}&sort={"likes": -1}`).then((data) => {
      this.myPets = data.data      
      })     
  },
  watch: {
      myPets: function() {  
   }      
  },
  methods: {
       deletePet(id, title){
        if (confirm("Are you sure you want to delete "+title)) {
      http.delete(`pets/${id}`)
      .then (() => {
            toastSuccess('Pet deleted successfully!')            
            http.get(`pets/?query={"username": "${this.username}"}&sort={"likes": -1}`).then((data) => {
            this.myPets = data.data      
            }) 
        });
        }
    }
  }
}
</script>

<style scoped>
img:hover {    
    cursor: pointer;
}
</style>