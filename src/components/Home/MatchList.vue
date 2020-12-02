<template>
  <v-container class="vh-100 matches-container" style="margin-top: -10vw;">
    <v-row id="title"  class="ml-5 mb-10 flex-row justify-space-between">
      <div>
        <h2 style="text-shadow:0 0 10px black, 0 0 20px #454d7e, 0 0 30px #454d7e, 0 0 70px #454d7e">WORLDS 2020</h2>
      </div>
      <div>
        <img style="width: 10vw;
    margin-top: -2vw;" src="../../assets/betties.png" alt="monnaie">
      </div>
      </v-row>
      
    <v-row class="flex-row justify-center" style="margin: 0 0 -3vw 21vw;">
    
    
      <v-card
          @click="overlay = !overlay"
          color="white"
          cols="3"
          class="ma-1 d-flex justify-center "
          width="200"
          height="200"
          outlined
      >
        <div class="d-flex align-center div-text justify-space-between">
          <v-col>
          <v-img src="../../assets/DW_Logo.png" width="80" class="ml-4 mt-6"  ></v-img>
            <p style=" margin-left:37px; margin-top:6px; font-size:25px " class="content">1.9</p>
          </v-col>
          <div class="line"></div>
         <v-col>
          <v-img src="../../assets/100T_logo.png" width="80" class="mr-4 mt-7" ></v-img>
          <p style=" margin-left:20px; margin-top:12px; font-size:25px " class="content">2.5</p>
         </v-col>
        </div>
      
      </v-card> 

    </v-row>
    <v-row class="flex-row justify-center" style="margin-bottom: 0;">
      <v-card
          @click="overlay = !overlay"
          v-for="n in 3"
          color="white"
          :key="n"
          cols="3"
          class="ma-1 d-flex justify-center"
          width="200"
          height="200"
          outlined

      >
        <div class="d-flex align-center div-text justify-space-between">
          <v-col>
          <v-img src="../../assets/DW_Logo.png" width="80" class="ml-4 mt-6"  ></v-img>
            <p style=" margin-left:37px; margin-top:6px; font-size:25px " class="content">1.9</p>
          </v-col>
          <div class="line"></div>
         <v-col>
          <v-img src="../../assets/100T_logo.png" width="80" class="mr-4 mt-7" ></v-img>
          <p style=" margin-left:20px; margin-top:12px; font-size:25px " class="content">2.5</p>
         </v-col>
        </div>
      </v-card>
        
      
    </v-row>
      <v-row class="flex-row justify-start " style="width: 50vw;margin-bottom: 0;margin-left: 5vw;">
        
      <v-card
          @click="overlay = !overlay"
          v-for="n in 3"
          color="white"
          :key="n"
          cols="3"
          class="ma-1 d-flex justify-center "
          width="200"
          height="200"
          outlined
      >
        <div class="d-flex align-center div-text justify-space-between">
           <v-col>
          <v-img src="../../assets/DW_Logo.png" width="80" class="ml-4 mt-6"  ></v-img>
            <p style=" margin-left:37px; margin-top:6px; font-size:25px " class="content">1.9</p>
          </v-col>
          <div class="line"></div>
         <v-col>
          <v-img src="../../assets/100T_logo.png" width="80" class="mr-4 mt-7" ></v-img>
          <p style=" margin-left:20px; margin-top:12px; font-size:25px " class="content">2.5</p>
         </v-col>
        </div>
      </v-card>
    </v-row>
    <v-row class="flex-row justify-start " style="width: 20vw; margin-left: 8vw; margin-top: -4vw;">
      <v-card
          @click="overlay = !overlay"
          color="white"
          cols="3"
          class="ma-1 d-flex justify-center "
          width="200"
          height="200"
          outlined
      >
        <div class="d-flex align-center div-text justify-space-between">
           <v-col>
          <v-img src="../../assets/DW_Logo.png" width="80" class="ml-4 mt-6"  ></v-img>
            <p style=" margin-left:37px; margin-top:6px; font-size:25px " class="content">1.9</p>
          </v-col>
          <div class="line"></div>
         <v-col>
          <v-img src="../../assets/100T_logo.png" width="80" class="mr-4 mt-7" ></v-img>
          <p style=" margin-left:20px; margin-top:12px; font-size:25px " class="content">2.5</p>
         </v-col>
        </div>
      </v-card>
    </v-row>

     

    <v-overlay
      :z-index="zIndex"
      :value="overlay"
      :opacity="0.8"
    >
    
    <v-row style="top:2vw"  class="flex-row justify-center">
      
      <v-card
          color="grey"
          cols="3"
          class="ma-1 d-flex justify-center"
          width="220"
          height="220"
          outlined
          id="overlay"   
      >
        <div class="d-flex align-center div-text justify-space-between">
          <v-col>
               <v-img src="../../assets/DW_Logo.png" width="80" ></v-img>
            <v-btn class="ml-2 mt-2" style="font-size:16px ;background: linear-gradient(60deg, #0CE1C4 0%, #571E68 100%);" elevation="10">1.5</v-btn>
          </v-col>
          <div   style="height: 20vw;"
 class="line"  ></div>
          <v-col>
          <v-img src="../../assets/100T_logo.png" width="80"></v-img>
          <v-btn  class="ml-2 mt-5" style="font-size:16px ;background: linear-gradient(60deg, #0CE1C4 0%, #571E68 100%);" elevation="10">1.9</v-btn>

          </v-col>
        
        </div>
        
      </v-card>
    </v-row >
    <v-card color="grey" id="overlay" width="50vw" style="margin-top:-6vw">
      <h3 style="color: black;" class="text-center" >Derniers matchs</h3>
       <div class="d-flex  div-text justify-space-between" style="transform: rotate(0deg);"> 
          <v-col>
               <v-img src="../../assets/DW_Logo.png" width="80"></v-img>
               <p class="ml-6" style="color:black ;font-weight: bold; ">WIN</p>
               <v-img src="../../assets/DW_Logo.png" width="80"></v-img>
               <p class="ml-6" style="color:black ;font-weight: bold;">WIN</p>
          </v-col>
           <v-col>
               <v-img src="../../assets/100T_logo.png" width="80" class="ml-16"></v-img>
              <p  style="color:black;margin-left: 85px; margin-top:13px">LOSE</p>
              <v-img src="../../assets/100T_logo.png" width="80" class="ml-16"></v-img>
              <p  style="color:black;margin-left: 85px; margin-top:13px">LOSE</p>
          </v-col>
          <div   style="height: 15vw;"
 class="line"  ></div>
          <v-col>
          <v-img src="../../assets/100T_logo.png" width="80" ></v-img>
            <p class="ml-6" style="color:black ;margin-top:13px; font-weight: bold;">WIN</p>
             <v-img src="../../assets/100T_logo.png" width="80" ></v-img>
            <p class="ml-6" style="color:black ;margin-top:13px;font-weight: bold;">WIN</p>
          </v-col>
           <v-col>
               <v-img src="../../assets/DW_Logo.png" width="80" class="ml-16"></v-img>
               <p  style="color:black;margin-left: 84px;">LOSE</p>
                <v-img src="../../assets/DW_Logo.png" width="80" class="ml-16"></v-img>
               <p  style="color:black;margin-left: 84px;">LOSE</p>

          </v-col>
        
        </div>
    </v-card>
    <div class="d-flex justify-center mt-4">
