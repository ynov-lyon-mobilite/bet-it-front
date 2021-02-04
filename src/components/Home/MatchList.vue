<template>
  <span>
    <v-row id="title" class="flex-row justify-space-between pa-4">
      <div>
        <h1
          style="
            font-size: 40px;
            color: #fff;
            text-shadow: rgb(255, 255, 255) 0px 0px 5px, rgb(0 0 0) 0px 0px 10px,
              rgb(0, 0, 0) 0px 0px 20px, rgb(2, 2, 2) 0px 0px 40px,
              rgb(107, 108, 117) 0px 0px 67px, rgb(44, 51, 51) 0px 0px 90px,
              rgb(33, 37, 37) 0px 0px 100px, rgb(51, 56, 56) 0px 0px 150px;
          "
        >
          LEC 2021
        </h1>
        <p>22/01 | 06/02</p>
      </div>
      <div
        class="d-flex justify-end align-center"
        v-if="betties >= 1 && betties < 30"
      >
        <span class="amount text-h3 mr-5">{{ betties }}</span>
        <img style="width: 10vw" src="../../assets/tas.svg" alt="monnaie" />
      </div>
      <div
        class="d-flex justify-end align-center"
        v-else-if="betties >= 30 && betties < 60"
      >
        <span class="amount text-h3 mr-5">{{ betties }}</span>
        <img style="width: 15vw" src="../../assets/tasUp.svg" alt="monnaie" />
      </div>
      <div
        class="d-flex justify-end align-center"
        v-else-if="betties >= 60 && betties < 150"
      >
        <span class="amount text-h3 mr-5">{{ betties }}</span>
        <img style="width: 10vw" src="../../assets/bourse.svg" alt="monnaie" />
      </div>
      <div class="d-flex justify-end align-center" v-else-if="betties >= 150">
        <span class="amount text-h3 mr-5">{{ betties }}</span>
        <img style="width: 10vw" src="../../assets/coffre.svg" alt="monnaie" />
      </div>
    </v-row>
    <v-container class="vh-100 matches-container">
      <v-row
        class="flex-row justify-center"
        style="margin: 105px 0px -3vw 16vw"
      >
        <v-card
          v-for="match in bloc1"
          v-bind:key="match"
          color="white"
          cols="3"
          class="ma-3 d-flex justify-center"
          width="150"
          height="150"
          outlined
          :to="{ name: 'Bet', params: { id: match.id } }"
        >
          <div class="d-flex align-center div-text justify-space-between">
            <v-col>
              <v-img
                :src="match.team1.logo"
                width="55"
                class="ml-4 mt-6"
              ></v-img>
              <p
                style="
                  margin-left: 31px;
                  margin-top: 6px;
                  font-size: 20px;
                  margin-bottom: 10px;
                "
                class="content"
              >
                {{ match.team1.cote }}
              </p>
            </v-col>
            <div class="line"></div>
            <v-col>
              <v-img
                :src="match.team2.logo"
                width="55"
                class="mr-4 mt-7"
              ></v-img>
              <p
                style="margin-left: 14px; margin-top: 12px; font-size: 20px"
                class="content"
              >
                {{ match.team2.cote }}
              </p>
            </v-col>
          </div>
        </v-card>
      </v-row>
      <v-row class="flex-row justify-center mb-0">
        <v-card
          v-for="match in bloc2"
          v-bind:key="match"
          color="white"
          cols="3"
          class="ma-3 d-flex justify-center"
          width="150"
          height="150"
          outlined
          :to="{ name: 'Bet', params: { id: match.id } }"
        >
          <div class="d-flex align-center div-text justify-space-between">
            <v-col>
              <v-img
                :src="match.team1.logo"
                width="55"
                class="ml-4 mt-6"
              ></v-img>
              <p
                style="
                  margin-left: 32px;
                  margin-top: 6px;
                  font-size: 20px;
                  margin-bottom: 10px;
                "
                class="content"
              >
                {{ match.team1.cote }}
              </p>
            </v-col>
            <div class="line"></div>
            <v-col>
              <v-img
                :src="match.team2.logo"
                width="55"
                class="mr-4 mt-7"
              ></v-img>
              <p
                style="margin-left: 18px; margin-top: 12px; font-size: 20px"
                class="content"
              >
                {{ match.team2.cote }}
              </p>
            </v-col>
          </div>
        </v-card>
      </v-row>
      <v-row
        class="flex-row justify-start"
        style="
          width: 50vw;
          margin-bottom: 0;
          margin-bottom: 0px;
          margin-left: 7vw;
          margin-top: -20px;
        "
      >
        <v-card
          v-for="match in bloc3"
          v-bind:key="match"
          color="white"
          cols="3"
          class="ma-3 d-flex justify-center"
          width="150"
          height="150"
          outlined
          :to="{ name: 'Bet', params: { id: match.id } }"
        >
          <div class="d-flex align-center div-text justify-space-between">
            <v-col>
              <v-img
                :src="match.team1.logo"
                width="55"
                class="ml-4 mt-6"
              ></v-img>
              <p
                style="
                  margin-left: 32px;
                  margin-top: 6px;
                  font-size: 20px;
                  margin-bottom: 10px;
                "
                class="content"
              >
                {{ match.team1.cote }}
              </p>
            </v-col>
            <div class="line"></div>
            <v-col>
              <v-img
                :src="match.team2.logo"
                width="55"
                class="mr-4 mt-7"
              ></v-img>
              <p
                style="margin-left: 15px; margin-top: 12px; font-size: 20px"
                class="content"
              >
                {{ match.team2.cote }}
              </p>
            </v-col>
          </div>
        </v-card>
      </v-row>
      <v-row
        class="flex-row justify-start"
        style="width: 50%; margin-top: -3vw; margin-left: 5vw"
      >
        <v-card
          v-for="match in bloc4"
          v-bind:key="match"
          color="white"
          cols="3"
          class="ma-3 d-flex justify-center"
          width="150"
          height="150"
          outlined
          :to="{ name: 'Bet', params: { id: match.id } }"
        >
          <div class="d-flex align-center div-text justify-space-between">
            <v-col>
              <v-img
                :src="match.team1.logo"
                width="55"
                class="ml-4 mt-6"
              ></v-img>
              <p
                style="margin-left: 32px; margin-top: 6px; font-size: 20px"
                class="content"
              >
                {{ match.team1.cote }}
              </p>
            </v-col>
            <div class="line"></div>
            <v-col>
              <v-img
                :src="match.team2.logo"
                width="55"
                class="mr-4 mt-7"
              ></v-img>
              <p
                style="margin-left: 18px; margin-top: 12px; font-size: 20px"
                class="content"
              >
                {{ match.team2.cote }}
              </p>
            </v-col>
          </div>
        </v-card>
      </v-row>
    </v-container>
  </span>
