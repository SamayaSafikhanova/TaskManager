<template>
  <v-app>
    <Header/>
    <Navbar/> 
    <v-content>
       <router-view></router-view>
    </v-content>
    <v-footer style="background: #f5f5f5!important;">
     
    <div>  <v-img
          class="shrink mr-2"
          contain
          src="../src/assets/logo.png"
          transition="scale-transition"
        
          style="width: 28px; display: inline-block;"
        />
     
     <span style="display: inline-block;  vertical-align: top;    padding-top: 6px;    color: #656e64;">&copy; {{ new Date().getFullYear() }}<span>Task Manager</span></span></div>
  </v-footer>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar'
import Header from './components/Header'
export default {
  name: 'App',
  components: {
    Navbar,
    Header
  }
}
</script>
<style>

* {
     text-decoration: none;
}
.main_menu a{
 color: #d09e23!important;
    padding: 15px;
   
    display: inline-block;
}
.main_menu a span{
 vertical-align: bottom;
}
   .main_menu a i{
  color: #d09e23!important;
} 
.router-link-exact-active{
    background: #f0eaea;
}
 .v-dialog{
   font-family: Segoe UI!important;
 }
body{
  font-family: Segoe UI!important;
}
.erMsg{
   text-align: center;
    padding: 25px 0px;
    color: red;
}

.erMsg~ul li{
   
    color: red;
}

html {
  overflow: auto!important;
  font-family: Segoe UI!important;
}

.theme--light.v-footer 
{
     background-color: white!important;
     box-shadow: 0 0 13px 0 rgba(0, 0, 0, 0.15);
     background-color: #ffffff;
     justify-content: center;
     font-size: 12px;
}
.theme--light.v-footer span{
    padding-left: 5px
}
.v-content{
  padding: 0px!important;
  background: white!important;
  margin: 0px 10px!important;
  font-family: Segoe UI!important;
}

input:-internal-autofill-selected {
    background-color: white !important; 
}

 .txtarea  textarea {
   height: 60px!important;
   font-family: Segoe UI!important;
 }

 .v-text-field .v-label {
    max-width: 100%!important;
    font-size: 15px!important;
    }

   td div button.v-btn{
          background: #d09e23!important;
    color: white!important;
    }
    .v-btn{
        text-transform: unset!important;
}
.modal-header{
        background-color: #d09e23!important;
    padding: 5px 15px!important;
}
.modal-header span{
        font-size: 14px;
    font-weight: normal;
    color: white;
}
.modal-header .v-icon{
    color: white;
    font-size: 20px;
}

.v-dialog .v-card__actions{
    justify-content: center!important;
}

.btn-cancel.v-btn{
    border:  1px solid #d09e23;
    color: #d09e23;
     
}
.btn-action{
     background-color: #d09e23!important;
     color: white!important;

}
.dialog-buttons .v-btn{
  width: 115px!important;
   box-shadow: unset;
}
.dialog-buttons{
    padding: 25px 0px;
}
.norecord{
      font-style: italic;
    border-bottom: 1px solid #dfdbdb; 
    letter-spacing: 1.18px;
        text-align: center;
    font-weight: bold;
    }
.buttons-bar{
    box-shadow: 0px 4px 2px -2px rgb(163 49 49 / 15%);
    background-color: #ffffff; 
    margin-top: 0px;
    z-index: 1;
    font-family: Segoe UI;
    padding: 0px!important;
     margin-left: 0px!important;
    margin-right: 0px!important;
    margin-bottom: 10px;
    text-align: right;
}
.buttons-bar button.v-btn{
       background: #701a19!important;
    color: white;
        margin-top: 20px;
    font-size: 15px!important;
    padding: 10px 20px!important;}

 button.add_order.v-btn{
       background: #701a19!important;
    color: white;
    margin-right: 10px;}   

    tr.sum td {
    font-size: 20px;
    font-weight: bold;
}
 .row.no-gutters{
        height: 100%;
    }

     .row.no-gutters>div {
        height: 100%;
    }
      .row.no-gutters .menu-dictionary{
        height: 100%;
            margin-right: 10px;
    }
       .table-dic{
           height: 90%;
       }
       .filter-dic{
               margin: 10px 0px;
    padding: 10px;
       }

       .title-dic{
           float: left; 
       }
        .button-dic{
           float: right
       }
        .clearfix{
           clear: both
       }

       .new_button span {
    display: block;
    text-align: center!important;
    color: #d09e23!important;
}

 .takeback{
       padding: 0px 10px 2px;
    background: #701a19;
    color: white;
 }

 tbody.moreDetails tr span{
     background: #128e10;
    color: white;
    padding: 1px 6px 4px;
    font-weight: bold;
    }

.refuse{
  background: #d09e23!important;
     
}
  .price .theme--light.v-input--is-disabled .v-label,
  .price  .theme--light.v-input--is-disabled input {
    color: black;
    font-weight: bold;
}
.dialog-buttons>div.all-bt{
    width: 45%; 
    padding: 20px 0px;
}
.dialog-buttons>div.all-bt>div{
  width: auto;
  display: inline-block;
}
 .align-left{
   text-align: left;
 }
 .align-right{
   text-align: right;
 }
[disabled] {
    
    opacity: 0.7;
}

 

 
.right>div{
text-align: center;
margin: 0px 30px;
letter-spacing: 0.2px;
font-weight: bold;
 padding: 25px 5px;
}
.right>div:first-child{
  
    
    border-bottom: 1px solid #d09e23;
   
        font-style: italic;
    
    color: #c5992e;
 
}
.right>div:nth-child(2){
   
         color: #701919;
    font-size: 20px;
     
}
.right>div:nth-child(3){
   
    border-top: 1px solid #d09e23;
     font-style: italic;
     color: #c5992e;
    
}
.right>div:first-child p{
 font-size: 20px;
}
.right>div:first-child p span{
 color: #b15a2b;
}
#menuList a {
    width: 100%;
    display: inline-block;
    color: #484848;
    padding: 10px 15px;
}
#menuList a.selected_link {
    background: #d09e23;
    color: white!important;
}
#menuList  {
   padding: 0px;
}
#menuList li {
  list-style: none;
}
@media screen  and (max-width: 767px) {
  .mainpage>div {
width: 100%; 
 height: auto;
}
}

.closed, .closed~td{
 background-color: #cff8d1;
}

.status div{
      background: #d09e23;
    text-align: center;
    padding: 7px;
    border-radius: 4px;
    min-width: 80px;
    color: white;
    font-weight: bold;
}
</style>
