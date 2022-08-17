
<template>
    <v-row no-gutters>
      <v-col  cols="12"
        sm="3">
        <v-card class="menu-dictionary" >
         
    <ul id="menuList">
        
        <li><a @click="slc='workers'; dicObject=allworkers"  id='workers' href="#">Əməkdaşlar</a></li>  
        <li><a @click="slc='tables'; dicObject=alltables" id='tables' href="#">Statuslar</a></li>
    </ul>
  </v-card>
      </v-col>
        <v-col  cols="12"  sm="9">
         <v-card  class="filter-dic">
            <div  id='dic' class='title-dic title'></div>  
             <div class='button-dic'>
               <v-dialog
                 v-model="dialog"
                 width="500"
                 >
      <template v-slot:activator="{ on }" >
         <v-btn  icon   class='new_button'
           text
          v-on="on"
          @click="formData={}"
          >
          <v-icon>create_new_folder</v-icon>
          <span>Yeni</span> 
         </v-btn>
         
      </template>

      <v-card>
        <v-card-title class="modal-header">
            <span  class="title">Əməkdaşlar</span>  
          <v-spacer></v-spacer>
          
           <v-btn
            icon
            color="primary"
            text
           
            @click=" ;dialog = false"
          ><v-icon>cancel</v-icon>
            
          </v-btn>
          
        </v-card-title>
       <v-form v-model="isFormValid" ref="form" >
        <v-card-text >
                 <v-row>
                    <v-col cols="12"  md="12" >
                       <v-text-field  :rules="validationRules" v-model="formData.name" label="Adı"   required ></v-text-field>
                     </v-col> 
                     <v-col v-if="slc=='workers'" cols="12"  md="12" >
                       <v-text-field :rules="validationRules" v-model="formData.surname" label="Soyadı"   required ></v-text-field>
                     </v-col> 
                      <v-col v-if="slc=='workers'" cols="12"  md="12" >
                       <v-text-field :rules="validationRules" v-model="formData.tagname" label="Tag adı"   required ></v-text-field>
                     </v-col>
                      <v-col  v-if="slc=='tables'"  cols="12"  md="12" >
                       <v-text-field :rules="validationRules" v-model="formData.description" label="Təsviri"   required ></v-text-field>
                     </v-col>  
                    
                 </v-row>                        
        </v-card-text>
        </v-form> 
        <v-divider></v-divider>

        <v-card-actions class='dialog-buttons'>
           <v-btn    @click="dialog = false; formData={}"  class="btn-cancel" outlined>İMTİNA ET</v-btn> 
             <v-btn  :disabled="!isFormValid" @click="addnewData()" class="btn-action" >ƏLAVƏ ET</v-btn>  
        </v-card-actions>
        
      </v-card>
    </v-dialog>
            </div>
            <div class="clearfix"></div>
        </v-card>
          
        <v-card  class="table-dic">
         <div class="table-componenet">
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th id='1'>№</th> 
          <th id='3'>Adı</th>
          <th id='4' v-if="slc=='workers'">Soyadı</th>
          <th id='5'  v-if="slc=='workers'">İstifadəçi adı</th>
          <th id='6'  v-if="slc=='tables'" >Təsviri</th> 
           <th id='8'  class="text-center">Sil</th>
        </tr>
      </thead>
      <tbody  class="table-contract">
      
       <tr v-for="(item, index) in dicObject" :key="index" >
          <td>{{ index+1 }}</td>
          <td>{{ item.name }}</td>
          <td v-if="slc=='workers'">{{ item.surname }}</td>
          <td  v-if="slc=='workers'">{{ item.tagname }} </td>
           <td  v-if="slc=='tables'">{{ item.description }}</td>
             
           <td  style="width:20px"> 
             <div>  <Delete v-bind:id="item.id" v-bind:viewName="slc" /> </div>
          
            </td> 
        </tr>  
       
      </tbody>
    </template>
  </v-simple-table> 
  </div>
      </v-card>
    </v-col>
     <!-- <ErrorDialog v-model="dialog_err"  v-bind:errorMsg="errorMsg"/>   -->
    </v-row>
  
</template>
<script> 
//  import ErrorDialog from '../popups/ErrorDialog';
 import Delete from '../popups/Delete';
 import { mapGetters, mapActions } from "vuex";
 export default {
      components:{Delete},
     data () {
      return {
        name:"dictionary",
        dialog: false,
        formData:{ id:null },
        title:'',
        position: 0,
        index: 0, 
        errorMsg:'', 
        dialog_err:false,
         isFormValid:false, 
        slc:'',
        dicObject:{},
          validationRules: [
        v => !!v || 'Sahəni boş buraxmaq olmaz!', 
         ],
        idForObj:100
    }  },
       methods: {
    ...mapActions([ "fetchTables", "fetchWorkers","createAction"]),
           clickFunction() { document.querySelectorAll("#menuList li a")[0].click();  },
           menuClick() {  
                       document.querySelectorAll("#menuList li a").forEach(function(item){ item.addEventListener("click", function(){  
                       document.getElementsByClassName('title').forEach((item)=>{item.innerHTML=this.innerHTML;}) 
                       this.parentNode.parentNode.querySelectorAll("a").forEach(function(item){ item.classList.remove('selected_link') });
                       this.className = "selected_link"; 
                  
                      }); })   }, 
                      
          addnewData() {
        this.formData.id=this.idForObj;
       this.createAction({obj:this.slc,order:this.formData});
       this.idForObj++;
       this.dialog=false; 
    },
                      },

       computed: { 
         ...mapGetters(["allmeals", "alltables","allworkers"]), 
        
               },
          
  
 
      created(){
        setTimeout(this.clickFunction, 200) ;    
         setTimeout(this.menuClick, 100) ;
        
         this.fetchWorkers();
          this.fetchTables();
      
           },
            
           
  }
</script>

 
