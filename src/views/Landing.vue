<template>
  <v-row class="d-flex justify-center ma-0 pa-0 vh-100">
    <video class="vh-100 video-fantasy" autoplay loop playsinline muted>
<!--      <source src="../assets/landingPage/video.webm" type="video/webm" />-->
      <source src="../assets/landingPage/fantasy.mp4" type="video/mp4" />
    </video>
    <video class="vh-100 video-paris" autoplay loop playsinline muted>
<!--      <source src="../assets/landingPage/video.webm" type="video/webm" />-->
      <source src="../assets/landingPage/paris.mp4" type="video/mp4" />
    </video>
    <div class="absolute-card">
      <v-card
        rounded
        outlined
        class="pa-5 card-title-rotate"
        width="250"
        height="250"
      >
        <div class="align-center flex-column justify-center d-flex mt-2">
          <h1 class="pa-2 text-center">
            Bet-It parier <br />
            e-sportif !
          </h1>
          <v-btn class="mx-2" fab color="primary" v-on:click="$router.push('/home')">
            <v-icon>
              fas fa-door-open
            </v-icon>
          </v-btn>
        </div>
      </v-card>
    </div>

    <v-col
      lg="6"
      md="12"
      sm="12"
      xs="12"
      class="ma-0 pa-0 d-flex align-center justify-center paris"
    >
      <div class="d-flex justify-center flex-column align-center">
        <v-btn x-large elevation="4" rounded class="font-title" color="primary" v-on:click="$router.push('/home')">
          <h2>Paris e-sportifs</h2>
          <v-icon class="pl-2">
            fas fa-trophy
          </v-icon>
        </v-btn>
        <p class="pa-3 under-title-font">
          Pariez sur l'équipe que vous soutenez !
        </p>
      </div>
    </v-col>

    <v-col
      lg="6"
      md="12"
      sm="12"
      xs="12"
      class="ma-0 pa-0 d-flex align-center justify-center fantasy" style="background: transparent"
    >
      <div class="d-flex justify-center flex-column align-center">
        <v-btn x-large elevation="4" rounded class="font-title" color="primary" v-on:click="$router.push('/home')">
          <h2>Fantasy League</h2>
          <v-icon class="pl-2">
            fas fa-users
          </v-icon>
        </v-btn>
        <p class="pa-3 under-title-font">
          Composez votre équipe et affrontez d'autres joueurs !
        </p>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Landing",
  mounted() {
    // setTimeout(() => {
    //   this.$router.push({ path: "/home" });
    // }, 4000);
  }
};
</script>

<style scoped lang="scss">

video{
  object-fit: cover;
  position: absolute;
  width: 50%;
  top: 0;
}
.video-fantasy {
  right: 0;
}
.video-paris{
  left: 0;
}

.fantasy{
  z-index: 1;
  background-color: transparent;
  border-width: 2px 0 2px 2px;
  border-style: solid;
  //-webkit-border-image:
  //    -webkit-gradient(linear, 100% 0, 0 0, from(var(--v-darkPurple-base)), to(var(--v-secondary-base))) 1 100%;
  //-webkit-border-image:
  //    -webkit-linear-gradient(bottom, var(--v-darkPurple-base), var(--v-secondary-base)) 1 100%;
  //-moz-border-image:
  //    -moz-linear-gradient(bottom, var(--v-darkPurple-base), var(--v-secondary-base)) 1 100%;
  //-o-border-image:
  //    -o-linear-gradient(bottom, var(--v-darkPurple-base), var(--v-secondary-base)) 1 100%;
  border-image:
      linear-gradient(to bottom, var(--v-darkPurple-base), var(--v-secondary-base)) 1 100%;
}

.paris{
  z-index: 1;
  border-width: 2px 2px 2px 0;
  border-style: solid;
  //-webkit-border-image:
  //    -webkit-gradient(linear, 0 0, 100% 0, from(var(--v-darkPurple-base)), to(var(--v-secondary-base))) 1 100%;
  //-webkit-border-image:
  //    -webkit-linear-gradient(bottom, var(--v-darkPurple-base), var(--v-secondary-base)) 1 100%;
  //-moz-border-image:
  //    -moz-linear-gradient(bottom, var(--v-darkPurple-base), var(--v-secondary-base)) 1 100%;
  //-o-border-image:
  //    -o-linear-gradient(bottom, var(--v-darkPurple-base), var(--v-secondary-base)) 1 100%;
  border-image:
      linear-gradient(to bottom,var(--v-darkPurple-base), var(--v-secondary-base)) 1 100%;
}

.theme--dark.v-sheet--outlined {
  border-image: linear-gradient(
      90deg,
      var(--v-darkPurple-base),
      var(--v-info-base),
      var(--v-secondary-base)
    )
    100 / 3px;
}

.absolute-card {
  z-index: 2;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  .card-title-rotate {
    transform: rotate(45deg);
    transform-origin: center;
    div {
      transform: rotate(-45deg);
      transform-origin: center;
    }
  }
}
</style>
