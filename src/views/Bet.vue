<template>
  <v-container>
    <div class="d-flex justify-end align-center">
      <span class="amount text-h3">150</span>
      <v-img class="mx-3" max-width="100" src="../assets/betties.png"></v-img>
    </div>
    <v-row class="mt-12 justify-center">
      <v-col cols="12" md="6" class="d-flex flex-column justify-center">
        <v-card
          color="white"
          class="game-card"
          width="200"
          height="200"
          outlined
        >
          <div class="d-flex align-center div-text w-100 justify-space-between">
            <v-img
              class="mx-2"
              src="../assets/100T_logo.png"
              width="80"
            ></v-img>
            <div class="line"></div>
            <v-img class="mx-2" src="../assets/DW_Logo.png" width="80"></v-img>
          </div>
        </v-card>
        <v-card color="white" class="d-flex justify-center">
          <div class="games-history text-h4">Derniers matchs</div>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card class="bet-details" color="white">
          <v-card-title class="card-title">Paris à venir</v-card-title>
          <div class="d-flex justify-center align-center">
            <v-col class="d-flex justify-center"
              ><div class="text-h4">Winner</div></v-col
            >
            <v-col><div class="text-h5">2000 B</div></v-col>
            <v-col
              ><v-img src="../assets/100T_logo.png" width="60"></v-img
            ></v-col>
          </div>
          <div class="d-flex justify-center align-center">
            <v-col><div class="text-h4">Winner</div></v-col>
            <v-col><div class="text-h5">2000 B</div></v-col>
            <v-col
              ><v-img src="../assets/DW_Logo.png" width="60"></v-img
            ></v-col>
          </div>
          <div class="d-flex justify-center align-center">
            <v-col><div class="text-h4">First Blood</div></v-col>
            <v-col><div class="text-h5">2000 B</div></v-col>
            <v-col
              ><v-col
                ><v-img src="../assets/100T_logo.png" width="60"></v-img></v-col
            ></v-col>
          </div>
          <div class="d-flex justify-center align-center">
            <v-col><div class="text-h4">First Turret</div></v-col>
            <v-col><div class="text-h5">2000 B</div></v-col>
            <v-col
              ><v-col
                ><v-img src="../assets/DW_Logo.png" width="60"></v-img></v-col
            ></v-col>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.card-title {
  background: linear-gradient(
    0.25turn,
    var(--v-darkPurple-base),
    var(--v-info-base),
    var(--v-secondary-base)
  );
  text-transform: none;
}

.line {
  height: 13rem;
  border: 1px solid;
}

.div-text {
  transform: rotate(-45deg);
  transform-origin: center;
}

.game-card {
  transform: rotate(45deg);
  transform-origin: center;
  transition: 0.4s ease-in-out;
  color: grey;
}

.games-history {
  color: black;
}

.amount {
  color: white;
}

.bet-details > div {
  color: black;
}
</style>
