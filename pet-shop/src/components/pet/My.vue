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
                        <!-- <div>
                            <button class="nav-link text-danger button" @click="deletePet(pet._id, pet.title)">Delete</button> 
                        </div> -->
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
// import { toastSuccess } from '../../services/toasted';

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
//   methods: {
//        deletePet(id, title){
//         if (confirm("Are you sure you want to delete "+title)) {
//       http.delete(`pets/${id}`)
//       .then (() => {
//             toastSuccess('Pet deleted successfully!')
//             this.$router.push('/my')
//         });
//         }
//     }
//   }
}
</script>

<style scoped>
.myButton-olive {
    -moz-box-shadow: inset 0px 0px 14px -3px #f2fadc;
    -webkit-box-shadow: inset 0px 0px 14px -3px #f2fadc;
    box-shadow: inset 0px 0px 14px -3px #f2fadc;
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0.05, #dbe6c4), color-stop(1, #9ba892));
    background: -moz-linear-gradient(top, #dbe6c4 5%, #9ba892 100%);
    background: -webkit-linear-gradient(top, #dbe6c4 5%, #9ba892 100%);
    background: -o-linear-gradient(top, #dbe6c4 5%, #9ba892 100%);
    background: linear-gradient(to bottom, #dbe6c4 5%, #9ba892 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#dbe6c4', endColorstr='#9ba892',GradientType=0);
    background-color: #dbe6c4;
    -moz-border-radius: 6px;
    -webkit-border-radius: 6px;
    border-radius: 6px;
    border: 1px solid #b2b8ad;
    display: inline-block;
    cursor: pointer;
    color: #757d6f;
    font-family: Arial;
    font-size: 15px;
    font-weight: bold;
    padding: 6px 24px;
    text-decoration: none;
    text-shadow: 0px 1px 0px #ced9bf;
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