
<template>
  <v-app>
    <v-main>
      <v-row>
        <div class="ma-0 pa-0" v-show="!isLanding" style="width: 15vw">
          <Navbar></Navbar>
        </div>
        <div class="ma-0 pa-0" style="width: 85vw">
          <router-view />
          <Footer></Footer>
        </div>

      </v-row>

    </v-main>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";
import MatchList from "@/components/Home/MatchList";
import axios from "axios";
import store from "@/store/index.js";
import Footer from "@/components/Footer";

export default {
  name: "App",

  components: {
    MatchList,
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

.v-application{

}
</style>
