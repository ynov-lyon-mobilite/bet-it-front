<template>
  <span class="match-list">
    <video class="vh-100 video-paris" autoplay loop playsinline muted>
      <source src="../../assets/landingPage/paris.mp4" type="video/mp4" />
    </video>
    <div class="tournament">
      <h1>LEC 2022</h1>
      <p>10/01/2022 – 09/08/2022</p>
    </div>
    <v-row class="matches-container">
      <div class="d-flex flex-wrap flex-row justify-center div-match pa-10">
        <v-card
          v-for="match in matches"
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
                :src="match.team1.logo"
                width="55"
                height="55"
                class="mx-auto img-team"
              ></v-img>
              <p class="teamname">
                {{ match.team1.name }}
              </p>
              <v-btn
                class="cotes"
                @click.stop="addToCard(match.team1, match.team2)"
              >
                {{ match.team1.cote }}
              </v-btn>
            </div>
            <div class="line"></div>
            <div class="col-6 equipe text-center">
              <v-img
                contain
                :src="match.team2.logo"
                width="55"
                height="55"
                class="mx-auto image-equipe"
              ></v-img>
              <p class="teamname">
                {{ match.team2.name }}
              </p>
              <v-btn
                class="cotes"
                @click.stop="addToCard(match.team2, match.team1)"
              >
                {{ match.team2.cote }}
              </v-btn>
              <!-- <v-input class="bet-montant"></v-input>  -->
            </div>
          </div>
        </v-card>
      </div>
    </v-row>

    <div class="tournament">
      <h1>Worlds 2022</h1>
      <p>10/10/2022 – 07/11/2022</p>
    </div>
    <v-row class="matches-container">
      <div class="d-flex flex-wrap flex-row justify-center div-match pa-10">
        <v-card
          v-for="match in matches"
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
              <img
                :src="match.team1.logo"
                @error="setImagePlaceholder"
                class="mx-auto"
              />
              <p class="teamname">
                {{ match.team1.name }}
              </p>
              <v-btn
                class="cotes"
                @click.stop="addToCard(match.team1, match.team2)"
              >
                {{ match.team1.cote }}
              </v-btn>
            </div>
            <div class="line"></div>
            <div class="col-6 equipe text-center">
              <img
                :src="match.team2.logo"
                @error="setImagePlaceholder"
                class="mx-auto"
              />
              <p class="teamname">
                {{ match.team2.name }}
              </p>
              <v-btn
                class="cotes"
                @click.stop="addToCard(match.team2, match.team1)"
              >
                {{ match.team2.cote }}
              </v-btn>
              <!-- <v-input class="bet-montant"></v-input>  -->
            </div>
          </div>
        </v-card>
      </div>
    </v-row>
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
import matches from "../../assets/fixtures/matches";
import { teamLogoPlaceholder } from "@/assets/placeholder";

export default {
  name: "MatchList",
  data: () => ({
    matches,
    teamLogoPlaceholder,
  }),
  methods: {
    setImagePlaceholder(event) {
      event.target.src = teamLogoPlaceholder;
    },
    addToCard(team1, team2) {
      this.$store.dispatch({
        type: "addToCart",
        bet: { team1, team2, amount: 0 },
      });
    },
    goToBetDetails(matchId) {
      this.$router.push({ name: "Bet", params: { id: matchId } });
    },
  },
};
</script>
