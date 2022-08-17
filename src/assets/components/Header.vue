<template>
     <v-app-bar
      app 
      dark
      class="header"
    >
      <div class="d-flex align-center">
        <v-img
         
          class="shrink mr-2"
          contain
          src="../assets/logo.png"
          transition="scale-transition"
          width="55"
        />

          <div class="outline"> 
               
                <div>Tapşırıqların idarə olunması sistemi</div>
                  
          </div>
      </div> 
   
    </v-app-bar>
</template>

<script>
 
   
export default {
    name:'Header'
     
   
   
   
}
</script>

<style >
 
.theme--dark.v-sheet{
  background-color: #d09e23!important;
}
.outline{
      font-size: 19px;
    padding: 2px 0px 0px 10px;

}
.v-btn{
    box-shadow: none;
    background: transparent!important;
    text-transform: unset!important;
}
.v-btn.v-size--default {
    font-size: 10px!important;
    width: auto!important;
        padding: 0px 6px!important
}

 

 
 
</style>
