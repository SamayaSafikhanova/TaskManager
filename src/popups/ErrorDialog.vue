

    <template>
     <v-dialog 
      :value="value" @input="$emit('input')"
       width="500"
       v-if="errorMsg"
    >
     
      <v-card>
         <v-card-title
          class="headline red lighten-2"
          primary-title
        >
          
        </v-card-title>
        <v-card-text>
 
            <div class="erMsg">{{errorMsg.errorDescription}}</div>
            <ul  v-if='errorMsg.subErrorList'>
             <li v-for="(item, i) in errorMsg.subErrorList" :key="i">
              {{ item.errorDescription }}
     </li>
</ul>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions class='dialog-buttons'>  
             <v-btn @click.native="$emit('input')"   class="btn-cancel" outlined>BAĞLA</v-btn> 
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script> 
 export default {
   props:['errorMsg' ,"value"],
  
  
   }
 </script>
