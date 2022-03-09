<template>
  <v-container fluid class="my-5">
    <div class="header d-flex align-center justify-center my-4">
      <div
        v-if="event.team1"
        class="d-flex flex-column flex-md-row align-center justify-center"
      >
        <img
          class="mx-2 team-logo"
          :src="event.team1.logo"
          @error="setImagePlaceholder"
        />
        <div class="text-h5">{{ event.team1.name }}</div>
      </div>
      <div class="line ma-4"></div>
      <div
        v-if="event.team2"
        class="d-flex flex-column-reverse flex-md-row align-center justify-center"
      >
        <div class="text-h5">{{ event.team2.name }}</div>
        <img
          class="mx-2 team-logo"
          :src="event.team2.logo"
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

export default {
  components: {
    BetType
  },
  data: () => ({
    bets: [],
    teamLogoPlaceholder
  }),
  computed: {
    event() {
      return this.$store.state.event;
    },
    getuser() {
      return this.$store.state.user;
    }
  },
  methods: {
    setImagePlaceholder(event) {
      event.target.src = teamLogoPlaceholder;
    }
  },

  mounted: async function() {
    this.$store.dispatch("getEventId", this.$route.params.id);

    this.bets = [
      {
        id: "0-" + this.event.team1.name + "vs" + this.event.team2.name + "'-W",
        type: "Vainqueur",
        odd: 1.1,
        teamA: {
          ...this.event.team1,
          odd: 2.5
        },
        teamB: {
          ...this.event.team2,
          odd: 1.1
        },
        game: {
          id: this.event.id,
          team1: this.event.team1,
          team2: this.event.team2,
          gameNumber: 1,
          league: "LEC"
        }
      },
      {
        id: "0-" + this.event.team1.name + "vs" + this.event.team2.name + "-FB",
        type: "First Blood",
        teamA: {
          ...this.event.team1,
          odd: 2.5
        },
        teamB: {
          ...this.event.team2,
          odd: 1.1
        },
        game: {
          id: this.event.id,
          team1: this.event.team1,
          team2: this.event.team2,
          gameNumber: 1,
          league: "LEC"
        }
      },
      {
        id: "0-" + this.event.team1.name + "vs" + this.event.team2.name + "-FT",
        type: "First Turret",
        teamA: {
          ...this.event.team1,
          odd: 2.5
        },
        teamB: {
          ...this.event.team2,
          odd: 1.1
        },
        game: {
          id: this.event.id,
          team1: this.event.team1,
          team2: this.event.team2,
          gameNumber: 1,
          league: "LEC"
        }
      }
    ];
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
