<template>
  <v-container fluid class="my-5">
    <div v-if="event" class="header d-flex align-center justify-center my-4">
      <div
        v-if="event.team_1"
        class="d-flex flex-column flex-md-row align-center justify-center"
      >
        <img
          class="mx-2 team-logo"
          :src="event.team_1.logo"
          @error="setImagePlaceholder"
        />
        <div class="text-h5">{{ event.team_1.team_name }}</div>
      </div>
      <div class="line ma-4"></div>
      <div
        v-if="event.team_2"
        class="d-flex flex-column-reverse flex-md-row align-center justify-center"
      >
        <div class="text-h5">{{ event.team_2.team_name }}</div>
        <img
          class="mx-2 team-logo"
          :src="event.team_2.logo"
          @error="setImagePlaceholder"
        />
      </div>
    </div>
    <div class="d-flex flex-wrap">
      <BetType v-for="(bet, idx) in bets" :key="idx" :bet="bet" />
    </div>
  </v-container>
</template>

<script>
import BetType from "../components/Bet/BetType";
import { teamLogoPlaceholder } from "../assets/placeholder";
import axios from "axios";

export default {
  components: {
    BetType
  },
  data: () => ({
    bets: [],
    teamLogoPlaceholder,
    event: null
  }),
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  methods: {
    setImagePlaceholder(event) {
      event.target.src = teamLogoPlaceholder;
    }
  },

  mounted: async function() {
    axios
      .get(`http://bet-it.net/bet_it/public/api/match/${this.$route.params.id}`)
      .then(response => {
        this.event = response.data.match[0];
        this.bets = [
          {
            id: `${this.event.id}-W`,
            type: "Vainqueur",
            teamA: {
              ...this.event.team_1,
              odd: this.event.odd_team_1
            },
            teamB: {
              ...this.event.team_2,
              odd: this.event.odd_team_2
            }
          }
        ];
      })
      .catch(e => {
        this.errors.push(e);
      });
  }
};
</script>

<style lang="scss" scoped>
.header {
  background: #565656;
  color: black;
}
.bet-types,
.games-history {
  background: #303030 !important;
}

.bet-types-list {
  height: 560px;
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

.v-btn {
  background: linear-gradient(
    0.25turn,
    var(--v-darkPurple-base),
    var(--v-info-base),
    var(--v-secondary-base)
  );
}
.disabled {
  background: gray;
}

.team-logo {
  width: 80px;
}
</style>
