
<template>
  <v-app>
    <v-main>
      <v-row>
        <div v-show="!isLanding" style="width: 15vw">
          <Navbar></Navbar>
        </div>
        <div class="pa-10 mb-16" style="width: 85vw">
          <router-view />
          <Footer v-show="!isLanding" ></Footer>
        </div>

      </v-row>

    </v-main>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";
import axios from "axios";
import store from "@/store/index.js";
import Footer from "@/components/Footer";

export default {
  name: "App",

  components: {
    Navbar,
    Footer,
  },
  computed: {
    isLanding() {
      return this.$route.name === "Landing";
    },
  },
};
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Varela+Round&display=swap');

$title-font: 'Bebas Neue';
$under-title-font: 'Varela Round';
$body-font: 'Roboto';

.v-application {
  h1{
    font-family: $title-font, cursive !important;
    font-weight: normal;
    font-size: 3rem;
  }
  h2, h3, h4 {
    font-family: $title-font, cursive !important;
    font-weight: normal;
    font-size: 2rem;
  }
  p {
    font-family: $body-font, sans-serif !important;
  }
  .card-title{
    font-family: $title-font, sans-serif !important;
    font-size: 2rem;
  }
}

.vh-100 {
  height: 100vh;
}

.vw-100 {
  width: 100vw;
}

.font-title{
  font-family: $title-font, cursive !important;
  font-weight: normal;
  font-size: 3rem;
}

.font-body{
  font-family: $title-font;
}


html {
  overflow-y: auto !important;
}
</style>
