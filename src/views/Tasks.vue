<template>
<div> 
       <v-row  class="buttons-bar">
        <v-col    cols="12"   md="3" > 
            <v-text-field   v-model='search'  label="Axtar..." ></v-text-field>
          </v-col>
               
           <v-col  cols="12"   md="9" > 
           <NewTask/> 
             </v-col>
       </v-row> 
  <div class="table-componenet"> 
    <v-data-table  
      :headers="headers"
      :items="filteredtasks"   
      item-key="tagname" 
       :sort-by="['status']"
       :sort-desc="[ true]"
      :footer-props="{
      itemsPerPageText:'Məlumat sayı:',
      itemsPerPageOptions: [10,50,100, 1000],  
      }">
     
        <template v-slot:body="{ items }"> 
           <tbody>
           <tr v-for="(item, key) in items" :key="item.name">
              <td :class="item.status=='Tamamlanıb'? 'closed' : 'notClosed'">{{key+1}}</td>
              <td>{{ item.tagname }}</td>
             
              <td><div v-for="(item) of item.connections" :key="item.name">
                 {{item  }} 
                </div></td> 
                 <td >{{ item.description }}</td>
              <td class="status"><div>{{item.status}}</div></td>
              
              <td><UpdateTask v-bind:taskId="item.id"/></td>
                 <td>  <Delete v-bind:id="item.id"   v-bind:viewName="slc" />   </td>
           </tr>
         
         <tr v-if="filteredtasks.length==0" class="norecord">
             
              <td colspan="6"><div class="norecord-c">Məlumat yoxdur...</div></td>
        </tr>
      </tbody>
    </template>
  </v-data-table> 
    <ErrorDialog v-model="dialog_err"  v-bind:errorMsg="errorMsg"/>
  </div>
 
  </div>
</template>

<script>
    import { mapGetters, mapActions } from "vuex"; 
     import Delete from '../popups/Delete';  
    import NewTask from '../popups/NewTask'
    import ErrorDialog from '../popups/ErrorDialog'
      import UpdateTask from '../popups/UpdateTask.vue';
    export default {
    name: 'Tasks',   
    components:{  NewTask, ErrorDialog,Delete, UpdateTask },
    data () {
      return {  
        errorMsg:'',
        dialog_err:false,  
        slc:'tasks',  
        headers:[
        { text: '№',   value: 'index',sortable:false }, 
        { text: 'İcraçı', value: 'tagname'   },   
        { text: 'Əlaqəli şəxslər', value: 'connections'   }, 
        { text: 'Qeyd', value: 'description'   }, 
        { text: 'Status', value: 'status'   },
        { text: 'Redaktə', value: 'update'   },
        { text: 'Sil', value: 'delete'   }
        
      ]
      }
    },
       methods: {
    ...mapActions([ "fetchTasks"]), 
       },
        
       computed:{ ...mapGetters(["alltasks","filteredtasks","allworkers"]), 
        search:
      {
        get () { return this.$store.getters.search },
        set (value) { this.$store.commit('updateSearch', value) }
      },
       },

       created() {
            this.fetchTasks();
  }
}
</script>
