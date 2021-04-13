<template>
  <v-card elevation="10" class="pa-5" width="900">
    <center>
      <h1>Lan BDE Ynov</h1>
    </center>
    <v-row class="d-flex justify-space-around ma-6">
      <p>Type de tournois</p>
      <v-chip
        :style="
          isClickedRound
            ? {
                background:
                  ' linear-gradient(90deg, var(--v-darkPurple-base), var(--v-info-base), var(--v-secondary-base) )',
              }
            : null
        "
        v-on:click="ChangeText('Round')"
        >Round</v-chip
      >
      <v-chip
        :style="
          isClickedSimple
            ? {
                background:
                  ' linear-gradient(90deg, var(--v-darkPurple-base), var(--v-info-base), var(--v-secondary-base) )',
              }
            : null
        "
        v-on:click="ChangeText('simple')"
        >Eliminiation simple</v-chip
      >
      <v-chip
        :style="
          isClickedDouble
            ? {
                background:
                  ' linear-gradient(90deg, var(--v-darkPurple-base), var(--v-info-base), var(--v-secondary-base) )',
              }
            : null
        "
        v-on:click="ChangeText('double')"
        >Eliminiation double</v-chip
      >
    </v-row>
    <center>
      <p>{{ text }}</p>
    </center>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      text: "",
      isClickedRound: false,
      isClickedSimple: false,
      isClickedDouble: false,

    };
  },
  methods: {
    ChangeText: function (chip) {
      if (chip == "Round") {
        this.isClickedRound = true;
        this.isClickedSimple = false;
        this.isClickedDouble = false;
        this.text = "Les joueurs s’affrontent par round";
      } else if (chip == "simple") {
        this.isClickedRound = false;
        this.isClickedSimple = true;
        this.isClickedDouble = false;
        this.text = "Une équipe est éliminé de la première place si elle perd";
      } else if (chip == "double") {
        this.isClickedRound = false;
        this.isClickedSimple = false;
        this.isClickedDouble = true;
        this.text = "Une équipe est éliminé lorsqu'elle a perdu deux matchs";
      }
    },
  },
};
</script>