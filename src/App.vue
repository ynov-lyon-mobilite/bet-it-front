<template>
  <v-app>
    <v-main>
        <v-row class="vh-100">
          <div class="col-2 ma-0 pa-0">
            <Navbar></Navbar>
          </div>
          <div class="col-10 ma-0 pa-0 vh-100 overflow-auto">
            <router-view />
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

export default {
  name: "App",

  components: {
    MatchList,
    Navbar,
  },

  data: () => ({
    isLoading: false
  }),
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  }
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