</template>

<script>
export default {
  name: "MatchList",
  computed: {
    betties() {
      return this.$store.state.betties;
    },
  },
  data: () => ({
    bloc1: [
      {
        team1: {
          logo:
            "https://am-a.akamaihd.net/image/?resize=70:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2FSchalke04_FullColor.png",
          cote: 1.8,
          id: 1,
          name: "Schalke 04",
        },
        team2: {
          logo:
            "https://upload.wikimedia.org/wikipedia/en/thumb/a/af/Rogue_logo.svg/220px-Rogue_logo.svg.png",
          cote: 2,
          id: 2,
          name: "Rogue",
        },
        id: 26,
      },
      {
        team1: {
          logo:
            "https://am-a.akamaihd.net/image/?resize=70:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1592591419157_MisfitsMSF-01-FullonDark.png",
          cote: 4,
          id: 3,
          name: "Misfits Gaming",
        },
        team2: {
          logo:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Excel_Esports_logo.png/220px-Excel_Esports_logo.png",
          cote: 2,
          id: 4,
          name: "Excel Esport",
        },
        id: 27,
      },
    ],

    bloc2: [
      {
        team1: {
          logo:
            "https://upload.wikimedia.org/wikipedia/commons/9/92/Logo_Team_Vitality_2020.png",
          cote: 1.8,
          id: 5,
          name: "Team Vitality",
        },
        team2: {
          logo:
            "https://am-a.akamaihd.net/image/?resize=70:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2FG2_FullColor2.png",
          cote: 2,
          id: 6,
          name: "G2 Esports",
        },
        id: 28,
      },
      {
        team1: {
          logo:
            "https://am-a.akamaihd.net/image/?resize=70:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1592591395339_MadLionsMAD-01-FullonDark.png",
          cote: 4,
          id: 7,
          name: "MAD Lions",
        },
        team2: {
          logo:
            "https://upload.wikimedia.org/wikipedia/en/thumb/4/4d/SK_Gaming_logo.svg/220px-SK_Gaming_logo.svg.png",
          cote: 2,
          id: 8,
          name: "SK Gaming",
        },
        id: 29,
      },
      {
        team1: {
          logo:
            "https://am-a.akamaihd.net/image/?resize=70:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1592591295307_FnaticFNC-01-FullonDark.png",
          cote: 4,
          id: 9,
          name: "Fnatic",
        },
        team2: {
          logo:
            "https://am-a.akamaihd.net/image/?resize=70:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2FAstralis_FullColor.png",
          cote: 2,
          id: 10,
          name: "Astralis",
        },
        id: 30,
      },
    ],
    bloc3: [
      {
        team1: {
          logo:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Excel_Esports_logo.png/220px-Excel_Esports_logo.png",
          cote: 1.8,
          id: 4,
          name: "Excel Esport",
        },
        team2: {
          logo:
            "https://upload.wikimedia.org/wikipedia/en/thumb/4/4d/SK_Gaming_logo.svg/220px-SK_Gaming_logo.svg.png",
          cote: 2,
          id: 8,
          name: "SK Gaming",
        },
        id: 31,
      },

      {
        team1: {
          logo:
            "https://am-a.akamaihd.net/image/?resize=70:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2FSchalke04_FullColor.png",
          cote: 4,
          id: 1,
          name: "Schalke 04",
        },
        team2: {
          logo:
            "https://am-a.akamaihd.net/image/?resize=70:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1592591419157_MisfitsMSF-01-FullonDark.png",
          cote: 2,
          id: 3,
          name: "Misfits Gaming",
        },
        id: 32,
      },
      {
        team1: {
          logo:
            "https://upload.wikimedia.org/wikipedia/commons/9/92/Logo_Team_Vitality_2020.png",
          cote: 4,
          id: 5,
          name: "Team Vitality",
        },
        team2: {
          logo:
            "https://am-a.akamaihd.net/image/?resize=70:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1592591395339_MadLionsMAD-01-FullonDark.png",
          cote: 2,
          id: 7,
          name: "MAD Lions",
        },
        id: 33,
      },
    ],
    bloc4: [
      {
        team1: {
          logo:
            "https://upload.wikimedia.org/wikipedia/en/thumb/a/af/Rogue_logo.svg/220px-Rogue_logo.svg.png",
          cote: 1.8,
          id: 2,
          name: "Rogue",
        },
        team2: {
          logo:
            "https://am-a.akamaihd.net/image/?resize=70:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2FAstralis_FullColor.png",
          cote: 2,
          id: 10,
          name: "Astralis",
        },
        id: 34,
      },
      {
        team1: {
          logo:
            "https://am-a.akamaihd.net/image/?resize=70:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2FG2_FullColor2.png",
          cote: 4,
          id: 6,
          name: "G2 Esports",
        },
        team2: {
          logo:
            "https://am-a.akamaihd.net/image/?resize=70:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1592591295307_FnaticFNC-01-FullonDark.png",
          cote: 2,
          id: 9,
          name: "Fnatic",
        },
        id: 35,
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.matches-container {
  #title {
    transform: rotate(0deg);
    font-size: 30px;
  }
  .row {
    position: relative;
    top: 200px;
    transform: rotate(45deg);
    transform-origin: center;
    margin-bottom: 170px;
  }
  .line {
    height: 11rem;
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

  .content {
    color: black;
    font-weight: bold;

    .v-card:hover .content {
      color: white;
    }
  }
}
</style>
