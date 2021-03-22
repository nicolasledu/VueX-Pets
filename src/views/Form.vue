 <template>
  <div class="home">
    
    <h2> New Pet </h2>
    <p v-if="msg.error" style="color:red">{{msg.error}}</p>
    <p v-if="msg.success" style="color:green">{{msg.success}}</p>

    <form>
      
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" name="name" class="form-control"  v-model="name">
      </div>
      
      <div class="form-group">
        <label for="birthday">Birth Year :</label>
        <input type="number" name="birthday" class="form-control"  placeholder="1998" v-model="birthYear">
      </div>

      <div class="form-group">
        <label for="species">Species :</label>
        <select class="form-control" v-model="species">
          <option>Dog</option>
          <option>Cat</option>
        </select>
      </div>

      <button type="type" class="btn btn-primary" @click.prevent="petsAdd"> Register </button>

    </form>


  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'Form',
  data(){
      return{
          name: '',
          species: '',
          birthYear: '',
          msg: {
              error: '',
              success: '',
          },
      }
  },
  computed: {
        ...mapGetters({
            Pets: 'Pets',
        }),
        
        },
  methods: {
      ...mapActions({
            pushPets: 'pushPets'
        }),
      petsAdd (){
          if(this.name.length > 0 && this.species.length >0 && this.birthYear.length>0){
              this.pushPets({name:this.name,species:this.species,birthYear:this.birthYear})
                this.msg.error = ""
                this.msg.success = "Animal a bien été ajouté"
                this.name=''
                this.species=''
                this.birthYear=''  
          }
          else{
              this.msg.error = "Veuillez remplir le formulaire correctement"
              this.msg.success = ""
          }
         
      }
  }

}
</script>