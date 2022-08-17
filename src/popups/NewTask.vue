<template>
  <div>
    <v-dialog
      v-model="dialog"
      width="450"
    >
      <template v-slot:activator="{ on }"> 
          <v-btn v-on="on">Tapşırıq yarat </v-btn>
      </template> 
      <v-card>
        <v-card-title
          class="modal-header" 
        >
          <span>Tapşırıqlar</span>
          <v-spacer></v-spacer> 
           <v-btn
            icon
            color="primary"
            text
            @click="dialog = false"
          ><v-icon>cancel</v-icon> 
          </v-btn>
          
        </v-card-title>
           <v-form  v-model="isFormValid" ref="form" > 
        <v-card-text>
             <v-row>
                 <v-col    cols="12"   md="6" > 
                     <v-select :rules="validationRules"  label="Statusu seçin" v-model="status"  :items="alltables" item-value="name" item-text="name"> </v-select> 
                 </v-col>  
                  <v-col    cols="12"   md="6" > 
                     <v-select :rules="validationRules"  label="İcraçını seçin" v-model="tagname"  :items="allworkers" item-value="tagname" item-text="tagname"> </v-select>    
                 </v-col>  
                         
                    <v-col    cols="12"   md="12" > 
                        <v-select label="Əlaqəli şəxslər" multiple  v-model="connections"  :items="allworkers" item-value="tagname" item-text="tagname"> </v-select>    
                  
                      </v-col> 
                    <v-col    cols="12"   md="12" > 
                       
                     <v-textarea solo  label="Qeyd" v-model="description" > </v-textarea>    
                 </v-col> 
             </v-row>
        </v-card-text>
      </v-form>
        <v-divider></v-divider> 
        <v-card-actions class='dialog-buttons'>
           <v-btn :disabled="!isFormValid"   @click="dialog = false; addTaskSubmit();"  class="btn-action" outlined>Tətbiq et</v-btn> 
           <v-btn   @click="dialog = false;"  class="btn-cancel" outlined>İmtina et</v-btn>  
        </v-card-actions> 
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
  
  import { mapGetters, mapActions } from "vuex";  
      
  export default {  
    data () {
      return { 
      dialog:false,
      selectedRow: null,  
      status:'',
      tagname:'', 
      connections:[],
      description:'',
      isFormValid:false, 
      validationRules: [ v => !!v || 'Sahəni boş buraxmaq olmaz!'],
      idForTask: 50, 
      }
    },
     computed:{ ...mapGetters(["alltables","allworkers",'alltasks'])},
     methods: {  ...mapActions(["fetchTables","fetchWorkers", "addTask","fetchTasks"]),  
      
       addTaskSubmit() {
        
      this.addTask({
         id: this.idForTask,
         description: this.description,
         tagname:this.tagname,
         status: this.status, 
         connections: this.connections, 
      })
      .then(()=>{
        console.log(this.alltasks);
      })
       
      this.idForTask++
   
    },
      
      },
     
     
 created(){ 
  this.fetchTables();
  this.fetchWorkers();
 }
  }
</script>

<style scoped>

</style>
