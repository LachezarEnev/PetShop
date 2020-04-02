import { http } from '../services/httpClient';

export default {
    data: function() {
        return { 
            allPets: {},
            pet: {},
            myPets: {},
         }
    },
    methods: {
        async getAllPets() {
            try {
                const data = await http.get('pets/?query={}&sort={"likes": -1}')
                this.allPets = data.data                                       
            } catch(err) {
                console.log(err);
            }
        },
        async getPetById(id) {
            try {
                const data = await http.get(`pets/${id}`)
                this.pet = data.data                                        
            } catch(err) {
                console.log(err);
            }
        },
        async getAdoptPets() {
            try {
                const data = await http.get('pets/?query={"option":"adoption"}&sort={"likes": -1}')
                this.allPets = data.data                                       
            } catch(err) {
                console.log(err);
            }
        },
        async getBuyPets() {
            try {
                const data = await http.get('pets/?query={"option":"sale"}&sort={"likes": -1}')
                this.allPets = data.data                                       
            } catch(err) {
                console.log(err);
            }
        },
        async getMyPets(username) {
            try {
                const data = await http.get(`pets/?query={"username": "${username}"}&sort={"likes": -1}`)
                this.myPets = data.data                                       
            } catch(err) {
                console.log(err);
            }
        },
        async getCategoryPets(category) {
            try {
                const data = await http.get(`pets/?query={"category": "${category}"}&sort={"likes": -1}`)
                this.allPets = data.data                                       
            } catch(err) {
                console.log(err);
            }
        },
        async getSearchedPets(search) {
            try {
                const data = await http.get('pets/?query={}&sort={"likes": -1}')
                    this.allPets = data.data.filter(p => p.title.toLowerCase().includes(search.toLowerCase()) 
                    || p.category.includes(search.toLowerCase())
                    || search.toLowerCase().includes(p.category));                                     
            } catch(err) {
                console.log(err);
            }
        },
        async createPet(body) {
            try {
                await http.post('pets', body)                                  
            } catch(err) {
                console.log(err);
            }
        },
        async updatePet(id, body) {
            try {
                await http.put(`pets/${id}`, body)                                  
            } catch(err) {
                console.log(err);
            }
        },
        async deletePetById(id) {
            try {
                await http.delete(`pets/${id}`)                                   
            } catch(err) {
                console.log(err);
            }
        },
        async likePet(id) {
            try {
                const pet = await http.get(`pets/${id}`)                
                if(pet.data.username !== localStorage.getItem("username")){           
                pet.data.likes++;                                                                                            
                } 
                await http.put(`pets/${id}`, pet.data)                
            } catch (err) {
                console.log(err);
            }
        }
    }
}
