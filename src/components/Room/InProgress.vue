<template>
  <div>
    <h2 class="ma-2 text-center">MES SALONS EN COURS</h2>
    <v-row>
      <v-card
        class="room ma-10 d-flex align-center justify-center"
        elevation="10"
        width="315"
        :to="{ name: 'AddRoom' }"
      >
        <img style="width: 120px" src="../../assets/add.png" alt="plus" />
      </v-card>
      <v-card
        v-for="salon in getRoom"
        v-bind:key="salon"
        class="room ma-10"
        elevation="10"
        width="315"
        :to="{ name: 'Fantasy' }"
      >
        <div class="gradient" height="60px">
          <p class="pa-2 text-center">{{ salon.RoomName }}</p>
        </div>
        <div class="ma-5">
          <p>
            <i class="fas fa-user-friends mr-3"></i>Nombre de joueurs : 1 /
            {{ salon.NumberOfPlayers }}
          </p>
          <p>
            <i class="fas fa-calendar-check mr-4"></i>Fin du salon le :
            {{ salon.EndRoom }}
          </p>
          <p><i class="fas fa-medal mr-3"></i>Votre classement : 1er</p>
          <p>
            <i class="fas fa-trophy mr-3"></i>
            La compétition : {{ salon.Competition }}
          </p>
          <div v-if="salon.Propriétaire == 1">
            <div class="d-flex align-center justify-center">
              <v-chip large chip><i id="chip" class="fas fa-crown"></i></v-chip>
            </div>
          </div>
        </div>
      </v-card>
      <v-card
        v-for="salon in salons"
        v-bind:key="salon"
        class="room ma-10"
        elevation="10"
        width="315"
        :to="{ name: 'Fantasy' }"
      >
        <div class="gradient" height="60px">
          <p class="pa-2 text-center">{{ salon.Info.Nom }}</p>
        </div>
        <div class="ma-4">
          <p>
            <i class="fas fa-user-friends mr-3"></i>Nombre de joueurs :
            {{ salon.Info.NombreJoueur }}
          </p>
          <p>
            <i class="fas fa-calendar-check mr-4"></i>Fin du salon le :
            {{ salon.Info.FinSalon }}
          </p>
          <p>
            <i class="fas fa-medal mr-3"></i>
            Votre classement : {{ salon.Info.Classement }}
          </p>
          <p>
            <i class="fas fa-trophy mr-3"></i>
            La compétition : {{ salon.Info.Competition }}
          </p>
          <div v-if="salon.Info.Propriétaire == 1">
            <div class="d-flex align-center justify-center">
              <v-chip large chip><i id="chip" class="fas fa-crown"></i></v-chip>
            </div>
          </div>
        </div>
      </v-card>
    </v-row>
  </div>
</template>

<script>
import store from "@/store/index.js";

export default {
  store: store,
  data() {
    return {
      salons: [
        {
          Info: {
            Nom: "Mon nom",
            NombreJoueur: "100 / 200",
            FinSalon: " 2021-03-31",
            NombreDePoint: "200",
            Competition: "LEC",
            Classement: "10ème",
            Propriétaire: 0,
          },
        },
        {
          Info: {
            Nom: "Bonsoir",
            NombreJoueur: "100 / 200",
            FinSalon: " 2021-03-31",
            NombreDePoint: "200",
            Competition: "LEC",
            Classement: "10ème",
            Propriétaire: 1,
          },
        },
        {
          Info: {
            Nom: "Le cartel bang bang",
            NombreJoueur: "100 / 200",
            FinSalon: " 2021-03-31",
            NombreDePoint: "200",
            Competition: "LEC",
            Classement: "10ème",
            Propriétaire: 0,
          },
        },
        {
          Info: {
            Nom: "Test 2.0",
            NombreJoueur: "100 / 200",
            FinSalon: " 2021-03-31",
            NombreDePoint: "200",
            Competition: "LEC",
            Classement: "10ème",
            Propriétaire: 1,
          },
        },
      ],
    };
  },
  computed: {
    getRoom() {
      return store.state.rooms;
    },
  },
};
</script>
<style  scoped>
p {
  font-size: 18px;
  padding-bottom: 10px;
}
</style>
