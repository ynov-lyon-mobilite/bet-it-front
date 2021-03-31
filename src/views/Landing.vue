<template>
  <v-container class="container-landing ">
    <v-row class="d-flex justify-center row-landing vh-100">
      

      <v-col cols="6" class="col-perso">
        <v-card class="card-landing" href="google.com">
          <v-img class="img-left" src="http://boucharlat.ovh/wp-content/uploads/img/photo3.jpg">
            <v-btn x-large elevation="4" rounded class="my-span1 test" color="primary">
              <h2>Paris e-sportifs</h2>
            </v-btn>
            <v-row>
              <v-col cols="7" offset-md="3" class="row-slogan">
                <p>Viens te confronter aux meilleurs parieurs de la ligue !</p>
              </v-col>
            </v-row>
          </v-img>
        </v-card >
      </v-col>

      <v-col cols="6" class="col-perso">
        <v-card class="card-landing" href="google.com">
          <v-img class="img-right" src="http://boucharlat.ovh/wp-content/uploads/img/photo1.jpg">
            <v-btn x-large elevation="4" rounded class="my-span3 test" color="primary">
              <h2>Fantasy League</h2>
            </v-btn>
            
          </v-img>
        </v-card>
      </v-col>

    </v-row>
  </v-container>

</template>

<script>
export default {
  name: "Landing",
  mounted() {
    setTimeout(() => {
      this.$router.push({ path: "/home" });
    }, 30000000);
  },
};
</script>

<style scoped>
video {
  object-fit: cover;
  position: fixed;
  top: 0;
  left: 0;
}

.logo-wrapper {
  position: relative;
  width: 50%;
  color: #31f4d9;
}

.container-landing{
  overflow: hidden;
  height: 100vh;
  display: contents;
}

.row-landing, .card-landing{
  height: 100%;
}

.card-landing{
  background-image: url("/src/assets/landingPage/lol1.jpg");

}

.img-left{
  filter: blur(2px);
  filter: brightness(40%);
  overflow: hidden;
  padding-top: 50%; 

}

.img-left:hover{
  transform: scale(1.03);
  transition-duration: 1s;
  overflow: hidden;
  filter: blur(0px);
  filter: brightness(100%)
}

.img-right{
  filter: blur(2px);
  filter: brightness(40%);
  overflow: hidden;
  padding-top: 50%; 

}

.img-right:hover{
  transform: scale(1.03);
  transition-duration: 1s;
  overflow: hidden;
  filter: blur(0px);
  filter: brightness(100%)
}

.col-perso{
  padding: 0px !important;
  overflow: hidden;
}

.my-span1,.my-span2,.my-span3,.my-span4 {
  font-size: 35px;
  margin-left: 50%;
}

.my-span1 {
  margin-left: 38%;
}
.my-span2 {
  margin-left: 30%;
}
.my-span3 {
  margin-left: 34%;
}
.my-span4 {
  margin-left: 30%;
}

.test{
  font-family: Bebas Neue, cursive !important;
  background-color: rgba(255, 255, 255, 0.7);
}

.row-slogan{
  background-color: rgba(255, 255, 255, 0.7);
  color: black;
  text-align: center;
}

</style>
