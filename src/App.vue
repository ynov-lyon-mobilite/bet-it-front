<template>
  <v-app>
    <v-main>
      <v-row>
        <div v-show="!isLanding" style="width: 15vw">
          <Navbar></Navbar>
        </div>
        <div class="pa-10 mb-16" style="width: 85vw">
          <router-view />
          <Footer v-show="!isLanding"></Footer>
        </div>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";
import store from "@/store/index.js";
import Footer from "@/components/Footer"; 
import axios from 'axios';
  
axios.defaults.baseURL = "http://localhost:8000/";

export default {
  name: "App",
  store: store,
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

<style>
.vh-100 {
  height: 100vh;
}
.vh-90 {
  height: 100vh;
}
.vw-100 {
  width: 100vw;
}
.w-100 {
  width: 100%;
}
html {
  overflow-y: auto !important;
}
.h-100 {
  height: 100%;
}
</style>
