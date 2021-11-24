<template>
  <span>
     <video class="vh-100 video-paris" autoplay loop playsinline muted>
<!--      <source src="../assets/landingPage/video.webm" type="video/webm" />-->
      <source src="../../assets/landingPage/paris.mp4" type="video/mp4" />
    </video>
   
    <div class="tournament">
      <h1>
        LEC 2021
      </h1>
      <p>21/04 | 06/05</p>
    </div>
    <v-row class="matches-container">
      <div class="d-flex flex-wrap flex-row justify-center div-match pa-10">
        <v-card
          v-for="match in matches"
          v-bind:key="match"
          class="ma-3 card-matches"
          width="220"
          :to="{ name: 'Bet', params: { id: match.id } }"
        >
          <div class="d-flex align-center div-text team-match justify-space-between">
            <div class="col-6 equipe text-center">
              <v-img contain :src="match.team1.logo" width="55" height="55" class="mx-auto img-team"></v-img>
               <p class="teamname">
                {{ match.team1.name }}
              </p>
              <v-btn class="cotes">
                {{ match.team1.cote }}
              </v-btn>
            </div>
            <div class="line"></div>
            <div class="col-6 equipe text-center">
              <v-img contain :src="match.team2.logo" width="55" height="55" class="mx-auto image-equipe"></v-img>
              <p class="teamname">
                {{ match.team2.name }}
              </p>
              <v-btn class="cotes">
                {{ match.team2.cote }}
              </v-btn>
            </div>  
          </div>
        </v-card>
      </div>
    </v-row>
  </span>
</template>


<style lang="scss" scoped>

.card-matches{
  background-color: whitesmoke;
}

.team-match{
  height: 170px;
  div.equipe{
    height: 100%;
    display: flex;
    flex-direction: column;
    p.teamname{
      color: black;
      font-weight: bold;
      font-size: 17px;
    }
    button.cotes{
      color: white;
      font-size: 16px;
      transition: 0.4 ease-in-out;
    }

    button.cotes:hover{
       background: linear-gradient(50deg,
      var(--v-secondary-base) 0%,
      var(--v-primary-base) 100%
    );
        transition: 0.4s ease-in-out;
    
    }
  }
}

.tournament{
  z-index: 1;
  position: relative;
}

video{
  object-fit: cover;
  position: absolute;
  opacity: .5;
  z-index: 0;
  top: 0;
  left: 0;
  width: 100%;
}

.matches-container {
      justify-content: center;



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
    // color: black;
    font-weight: bold;


  }
}
</style>

<script>
export default {
  name: "MatchList",
  data: () => ({
    matches: [
      {
        team1: {
          logo:
            "https://am-a.akamaihd.net/image/?resize=70:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2FSchalke04_FullColor.png",
          cote: 1.8,
          id: 1,
          name: "SO4"
        },
        team2: {
          logo:
            "https://upload.wikimedia.org/wikipedia/en/thumb/a/af/Rogue_logo.svg/220px-Rogue_logo.svg.png",
          cote: 2,
          id: 2,
          name: "RGE"
        },
        id: 26
      },
      {
        team1: {
          logo:
            "https://am-a.akamaihd.net/image/?resize=70:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1592591419157_MisfitsMSF-01-FullonDark.png",
          cote: 4,
          id: 3,
          name: "MSF"
        },
        team2: {
          logo:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Excel_Esports_logo.png/220px-Excel_Esports_logo.png",
          cote: 2,
          id: 4,
          name: "XL"
        },
        id: 27
      },
      {
        team1: {
          logo:
            "https://upload.wikimedia.org/wikipedia/commons/9/92/Logo_Team_Vitality_2020.png",
          cote: 1.8,
          id: 5,
          name: "VIT"
        },
        team2: {
          logo:
            "https://am-a.akamaihd.net/image/?resize=70:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2FG2_FullColor2.png",
          cote: 2,
          id: 6,
          name: "G2"
        },
        id: 28
      },
      {
        team1: {
          logo:
            "https://am-a.akamaihd.net/image/?resize=70:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1592591395339_MadLionsMAD-01-FullonDark.png",
          cote: 4,
          id: 7,
          name: "MAD"
        },
        team2: {
          logo:
            "https://upload.wikimedia.org/wikipedia/en/thumb/4/4d/SK_Gaming_logo.svg/220px-SK_Gaming_logo.svg.png",
          cote: 2,
          id: 8,
          name: "SK"
        },
        id: 29
      },
      {
        team1: {
          logo:
            "https://am-a.akamaihd.net/image/?resize=70:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1592591295307_FnaticFNC-01-FullonDark.png",
          cote: 4,
          id: 9,
          name: "FNC"
        },
        team2: {
          logo:
            "https://am-a.akamaihd.net/image/?resize=70:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2FAstralis_FullColor.png",
          cote: 2,
          id: 10,
          name: "AST"
        },
        id: 30
      },
      {
        team1: {
          logo:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Excel_Esports_logo.png/220px-Excel_Esports_logo.png",
          cote: 1.8,
          id: 4,
          name: "XL"
        },
        team2: {
          logo:
            "https://upload.wikimedia.org/wikipedia/en/thumb/4/4d/SK_Gaming_logo.svg/220px-SK_Gaming_logo.svg.png",
          cote: 2,
          id: 8,
          name: "SK "
        },
        id: 31
      },
      {
        team1: {
          logo:
            "https://am-a.akamaihd.net/image/?resize=70:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2FSchalke04_FullColor.png",
          cote: 4,
          id: 1,
          name: "S04"
        },
        team2: {
          logo:
            "https://am-a.akamaihd.net/image/?resize=70:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1592591419157_MisfitsMSF-01-FullonDark.png",
          cote: 2,
          id: 3,
          name: "MSF"
        },
        id: 32
      },
      {
        team1: {
          logo:
            "https://upload.wikimedia.org/wikipedia/commons/9/92/Logo_Team_Vitality_2020.png",
          cote: 4,
          id: 5,
          name: "VIT"
        },
        team2: {
          logo:
            "https://am-a.akamaihd.net/image/?resize=70:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1592591395339_MadLionsMAD-01-FullonDark.png",
          cote: 2,
          id: 7,
          name: "MAD"
        },
        id: 33
      },
      {
        team1: {
          logo:
            "https://upload.wikimedia.org/wikipedia/en/thumb/a/af/Rogue_logo.svg/220px-Rogue_logo.svg.png",
          cote: 1.8,
          id: 2,
          name: "RGE"
        },
        team2: {
          logo:
            "https://am-a.akamaihd.net/image/?resize=70:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2FAstralis_FullColor.png",
          cote: 2,
          id: 10,
          name: "AST"
        },
        id: 34
      },
      {
        team1: {
          logo:
            "https://am-a.akamaihd.net/image/?resize=70:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2FG2_FullColor2.png",
          cote: 4,
          id: 6,
          name: "G2"
        },
        team2: {
          logo:
            "https://am-a.akamaihd.net/image/?resize=70:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1592591295307_FnaticFNC-01-FullonDark.png",
          cote: 2,
          id: 9,
          name: "FNC"
        },
        id: 35
      }
    ]
  })
};

// document.querySelector('.img-team div.v-image__image').style.backgroundPosition('contain');
</script>
