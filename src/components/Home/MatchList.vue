<template>
  <v-container class="vh-100 matches-container">
    <v-row class="flex-row justify-center">
      <div>
        <h2>Worlds 2020</h2>
      </div>
    </v-row>
    <v-row class="flex-row justify-center">
      <v-card
        v-for="n in 5"
        color="white"
        :key="n"
        cols="3"
        class="ma-1 d-flex justify-center"
        width="200"
        height="200"
        outlined
      >
        <div class="d-flex align-center div-text w-100 justify-space-between">
          <div class="text-card">team</div>
          <div class="line"></div>
          <div class="text-card">team</div>
        </div>
      </v-card>
    </v-row>
    <v-row class="flex-row justify-center">
      <div>
        <h2>Compétitions 2020</h2>
      </div>
    </v-row>
    <v-row class="flex-row justify-center">
      <v-card
        v-for="n in 5"
        color="white"
        :key="n"
        cols="3"
        class="ma-1 d-flex justify-center"
        width="200"
        height="200"
        outlined
      >
        <div class="d-flex align-center div-text w-100 justify-space-between">
          <div class="text-card">team</div>
          <div class="line"></div>
          <div class="text-card">team</div>
        </div>
      </v-card>
    </v-row>

    <v-row class="flex-row justify-center">
      <div>
        <h2>Les matchs OSEF 2020</h2>
      </div>
    </v-row>
    <v-row class="flex-row justify-center ">
      <v-card
        v-for="n in 15"
        color="white"
        :key="n"
        cols="3"
        class="ma-1 d-flex justify-center"
        width="200"
        height="200"
        outlined
      >
        <div class="d-flex align-center div-text w-100 justify-space-between">
          <div class="text-card">team</div>
          <div class="line"></div>
          <div class="text-card">team</div>
        </div>
      </v-card>
    </v-row>
    <v-row class="flex-row justify-center">
      <div>
        <h2>Les trucs paumés 2020</h2>
      </div>
    </v-row>
    <v-row class="flex-row justify-center ">
      <v-card
        v-for="n in 3"
        color="white"
        :key="n"
        cols="3"
        class="ma-1 d-flex justify-center"
        width="200"
        height="200"
        outlined
      >
        <div class="d-flex align-center div-text w-100 justify-space-between">
          <div class="text-card">team</div>
          <div class="line"></div>
          <div class="text-card">team</div>
        </div>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "MatchList",
  data: () => ({
    matches: []
  })
};
</script>

<style lang="scss" scoped>
.matches-container {
  .row {
    position: relative;
    top: 200px;
    transform: rotate(45deg);
    //transform-origin: top left;
    transform-origin: center;
    margin-bottom: 170px;
  }
  .line {
    height: 13rem;
    border: 1px solid;
  }

  .div-text {
    transform: rotate(-45deg);
    transform-origin: center;
  }

  .v-card {
    transition: 0.4s ease-in-out;
    color: grey;
  }

  .v-card:hover {
    background: linear-gradient(
      50deg,
      var(--v-secondary-base) 0%,
      var(--v-primary-base) 100%
    );
    transition: 0.4s ease-in-out;
    color: white;
  }
}

.rotate {
  transform: rotate(-45deg);
}
</style>
