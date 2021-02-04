<template>
  <v-app>
    <v-main>
      <v-row class="vh-100">
        <div v-show="!isLanding" class="ma-0 pa-0" style="width: 15vw">
          <Navbar></Navbar>
        </div>
        <div
          class="ma-0 pa-0 vh-100 overflow-y-auto overflow-x-hidden"
          style="width: 85vw"
        >
          <router-view />
          <Footer></Footer>
        </div>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";
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
