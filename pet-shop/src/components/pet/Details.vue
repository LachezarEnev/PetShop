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
    deletePet(){

    }
},
}
</script>

<style scoped>

.myButton-red {
    -moz-box-shadow: inset 0px 1px 0px 0px #f7c5c0;
    -webkit-box-shadow: inset 0px 1px 0px 0px #f7c5c0;
    box-shadow: inset 0px 1px 0px 0px #f7c5c0;
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0.05, #fc8d83), color-stop(1, #e4685d));
    background: -moz-linear-gradient(top, #fc8d83 5%, #e4685d 100%);
    background: -webkit-linear-gradient(top, #fc8d83 5%, #e4685d 100%);
    background: -o-linear-gradient(top, #fc8d83 5%, #e4685d 100%);
    background: linear-gradient(to bottom, #fc8d83 5%, #e4685d 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#fc8d83', endColorstr='#e4685d',GradientType=0);
    background-color: #fc8d83;
    -moz-border-radius: 6px;
    -webkit-border-radius: 6px;
    border-radius: 6px;
    border: 1px solid #d83526;
    display: inline-block;
    cursor: pointer;
    color: #ffffff;
    font-family: Arial;
    font-size: 15px;
    font-weight: bold;
    padding: 6px 24px;
    text-decoration: none;
    text-shadow: 0px 1px 0px #b23e35;
}

.myButton-orange {
    -moz-box-shadow: inset 0px 1px 0px 0px #fce2c1;
    -webkit-box-shadow: inset 0px 1px 0px 0px #fce2c1;
    box-shadow: inset 0px 1px 0px 0px #fce2c1;
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0.05, #ffc477), color-stop(1, #fb9e25));
    background: -moz-linear-gradient(top, #ffc477 5%, #fb9e25 100%);
    background: -webkit-linear-gradient(top, #ffc477 5%, #fb9e25 100%);
    background: -o-linear-gradient(top, #ffc477 5%, #fb9e25 100%);
    background: linear-gradient(to bottom, #ffc477 5%, #fb9e25 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffc477', endColorstr='#fb9e25',GradientType=0);
    background-color: #ffc477;
    -moz-border-radius: 6px;
    -webkit-border-radius: 6px;
    border-radius: 6px;
    border: 1px solid #eeb44f;
    display: inline-block;
    cursor: pointer;
    color: #ffffff;
    font-family: Arial;
    font-size: 15px;
    font-weight: bold;
    padding: 6px 24px;
    text-decoration: none;
    text-shadow: 0px 1px 0px #cc9f52;
}
</style>