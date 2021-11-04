<template>
  <v-app>
    <v-main>
      <div v-if="!isLanding">
        <Navbar></Navbar>
        <div class="pa-10 ma-16">
          <router-view />
          <Footer></Footer>
        </div>
      </div>
      <Landing v-else></Landing>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";
import axios from "axios";
import Footer from "@/components/Footer";
import Landing from "./views/Landing.vue";

axios.defaults.baseURL = "http://localhost:8000/";

export default {
  name: "App",

  components: {
    Navbar,
    Footer,
    Landing
  },
  computed: {
    isLanding() {
      return this.$route.name === "Landing";
    }
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Varela+Round&display=swap");

// Utils --------------------------------------------------------------
.vh-100 {
  height: 100vh;
}

.vw-100 {
  width: 100vw;
}
.gradient {
  background: linear-gradient(
    90deg,
    var(--v-darkPurple-base),
    var(--v-info-base),
    var(--v-secondary-base)
  );
}
//Fonts overrides ---------------------------------------------
$title-font: "Bebas Neue";
$under-title-font: "Varela Round";
$body-font: "Roboto";

.v-application {
  h1 {
    font-family: $title-font, cursive !important;
    font-weight: normal;
    font-size: 2.5rem;
  }
  h2,
  h3,
  h4 {
    font-family: $title-font, cursive !important;
    font-weight: normal;
    font-size: 2rem;
  }
  p {
    font-family: $body-font, sans-serif !important;
  }
  .card-title {
    font-family: $title-font, sans-serif !important;
    font-size: 2rem;
  }
}
// Classes for casuals overrides fonts -------------------------------
.font-title {
  font-family: $title-font, cursive !important;
  font-weight: normal;
  font-size: 3rem;
}

.font-body {
  font-family: $title-font !important;
}

.font-under-title {
  font-family: $under-title-font !important;
}
//Important for page with no need scroll --------------------------------
html {
  overflow-y: auto !important;
}
</style>
