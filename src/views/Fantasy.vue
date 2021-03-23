<template>
  <div>
    <RoomInfos />
    <v-card color="#1e1e1e" class="my-8">
      <v-card-title class="card-title">Je constitue mon équipe</v-card-title>
      <div
        class="d-flex flex-column flex-md-row positions align-center justify-md-center pa-8"
      >
        <img class="mx-5 pa-2" src="../assets/fantasy/top.png" alt="" />
        <img class="mx-5 pa-2" src="../assets/fantasy/jungle.png" alt="" />
        <img class="mx-5 pa-2" src="../assets/fantasy/mid.png" alt="" />
        <img class="mx-5 pa-2" src="../assets/fantasy/adc.png" alt="" />
        <img class="mx-5 pa-2" src="../assets/fantasy/support.png" alt="" />
      </div>
      <div class="text-center py-2">Valeur actuelle de l'équipe : 0/100</div>
    </v-card>
    <div class="d-flex flex-column align-center">
      <v-btn
        :disabled="!canParticipate"
        :class="
          `btn rounded-pill pa-5 mb-2 text-h4 ${!canParticipate && 'disabled'}`
        "
        >Je participe !
        <div class="circle d-flex justify-center align-center">
          1€
        </div></v-btn
      >
      <div v-if="!canParticipate">Votre équipe n'est pas complète</div>
    </div>
    <div class="d-flex justify-center my-8">
      <div class="text-h4">Temps restant avant participation : 2 jours</div>
    </div>
    <v-card class="my-4">
      <v-card-title>Matchs concernés</v-card-title>
    </v-card>
    <v-card class="my-8">
      <v-card-title class="card-title">Joueurs du salon</v-card-title>
      <v-simple-table fixed-header height="200px">
        <thead>
          <tr>
            <th class="text-center">
              Rang
            </th>
            <th class="text-center">
              Pseudo
            </th>
            <th class="text-center">
              Score
            </th>
          </tr>
        </thead>
        <tbody>
          <tr></tr>
          <tr></tr>
          <tr></tr>
        </tbody>
      </v-simple-table>
    </v-card>
  </div>
</template>

<script>
import RoomInfos from '@/components/Fantasy/RoomInfos';
export default {
  name: 'Fantasy',
  components: {
    RoomInfos
  },
  data: () => ({
    canParticipate: false
  }),
  computed: {
    betties() {
      return this.$store.state.betties;
    }
  }
};
</script>

<style scoped lang="scss">
.disabled {
  background: gray !important;
}

.card-title,
.btn {
  background: linear-gradient(
    0.25turn,
    var(--v-darkPurple-base),
    var(--v-info-base),
    var(--v-secondary-base)
  );
}

.btn {
  height: 60px !important;
}

.circle {
  position: absolute;
  top: 20px;
  left: 230px;
  width: 75px;
  height: 75px;
  background: var(--v-darkPurple-base);
  border-radius: 50%;
}

.positions {
  img {
    cursor: pointer;
    width: 75px;
    border-radius: 50%;
    &:hover {
      background: #fff;
      opacity: 0.8;
    }
  }
}
</style>