<v-btn
        class="white--text "  
        color="teal"
        @click="overlay = false"
        style="background: linear-gradient(60deg, #0CE1C4 0%, #571E68 100%);"
      >
        Retour
      </v-btn>
    </div>
      
    </v-overlay>
  
  </v-container>

</template>

<script>
export default {
  name: "MatchList",
  data: () => ({
    matches: [],
    overlay: false,
    zIndex: 0,
    opacity: 0.7,
    hover : false,
  }),

}
</script>

<style lang="scss" scoped>

.matches-container{


  #overlay:hover{background: unset;
  transition: none;
    color: grey;}

  #title{
        transform: rotate(0deg);
        font-size: 30px;
  }
  .row{
    position: relative;
    top : 200px;
    transform: rotate(45deg);
    //transform-origin: top left;
    transform-origin: center;
    margin-bottom: 170px;
  }
  .line{
    height: 13rem;
    border: 1px solid;
  }

  .div-text{
    transform: rotate(-45deg);
    transform-origin: center;
  }

  .v-card {
    transition: .4s ease-in-out;
    color: grey;
  }

  .v-card:hover {
    background: linear-gradient(60deg, #0CE1C4 0%, #571E68 100%);
    transition: .4s ease-in-out;
    color: white;
  }

  .content{
  opacity:0;
  font-weight: bold;
 
}
 
 .v-card:hover .content {
  opacity:1;
}

}



</style>
