<template>
  <v-card>
    <v-card-title class="card-title">Betties</v-card-title>
    <div class="pa-2 d-flex justify-center align-center">
      <span class="amount mx-3">{{ betties }}</span>
      <v-img
        class="mx-3"
        max-width="200"
        src="../../assets/betties.png"
      ></v-img>
    </div>
    <div class="d-flex justify-center py-3">
      <v-btn class="btn">Ajouter des Betties</v-btn>
    </div>
  </v-card>
</template>

<script>
export default {
  computed: {
    betties() {
      return this.$store.state.betties;
    },
  },
};
</script>

<style>
.amount {
  font-size: 50px;
}
</style>
