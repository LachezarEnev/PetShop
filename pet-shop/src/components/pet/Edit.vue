<template>
<div class="container">
    <div class="row justify-content-center">
    <div class="col-md-6">
<form @submit.prevent="editHandler">   
    <div class="text-center mb-4">
      <h1 class="h3 font-weight-normal mt-3">Edit</h1>     
    </div>
    <div class="form-label-group">
        <label for="Title" class="control-label"></label>
        <input type="text" name="title" id="title" class="form-control" placeholder="Title..." v-model="title" @blur="$v.title.$touch">      
        <template v-if="$v.title.$error">
        <div class="alert alert-danger" v-if="!$v.title.required">Title is required!</div> 
         </template>
    </div>    
    <div class="form-label-group">
        <label for="Address" class="control-label"></label>
        <input type="text"  name="address" id="address" class="form-control" placeholder="Address..." v-model="address" @blur="$v.address.$touch">      
        <template v-if="$v.address.$error">
        <div class="alert alert-danger" v-if="!$v.address.required">Address is required!</div> 
         </template>
    </div>    
    <div class="form-label-group">
        <label for="Description" class="control-label"></label>
      <textarea type="text"  name="description" id="description" class="form-control" placeholder="Description..." v-model="description"></textarea>     
    </div>
    <div class="d-flex justify-content-between">
        <div class="form-group w-45">            
            <label for="Price" class="control-label"></label>            
            <input type="decimal" for="Price" name="price" id="price" class="form-control" placeholder="Price..." v-model="price" @blur="$v.price.$touch">            
            <div class="alert alert-danger" v-if="!$v.price.minValue">Price can't be less than 0!</div> 
        </div>        
        <div class="form-group w-45">
            <label for="Phone" class="control-label"></label>           
            <input type="text"  name="phone" id="phone" class="form-control" placeholder="Phone..." v-model="phone" @blur="$v.phone.$touch">          
            <template v-if="$v.phone.$error">
            <div class="alert alert-danger" v-if="!$v.phone.required">Phone is required!</div> 
            </template> 
        </div>       
    </div>
    <div class="d-flex justify-content-between mt-2">
        <div class="form-group w-45">
        <label for="Type" class="control-label"></label>
        <select id="category" name="category" class="p-1" v-model="category" @blur="$v.category.$touch">
            <option value="">-Please choose category-</option>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>            
            <option value="bird">Bird</option>
            <option value="fish">Fish</option>            
            <option value="other">Other</option>
         </select>   
            <template v-if="$v.category.$error">
            <div class="alert alert-danger" v-if="!$v.category.required">Category is required!</div> 
            </template> 
        </div>        
        <div class="form-group w-45">
          <label for="Type" class="control-label"></label>
          <select id="option" name="option" class="p-1" v-model="option" @blur="$v.option.$touch">
              <option value="">--Please choose option--</option>
              <option value="sale">For sale</option>
              <option value="adoption">For adoption</option>              
           </select> 
            <template v-if="$v.option.$error">
            <div class="alert alert-danger" v-if="!$v.option.required">Option is required!</div> 
            </template> 
          </div>          
    </div>   
    <div class="form-label-group">
        <label for="Image" class="control-label"></label>
        <input pattern="^https?:\/\/(.*)" type="text"  name="imageURL" id="imageURL" class="form-control" placeholder="Image (http://...)" v-model="imageURL" @blur="$v.imageURL.$touch"/>     
         <template v-if="$v.imageURL.$error">
             <div class="alert alert-danger" v-if="!$v.imageURL.required">Image URL is required!</div> 
             <div class="alert alert-danger" v-else-if="!$v.imageURL.urlIsValid">The URL address is invalid!</div>          
            </template> 
    </div>    
    <div class="text-center mt-3"> 
    <button :disabled="$v.$invalid" class="btn btn-lg btn-dark btn-block">Save</button>
    </div>
  </form>
</div>
</div>
</div>
</template>

<script>
import { validationMixin } from 'vuelidate';
import { required, minValue } from 'vuelidate/lib/validators';
import { toastSuccess } from '../../utils/toasted';
import  petsMixin  from '../../mixins/pet-mixin.js';

export default {   
    mixins: [validationMixin, petsMixin],
data()  {
    return {
      pet: {},
      petId: this.$route.params.id,     
      title: '',
      address: '',
      description: '',
      price: '',
      phone: '',
      category: '',
      option: '',
      imageURL: '', 
      likes: '',    
    };
},
validations: {
    title: {
      required     
    },
    address: {
      required         
    },
     price: {
      minValue: minValue(0)
    },
    phone: {
        required
    },
    category: {
        required
    },
    option: {
        required
    },
    imageURL: {
        required,
        urlIsValid(imageURL){
            const regex = /^https?:\/\/(.*)/;
            return regex.test(imageURL);
        }        
    }
},
 created() {    
      this.getPetById(this.petId).then(() => {      
      this.title = this.pet.title,
      this.address = this.pet.address,
      this.description = this.pet.description,
      this.price = this.pet.price,
      this.phone = this.pet.phone,
      this.category = this.pet.category,
      this.option = this.pet.option,
      this.imageURL = this.pet.imageURL
      this.likes = this.pet.likes            
      })                  
  },
methods: {
    editHandler() {
        let username = localStorage.getItem('username');                
        if (!this.price || this.price< 0) {
        this.price = 0;    
        }
        
        let body = { 
        title: this.title, 
        address: this.address, 
        description: this.description, 
        price: this.price, 
        phone: this.phone, 
        category: this.category, 
        option: this.option, 
        imageURL: this.imageURL,
        likes: this.likes, 
        username,       
        }
        
        this.updatePet(this.petId, body)              
        .then (() => {
            toastSuccess('Pet edited successfully!')
            this.$router.push({ name: 'details', params: { id: this.petId } })           
        });       
    }    
}
}
</script>

<style scoped>
</style>