<template>
  <span>
    <v-row class="matches-container">
      <div class="d-flex flex-wrap flex-row justify-center div-match pa-10">
        <v-card
          v-for="match in matches"
          v-bind:key="match"
          class="ma-3 d-flex justify-center"
          color="white"
          col="2"
          width="150"
          height="150"
          :to="{ name: 'Bet', params: { id: match.id } }"
        >
          <div class="d-flex align-center div-text justify-space-between">
            <div class="col-6 text-center">
              <v-img :src="match.team1.logo" width="55" class=""></v-img>
              <p class="content">
                {{ match.team1.cote }}
              </p>
            </div>
            <div class="line"></div>
            <div class="col-6 text-center">
              <v-img :src="match.team2.logo" width="55" class=""></v-img>
              <p class="content">
                {{ match.team2.cote }}
              </p>
            </div>
          </div>
        </v-card>
      </div>
    </v-row>
  </span>
</template>


<style lang="scss" scoped>

.matches-container {
  padding-left: 100px;
  //padding-top: 150px;

  #title {
    transform: rotate(0deg);
    font-size: 30px;
  }
  .div-match {
    transform: rotate(45deg);
    transform-origin: right;
    margin-top: 35%;
    width: 75%;
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

<script>
export default {
  name: "MatchList",
  computed: {
    betties() {
      return this.$store.state.betties;
    }
  },
  data: () => ({
    matches: [
      {
        team1: {
          logo:
            "https://am-a.akamaihd.net/image/?resize=70:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2FSchalke04_FullColor.png",
          cote: 1.8,
          id: 1,
          name: "Schalke 04"
        },
        team2: {
          logo:
            "https://upload.wikimedia.org/wikipedia/en/thumb/a/af/Rogue_logo.svg/220px-Rogue_logo.svg.png",
          cote: 2,
          id: 2,
          name: "Rogue"
        },
        id: 26
      },
      {
        team1: {
          logo:
            "https://am-a.akamaihd.net/image/?resize=70:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1592591419157_MisfitsMSF-01-FullonDark.png",
          cote: 4,
          id: 3,
          name: "Misfits Gaming"
        },
        team2: {
          logo:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Excel_Esports_logo.png/220px-Excel_Esports_logo.png",
          cote: 2,
          id: 4,
          name: "Excel Esport"
        },
        id: 27
      },
      {
        team1: {
          logo:
            "https://upload.wikimedia.org/wikipedia/commons/9/92/Logo_Team_Vitality_2020.png",
          cote: 1.8,
          id: 5,
          name: "Team Vitality"
        },
        team2: {
          logo:
            "https://am-a.akamaihd.net/image/?resize=70:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2FG2_FullColor2.png",
          cote: 2,
          id: 6,
          name: "G2 Esports"
        },
        id: 28
      },
      {
        team1: {
          logo:
            "https://am-a.akamaihd.net/image/?resize=70:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1592591395339_MadLionsMAD-01-FullonDark.png",
          cote: 4,
          id: 7,
          name: "MAD Lions"
        },
        team2: {
          logo:
            "https://upload.wikimedia.org/wikipedia/en/thumb/4/4d/SK_Gaming_logo.svg/220px-SK_Gaming_logo.svg.png",
          cote: 2,
          id: 8,
          name: "SK Gaming"
        },
        id: 29
      },
      {
        team1: {
          logo:
            "https://am-a.akamaihd.net/image/?resize=70:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1592591295307_FnaticFNC-01-FullonDark.png",
          cote: 4,
          id: 9,
          name: "Fnatic"
        },
        team2: {
          logo:
            "https://am-a.akamaihd.net/image/?resize=70:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2FAstralis_FullColor.png",
          cote: 2,
          id: 10,
          name: "Astralis"
        },
        id: 30
      },
      {
        team1: {
          logo:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Excel_Esports_logo.png/220px-Excel_Esports_logo.png",
          cote: 1.8,
          id: 4,
          name: "Excel Esport"
        },
        team2: {
          logo:
            "https://upload.wikimedia.org/wikipedia/en/thumb/4/4d/SK_Gaming_logo.svg/220px-SK_Gaming_logo.svg.png",
          cote: 2,
          id: 8,
          name: "SK Gaming"
        },
        id: 31
      },
      {
        team1: {
          logo:
            "https://am-a.akamaihd.net/image/?resize=70:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2FSchalke04_FullColor.png",
          cote: 4,
          id: 1,
          name: "Schalke 04"
        },
        team2: {
          logo:
            "https://am-a.akamaihd.net/image/?resize=70:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1592591419157_MisfitsMSF-01-FullonDark.png",
          cote: 2,
          id: 3,
          name: "Misfits Gaming"
        },
        id: 32
      },
      {
        team1: {
          logo:
            "https://upload.wikimedia.org/wikipedia/commons/9/92/Logo_Team_Vitality_2020.png",
          cote: 4,
          id: 5,
          name: "Team Vitality"
        },
        team2: {
          logo:
            "https://am-a.akamaihd.net/image/?resize=70:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1592591395339_MadLionsMAD-01-FullonDark.png",
          cote: 2,
          id: 7,
          name: "MAD Lions"
        },
        id: 33
      },
      {
        team1: {
          logo:
            "https://upload.wikimedia.org/wikipedia/en/thumb/a/af/Rogue_logo.svg/220px-Rogue_logo.svg.png",
          cote: 1.8,
          id: 2,
          name: "Rogue"
        },
        team2: {
          logo:
            "https://am-a.akamaihd.net/image/?resize=70:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2FAstralis_FullColor.png",
          cote: 2,
          id: 10,
          name: "Astralis"
        },
        id: 34
      },
      {
        team1: {
          logo:
            "https://am-a.akamaihd.net/image/?resize=70:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2FG2_FullColor2.png",
          cote: 4,
          id: 6,
          name: "G2 Esports"
        },
        team2: {
          logo:
            "https://am-a.akamaihd.net/image/?resize=70:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1592591295307_FnaticFNC-01-FullonDark.png",
          cote: 2,
          id: 9,
          name: "Fnatic"
        },
        id: 35
      }
    ]
  })
};
</script>
