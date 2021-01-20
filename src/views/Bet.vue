<template>
  <v-container>
    <div class="d-flex justify-end align-center">
      <span class="amount text-h3">{{ betties }}</span>
      <v-img class="mx-3" max-width="100" src="../assets/betties.png"></v-img>
    </div>
    <v-row class="mt-12 justify-center">
      <v-col cols="12" md="6" class="d-flex flex-column align-center">
        <v-card
          color="white"
          class="game-card mt-10"
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
        <v-card
          color="white"
          class="games-history d-flex flex-column align-center mt-12"
        >
          <div class="text-h3 text-center my-3">Derniers matchs</div>
          <div class="d-flex justify-center flex-wrap">
            <GameHistory v-for="(team, idx) in teams" :key="idx" :team="team" />
          </div>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card class="bet-types" color="white">
          <v-card-title class="card-title text-h4">Paris à venir</v-card-title>
          <div class="pa-2">
            <BetType v-for="(bet, idx) in bets" :key="idx" :bet="bet" />
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import BetType from "@/components/Bet/BetType";
import GameHistory from "@/components/Bet/GameHistory";

const teams = [
  {
    name: "100T",
    logo: require("../assets/100T_logo.png"),
    history: [
      { result: "W" },
      { result: "W" },
      { result: "L" },
      { result: "W" },
      { result: "L" },
    ],
  },
  {
    name: "DW",
    logo: require("../assets/DW_Logo.png"),
    history: [
      { result: "W" },
      { result: "W" },
      { result: "L" },
      { result: "W" },
      { result: "L" },
    ],
  },
];

const game = {
  id: 0,
  team1: teams[0],
  team2: teams[1],
  gameNumber: 1,
  league: "LCS",
};

export default {
  components: {
    BetType,
    GameHistory,
  },
  data: () => ({
    teams,
    bets: [
      {
        id: "0-100T-W",
        type: "Winner",
        team: teams[0],
        odd: 1.1,
        game,
      },
      {
        id: "0-DW-W",
        type: "Winner",
        team: teams[1],
        odd: 2,
        game,
      },
      {
        id: "0-100T-FB",
        type: "First Blood",
        team: teams[0],
        odd: 1.1,
        game,
      },
      {
        id: "0-DW-FB",
        type: "First Blood",
        team: teams[1],
        odd: 2,
        game,
      },
      {
        id: "0-100T-FT",
        type: "First Turret",
        team: teams[0],
        odd: 1.1,
        game,
      },
      {
        id: "0-DW-FT",
        type: "First Turret",
        team: teams[1],
        odd: 2,
        game,
      },
    ],
  }),
  computed: {
    betties() {
      return this.$store.state.betties;
    },
  },
};
</script>

<style lang="scss" scoped>
.bet-types,
.games-history {
  background: #303030 !important;
}

.games-history {
  width: 1000px;
  min-height: 250px;
}

.card-title,
.bet-btn {
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
</style>
