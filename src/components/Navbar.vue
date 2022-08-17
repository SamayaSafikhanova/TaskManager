<template>
 <nav class="main_menu">   
     <router-link to="/"><v-icon>view_stream</v-icon><span>Tapşırıqlar</span></router-link>
     <router-link to="/dictionary"><v-icon>note_add</v-icon><span>Soraqça</span></router-link>
</nav>

</template>

 

<style scoped>

nav{
   box-shadow: 0 0 13px 0 rgba(0, 0, 0, 0.15);
  background-color: #ffffff;
  text-align: center;
    margin-top: 65px;
  z-index: 1;
  font-family: Segoe UI;
      padding: 0px 20px;
}
  .v-list-item{

    display: inline-flex;
}

.v-list-item__action{
   margin-right:5px!important;
}

.v-list{
  margin: auto;
  padding: 0px!important;
}
 nav .v-list-item {
       padding: 0 10px;
 }

.v-list i, .v-list-item__content{
 color: #d09f34!important;
     padding: 0px 4px 2px;
  font-size: 16px!important;
    
    font-weight: 600!important;  
}

.v-list-item__action, .v-list-item__avatar, .v-list-item__icon{
  min-width: 10px!important;
}
.v-list .v-list-item--active {
     
    color: #585a5d;
}

.hrmenu span{
  color: #d09f34!important; 
    font-size: 16px!important;
    font-weight: 600;
    padding-top: 4px;
    letter-spacing: normal;
    
}
.hrmenu{
  position: relative!important;
    top: 3px!important;
}
.hrmenu i{
padding-top: 5px!important;
}
.v-list-item {
 
    align-items: baseline!important;}

.hrmenulist .v-list-item__content{
  color: #665f5b!important;
    padding: 7px 0px;
    font-size: 16px!important;
    font-weight: normal!important;
}
.hrmenulist .v-list-item{
   display: block!important;
    min-height: 27px!important;
    
    padding-top: 5px;
}
.hrmenulist  {
   padding: 10px 0px!important;
}
 .v-icon.v-icon {
   font-weight: 500!important;
 }
</style>
