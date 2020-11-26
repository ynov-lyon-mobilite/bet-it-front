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
          <v-img src="../../assets/DW_Logo.png" width="80" class="mr-5" ></v-img>
          <div class="line"></div>
          <v-img src="../../assets/100T_logo.png" width="80" class="ml-5" ></v-img>
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
          <v-img src="../../assets/DW_Logo.png" width="80" class="mr-5" ></v-img>
          <div class="line"></div>
          <v-img src="../../assets/100T_logo.png" width="80" class="ml-5" ></v-img>
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
          <v-img src="../../assets/DW_Logo.png" width="80" class="mr-5" ></v-img>
          <div class="line"></div>
          <v-img src="../../assets/100T_logo.png" width="80" class="ml-5" ></v-img>
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
          <v-img src="../../assets/DW_Logo.png" width="80" class="mr-5" ></v-img>
          <div class="line"></div>
          <v-img src="../../assets/100T_logo.png" width="80" class="ml-5" ></v-img>
        </div>
        
      </v-card>
    </v-row>
    <v-overlay
      :z-index="zIndex"
      :value="overlay"
      :opacity="0.8"
    >
    <v-row class="flex-row justify-center">
      
      <v-card
          color="grey"
          cols="3"
          class="ma-1 d-flex justify-center "
          width="300"
          height="300"
          outlined
          id="test"          
      >
        <div class="d-flex align-center div-text justify-space-between">
          <div>
               <v-img src="../../assets/DW_Logo.png" width="80" class="mr-5" ></v-img>
            <v-btn
  elevation="10"
>test</v-btn>
          </div>
         
          <div class="line"></div>
          <v-img src="../../assets/100T_logo.png" width="80" class="ml-5" ></v-img>
        </div>
        
      </v-card>
    </v-row>
      <v-btn

        class="white--text"  
        color="teal"
        @click="overlay = false"
      >
        Hide Overlay
      </v-btn>
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


  #test:hover{background: unset;
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
}



</style>
