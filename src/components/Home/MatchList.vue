<template>
  <span class="match-list">
    <video class="vh-100 video-paris" autoplay loop playsinline muted>
      <source src="../../assets/landingPage/paris.mp4" type="video/mp4" />
    </video>
    <div v-if="loading">
      <v-progress-circular
        :size="70"
        :width="7"
        color="purple"
        indeterminate
      ></v-progress-circular>
    </div>
    <div v-else>
      <v-row class="tournament justify-start">
        <h1>Prochains matchs</h1>
      </v-row>
      <v-row class="matches-container justify-start">
        <div v-for="date in Object.keys(matchesGroupedByDate)" :key="date">
          <h2>{{ new Date(date).toLocaleDateString("fr") }}</h2>
          <div class="d-flex flex-wrap flex-row div-match pa-10">
            <v-card
              v-for="match in matchesGroupedByDate[date]"
              :key="match.id"
              class="ma-3 card-matches"
              width="220"
              @click="goToBetDetails(match.id)"
            >
              <div
                class="
              d-flex
              align-center
              div-text
              team-match
              justify-space-between
            "
              >
                <div class="col-6 equipe text-center">
                  <v-img
                    contain
                    :src="match.team_1.logo"
                    width="55"
                    height="55"
                    class="mx-auto img-team"
                  ></v-img>
                  <p class="teamname">
                    {{ match.team_1.code }}
                  </p>
                  <v-btn
                    class="cotes"
                    @click.stop="
                      addToCart(
                        match.team_1,
                        match.team_2,
                        match.odd_team_1,
                        match.odd_team_2
                      )
                    "
                  >
                    {{ match.odd_team_1 }}
                  </v-btn>
                </div>
                <div class="line"></div>
                <div class="col-6 equipe text-center">
                  <v-img
                    contain
                    :src="match.team_2.logo"
                    width="55"
                    height="55"
                    class="mx-auto image-equipe"
                  ></v-img>
                  <p class="teamname">
                    {{ match.team_2.code }}
                  </p>
                  <v-btn
                    class="cotes"
                    @click.stop="
                      addToCart(
                        match.team_2,
                        match.team_1,
                        match.odd_team_2,
                        match.odd_team_1
                      )
                    "
                  >
                    {{ match.odd_team_2 }}
                  </v-btn>
                </div>
              </div>
            </v-card>
          </div>
        </div>
      </v-row>
    </div>
  </span>
</template>

<style lang="scss" scoped>
img {
  width: 55px;
  height: 55px;
}

.card-matches {
  background-color: whitesmoke;
}

.video-paris {
  object-fit: cover;
  position: fixed;
  opacity: 0.5;
  z-index: 0;
  top: 0;
  left: 0;
  width: 100%;
}

.team-match {
  height: 170px;
  div.equipe {
    height: 100%;
    display: flex;
    flex-direction: column;
    p.teamname {
      color: black;
      font-weight: bold;
      font-size: 17px;
    }
    button.cotes {
      color: white;
      font-size: 16px;
      transition: 0.4 ease-in-out;
    }

    button.cotes:hover {
      background: linear-gradient(
        50deg,
        var(--v-secondary-base) 0%,
        var(--v-primary-base) 100%
      );
      transition: 0.4s ease-in-out;
    }
  }
}

.tournament {
  z-index: 1;
  position: relative;
}

.matches-container {
  justify-content: center;
  //Adjust container width
  // width: 80%;

  #title {
    transform: rotate(0deg);
    font-size: 30px;
  }
  .line {
    height: 4rem;
    border-right: 1px solid;
  }

  .div-text {
    transform-origin: center;
  }

  .v-card {
    transition: 0.4s ease-in-out;
    color: grey;
  }

  .content {
    font-weight: bold;
  }
}
</style>

<script>
// import matches from "../../assets/fixtures/matches";
import { teamLogoPlaceholder } from "@/assets/placeholder";
import axios from "axios";

export default {
  name: "MatchList",
  data: () => ({
    teamLogoPlaceholder,
    upcomingMatches: null,
    loading: false
  }),
  mounted() {
    this.loading = true;
    axios
      .get(`http://bet-it.net/bet_it/public/api/upcoming/matches`)
      .then(response => {
        // JSON responses are automatically parsed.
        this.upcomingMatches = response.data.upcoming_matches;
        console.log(this.upcomingMatches);
        const matchedGroupesByDate = response.data.upcoming_matches.reduce(
          (acc, match) => {
            const matchDate = match.match_date.date.split(" ")[0];
            return acc[matchDate]
              ? { ...acc, [matchDate]: [...acc[matchDate], match] }
              : { ...acc, [matchDate]: [match] };
          },
          {}
        );
        console.log("matchedGroupesByDate", matchedGroupesByDate);
        this.loading = false;
      })
      .catch(e => {
        this.errors.push(e);
        this.loading = false;
      });
  },
  computed: {
    matchesGroupedByDate() {
      return this.upcomingMatches.reduce((acc, match) => {
        const matchDate = match.match_date.date.split(" ")[0];
        return acc[matchDate]
          ? { ...acc, [matchDate]: [...acc[matchDate], match] }
          : { ...acc, [matchDate]: [match] };
      }, {});
    }
  },
  methods: {
    setImagePlaceholder(event) {
      event.target.src = teamLogoPlaceholder;
    },
    addToCart(team1, team2, oddTeam1, oddTeam2) {
      this.$store.dispatch({
        type: "addToCart",
        bet: {
          team1: { ...team1, odd: oddTeam1 },
          team2: { ...team2, odd: oddTeam2 },
          amount: 0
        }
      });
    },
    goToBetDetails(matchId) {
      this.$router.push({ name: "Bet", params: { id: matchId } });
    }
  }
};
</script>
