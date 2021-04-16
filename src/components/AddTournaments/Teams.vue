<template>
  <v-card class="pa-5 ma-5" elevation="10" width="250">
    <div class="d-flex justify-center">
      <v-btn width="150" class="gradient mb-5" @click="overlay = !overlay">
        + Equipe
      </v-btn>
    </div>
    <v-text-field label="Recherche" outlined></v-text-field>
    <v-row class="d-flex justify-space-around">
      <v-card
        large
        width="80"
        class="ma-4 teamsName"
        v-for="Team in Teams"
        v-bind:key="Team"
        :style="
          Team.select
            ? {
                background:
                  ' linear-gradient(90deg, var(--v-darkPurple-base), var(--v-info-base), var(--v-secondary-base) )',
              }
            : null
        "
      >
        <p class="text-center mb-0 pa-2">
          {{ Team.name }}
        </p>
      </v-card>
      <v-card
        width="80"
        v-for="Team in getTeam"
        v-bind:key="Team"
        large
        class="ma-4 teamsName"
        :style="
          Team.select
            ? {
                background:
                  ' linear-gradient(90deg, var(--v-darkPurple-base), var(--v-info-base), var(--v-secondary-base) )',
              }
            : null
        "
        ><p class="text-center mb-0 pa-2">{{ Team.name }}</p></v-card
      >
    </v-row>
    <v-overlay :value="overlay">
      <v-card color="#272727" elevation="20" class="ma-5 pa-5" width="60vw">
        <h2 class="text-center">Ajouter une équipe</h2>
        <v-form v-model="valid">
          <div class="d-flex justify-center">
            <div class="d-flex flex-column">
              <v-text-field
                class="mt-6"
                v-model="team.name"
                label="Nom de l'équipe"
                required
                solo
                elevation="20"
              ></v-text-field>
            </div>
          </div>
          <div class="d-flex justify-space-around flex-wrap">
            <v-text-field
              class="ma-3"
              v-model="team.player1"
              label="1er Joueur"
              :rules="rules"
              required
              solo
              elevation="20"
            ></v-text-field>
            <v-text-field
              class="ma-3"
              v-model="team.player2"
              label="2ème Joueur"
              required
              solo
              :rules="rules"
            ></v-text-field>
            <v-text-field
              class="ma-3"
              v-model="team.player3"
              label="3ème Joueur"
              required
              :rules="rules"
              solo
            ></v-text-field>
            <v-text-field
              class="ma-3"
              v-model="team.player4"
              label="4ème Joueur"
              required
              :rules="rules"
              solo
            ></v-text-field>
            <v-text-field
              class="ma-3"
              v-model="team.player5"
              label="5ème Joueur"
              required
              solo
              :rules="rules"
            ></v-text-field>
          </div>
          <div class="d-flex justify-center">
            <v-btn large class="gradient ma-3" elevation="2" @click="back()"
              >Annuler</v-btn
            >
            <v-btn
              large
              class="gradient ma-3"
              elevation="2"
              :disabled="!valid"
              @click.prevent="createTeam()"
              @click="form()"
              >Ajouter</v-btn
            >
          </div>
        </v-form>
      </v-card>
    </v-overlay>
  </v-card>
</template>


<script>
import store from "@/store/index.js";

export default {
  store: store,

  data() {
    return {
      valid: false,
      rules: [(value) => !!value || "Required."],
      team: {
        select: false,
        name: "",
        player1: "",
        player2: "",
        player3: "",
        player4: "",
        player5: "",
      },
      overlay: false,

      Teams: [
        {
          name: "Test 1",
          select: true,
        },
        {
          name: "Test 2",
          select: true,
        },
        {
          name: "Test 3",
          select: true,
        },
        {
          name: "test4",
          select: false,
        },
        {
          name: "test1",
          select: false,
        },
        {
          name: "test2",
          select: false,
        },
        {
          name: "test3",
          select: false,
        },
        {
          name: "test4",
          select: false,
        },
        {
          name: "Test 4",
          select: true,
        },
        {
          name: "test2",
          select: false,
        },
        {
          name: "test3",
          select: false,
        },
        {
          name: "Test 5",
          select: true,
        },
        {
          name: "Test 6",
          select: true,
        },
        {
          name: "test2",
          select: false,
        },
        {
          name: "Test 7",
          select: true,
        },
        {
          name: "Test 8",
          select: true,
        },
      ],
    };
  },
  methods: {
    form() {
      this.overlay = false;
      this.team = {
        name: "",
        player1: "",
        player2: "",
        player3: "",
        player4: "",
        player5: "",
      };
    },
    createTeam() {
      store.dispatch("addTeam", this.team);
    },
    back() {
      this.overlay = false;
    },
  },
  computed: {
    getTeam() {
      return store.state.teams;
    },
  },
};
</script>
<style scoped>
.teamsName {
  font-size: 18px;
  background: #555;
  border-radius: 8px;
}
</style>

