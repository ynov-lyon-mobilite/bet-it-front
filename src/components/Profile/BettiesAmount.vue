<template>
  <v-card>
    <v-card-title class="card-title">Betties</v-card-title>
    <div
      class="pa-5 d-flex justify-center align-center"
      v-if="user.betties >= 1 && user.betties < 30"
    >
      <span class="amount mx-5">{{ user.betties }}</span>
      <img style="width: 10vw" src="../../assets/tas.svg" alt="monnaie" />
    </div>
    <div
      class="pa-5 d-flex justify-center align-center"
      v-else-if="user.betties >= 30 && user.betties < 60"
    >
      <span class="amount mx-5">{{ user.betties }}</span>
      <img style="width: 15vw" src="../../assets/tasUp.svg" alt="monnaie" />
    </div>
    <div
      class="pa-5 d-flex justify-center align-center"
      v-else-if="user.betties >= 60 && user.betties < 150"
    >
      <span class="amount mx-5">{{ user.betties }}</span>
      <img style="width: 10vw" src="../../assets/bourse.svg" alt="monnaie" />
    </div>
    <div
      class="pa-5 d-flex justify-center align-center"
      v-else-if="user.betties >= 150"
    >
      <span class="amount mx-5">{{ user.betties }}</span>
      <img style="width: 10vw" src="../../assets/coffre.svg" alt="monnaie" />
    </div>
    <div class="d-flex justify-center py-3">
      <v-btn class="btn" :to="{ name: 'Games'}">Ajouter des Betties</v-btn>
    </div>
  </v-card>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
};
</script>

<style>
.amount {
  font-size: 50px;
}
</style>
