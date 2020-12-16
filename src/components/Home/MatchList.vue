<template>
  <v-container class="vh-100 matches-container" style="margin-top: -10vw;">
    <v-row id="title"  class="ml-5 mb-10 flex-row justify-space-between">
      <div>
        <h1 style="text-shadow:0 0 10px black, 0 0 20px #454d7e, 0 0 30px #454d7e, 0 0 70px #454d7e">WORLDS 2020</h1>
      </div>
      <div>
        <img style="width: 10vw;
    margin-top: -2vw;" src="../../assets/betties.png" alt="monnaie">
      </div>
      </v-row>
      
    <v-row class="flex-row justify-center" style="margin: 0 0 -3vw 21vw;">
    
      <v-card
          v-for="n in 2"
          :key="n"
          color="white"
          cols="3"
          class="ma-2 d-flex justify-center "
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
          v-for="n in 3"
          color="white"
          :key="n"
          cols="3"
          class="ma-2 d-flex justify-center"
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
          v-for="n in 3"
          color="white"
          :key="n"
          cols="3"
          class="ma-2 d-flex justify-center "
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
  </v-container>

</template>

<script>
export default {
  name: "MatchList",
  data: () => ({
    matches: [], 
  }),

}
</script>

<style lang="scss" scoped>

.matches-container{

  #title{
        transform: rotate(0deg);
        font-size: 30px;
  }
  .row{
    position: relative;
    top : 200px;
    transform: rotate(45deg);
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
    background: linear-gradient(50deg, var(--v-secondary-base)  0%, var(--v-primary-base) 100%);
    transition: .4s ease-in-out;
    color: white;
  }

  .content{
  color:black;
  font-weight: bold;
 
}
 
 .v-card:hover .content {
  color: white;
}

}



</style>
