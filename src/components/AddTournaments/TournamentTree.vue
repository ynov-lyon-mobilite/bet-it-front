<template>
  <div>
    <div class="d-flex flex-wrap justify-space-around mt-16">
      <div
        v-for="Match in Matchs"
        v-bind:key="Match"
        class="d-flex flex-wrap justify-space-around ma-5"
      >
        <v-card
          :style="
            Match.Teams1.Win
              ? {
                  background:
                    ' linear-gradient(90deg, var(--v-darkPurple-base), var(--v-info-base), var(--v-secondary-base) )',
                }
              : null
          "
          height="40"
          class="ma-2 pa-2"
          width="70"
          elevation="20"
        >
            <p class="text-center">{{ Match.Teams1.Nom }}</p>
        </v-card>
        <v-card
          :style="
            Match.Teams2.Win
              ? {
                  background:
                    ' linear-gradient(90deg, var(--v-darkPurple-base), var(--v-info-base), var(--v-secondary-base) )',
                }
              : null
          "
          height="40"
          class="ma-2 pa-2"
          width="70"
          elevation="20"
        >
          <p class="text-center">{{ Match.Teams2.Nom }}</p>
        </v-card>
      </div>
    </div>
    <div class="d-flex flex-wrap justify-space-around">
      <div v-for="Match in Matchs" v-bind:key="Match" class="line"></div>
    </div>
    <div class="d-flex flex-wrap justify-space-around">
      <div v-for="Demi in Demis" v-bind:key="Demi" class="lineBottom"></div>
    </div>
    <div class="d-flex flex-wrap justify-space-around">
      <div v-for="Demi in Demis" v-bind:key="Demi" class="line"></div>
    </div>
    <div class="d-flex flex-wrap justify-space-around">
      <div
        class="d-flex flex-wrap justify-space-around ma-5"
        v-for="Demi in Demis"
        v-bind:key="Demi"
      >
        <v-card
          :style="
            Demi.Teams1.Win
              ? {
                  background:
                    ' linear-gradient(90deg, var(--v-darkPurple-base), var(--v-info-base), var(--v-secondary-base) )',
                }
              : null
          "
          height="40"
          class="ma-5 pa-2"
          width="110"
          elevation="20"
        >
          <p class="text-center">{{ Demi.Teams1.Nom }}</p>
        </v-card>
        <v-card
          :style="
            Demi.Teams2.Win
              ? {
                  background:
                    ' linear-gradient(90deg, var(--v-darkPurple-base), var(--v-info-base), var(--v-secondary-base) )',
                }
              : null
          "
          height="40"
          class="ma-5 pa-2"
          width="110"
          elevation="20"
        >
          <p class="text-center">{{ Demi.Teams2.Nom }}</p>
        </v-card>
      </div>
    </div>

    <div class="d-flex flex-wrap justify-space-around">
      <div v-for="Demi in Demis" v-bind:key="Demi" class="line"></div>
    </div>
    <div class="d-flex flex-wrap justify-space-around">
      <div v-for="Final in Finals" v-bind:key="Final" class="lineBottom2"></div>
    </div>
    <div class="d-flex flex-wrap justify-space-around">
      <div v-for="Final in Finals" v-bind:key="Final" class="line"></div>
    </div>

    <div
      class="d-flex flex-wrap justify-center ma-5"
      v-for="Final in Finals"
      v-bind:key="Final"
    >
      <v-card
        :style="
          Final.Teams1.Win
            ? {
                background:
                  ' linear-gradient(90deg, var(--v-darkPurple-base), var(--v-info-base), var(--v-secondary-base) )',
              }
            : null
        "
        height="40"
        class="ma-5 pa-2"
        width="150"
        elevation="20"
      >
        <p class="text-center">{{ Final.Teams1.Nom }}</p>
      </v-card>
      <v-card
        :style="
          Final.Teams2.Win
            ? {
                background:
                  ' linear-gradient(90deg, var(--v-darkPurple-base), var(--v-info-base), var(--v-secondary-base) )',
              }
            : null
        "
        height="40"
        class="ma-5 pa-2"
        width="150"
        elevation="20"
      >
        <p class="text-center">{{ Final.Teams2.Nom }}</p>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Matchs: [
        {
          Teams1: {
            Nom: "Test",
            id: 1,
            Win: true,
          },

          Teams2: {
            Nom: "Test 2",
            id: 2,
            Win: false,
          },
        },
        {
          Teams1: {
            Nom: "Test 3",
            id: 3,
            Win: false,
          },

          Teams2: {
            Nom: "Test 4",
            id: 4,
            Win: true,
          },
        },
        {
          Teams1: {
            Nom: "Test 5",
            id: 5,
            Win: true,
          },

          Teams2: {
            Nom: "Test 6",
            id: 6,
            Win: false,
          },
        },
        {
          Teams1: {
            Nom: "Test 7",
            id: 7,
            Win: true,
          },

          Teams2: {
            Nom: "Test 8 ",
            id: 8,
            Win: false,
          },
        },
      ],
      Demis: [
        {
          Teams1: {
            Nom: "Test",
            id: 1,
            Win: true,
          },

          Teams2: {
            Nom: "Test 4",
            id: 4,
            Win: false,
          },
        },
        {
          Teams1: {
            Nom: "Test 5",
            id: 5,
            Win: false,
          },

          Teams2: {
            Nom: "Test 7",
            id: 7,
            Win: true,
          },
        },
      ],
      Finals: [
        {
          Teams1: {
            Nom: "Test",
            id: 1,
            Win: true,
          },

          Teams2: {
            Nom: "Test 7",
            id: 7,
            Win: false,
          },
        },
      ],
    };
  },
};
</script>

<style scoped>
p {
  font-size: 17px;
}
.line {
  height: 5rem;
  border: 1px solid;
}
.lineBottom {
  border: 1px solid;
  width: 14vw;
}
.lineBottom2 {
  border: 1px solid;
  width: 28vw;
}
</style>