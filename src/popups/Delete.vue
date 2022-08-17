<template>
      <v-dialog
      v-model="dialog"
      width="350" 
    >
      <template v-slot:activator="{ on }" > 
             <v-icon v-on="on"  color="red">delete</v-icon>
               
      </template>

      <v-card>
         <v-card-title class="modal-header">
          <span>Sil</span>
          <v-spacer></v-spacer>
          
           <v-btn
            icon
            color="primary"
            text
            @click="dialog = false"
          ><v-icon>cancel</v-icon>
            
          </v-btn>
          
        </v-card-title>
         
        <v-card-text>
               <v-row>
                  <v-col  class="text-center" cols="12"   md="12" > 
                        <div style="padding-top:20px">Silmək istədiyinizə əminsinizmi?</div> 
                 </v-col>  
             </v-row>
        </v-card-text>
 
        <v-divider></v-divider>

        <v-card-actions class='dialog-buttons'>
           <v-btn     @click="dialog = false"   class="btn-cancel" outlined>XEYR</v-btn> 
             <v-btn class="btn-action"   @click="deleteSubmit()">BƏLİ</v-btn>  
        </v-card-actions>
    
      </v-card>
       <ErrorDialog v-model="dialog_err"  v-bind:errorMsg="errorMsg"/>
    </v-dialog>
    
</template>

<script>
import ErrorDialog from '../popups/ErrorDialog';
import { mapActions } from "vuex";  
  export default {
    components:{ErrorDialog},
   props:['id', 'viewName'],
    data () {
      return {
         dialog: false,
         obj:{ switchOnlyStatus:true},
         errorMsg:'',
        dialog_err:false,
      }
    },
      methods: { ...mapActions(['deleteAction']),  
         deleteSubmit() { 
          this.deleteAction({obj:this.viewName, id:this.id}) 
          this.viewName!='tasks'&& document.getElementById(this.viewName).click();
          this.dialog=false;
    },
           },
 
       
  
}
</script> 
