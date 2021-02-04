
<template>
  <v-app>
    <v-main>
      <v-row>
        <div class="ma-0 pa-0" style="width: 15vw">
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

  data: () => ({
    isLoading: false,
  }),
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  },
};
</script>

<style>
html {
  overflow-y: auto !important;
}
</style>
