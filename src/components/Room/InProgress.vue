<template>
  <div>
    <center>
      <h2 class="ma-2">MES SALONS EN COURS</h2>
    </center>
    <v-row>
      <v-card
        class="room ma-10 d-flex align-center justify-center"
        elevation="10"
        width="300"
        :to="{ name: 'Home' }"
      >
        <img style="width: 120px" src="../../assets/add.png" alt="plus" />
      </v-card>
      <v-card
        v-for="salon in salons"
        v-bind:key="salon"
        class="room ma-10"
        elevation="10"
        width="300"
        :to="{ name: 'Home' }"
      >
        <div class="Top" height="40px">
          <center>
            <p class="pa-2">{{ salon.Info.Nom }}</p>
          </center>
        </div>
        <div class="ma-5">
          <p>
            <i class="fas fa-user-friends mr-3"></i
            >{{ salon.Info.NombreJoueur }}
          </p>
          <p>
            <i class="fas fa-calendar-check mr-4"></i> {{ salon.Info.FinSalon }}
          </p>
          <p>
            <i class="fas fa-gem mr-4"></i>{{ salon.Info.NombreDePoint }} points
          </p>
          <p>
            <i class="fas fa-trophy mr-3"></i>
            {{ salon.Info.Competition }}
          </p>
          <div v-if="salon.Info.Propriétaire == 1">
            <center>
              <v-chip large chip><i id="chip" class="fas fa-crown"></i></v-chip>
            </center>
          </div>
        </div>
      </v-card>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      salons: [
        {
          Info: {
            Nom: "Mon nom",
            NombreJoueur: "100 / 200",
            FinSalon: "30 / 3",
            NombreDePoint: "200",
            Competition: "LEC",
            Propriétaire: 0,
          },
        },
        {
          Info: {
            Nom: "Bonsoir",
            NombreJoueur: "100 / 200",
            FinSalon: "30 / 03",
            NombreDePoint: "200",
            Competition: "LEC",
            Propriétaire: 1,
          },
        },
        {
          Info: {
            Nom: "Le cartel bang bang",
            NombreJoueur: "100 / 200",
            FinSalon: "30 / 03",
            NombreDePoint: "200",
            Competition: "LEC",
            Propriétaire: 0,
          },
        },
        {
          Info: {
            Nom: "Test 2.0",
            NombreJoueur: "100 / 200",
            FinSalon: "30 / 03",
            NombreDePoint: "200",
            Competition: "LEC",
            Propriétaire: 1,
          },
        },
      ],
    };
  },
};
</script>
