<template>
  <v-card class="profile-card my-5">
    <v-card-title class="card-title">Betties</v-card-title>
    <div class="d-flex justify-center align-center">
      <span class="amount ma-5">{{ amount }}</span>
      <v-img
        class="ma-5"
        max-width="200"
        src="../../assets/betties.png"
      ></v-img>
    </div>
    <div class="d-flex justify-center">
      <v-btn class="btn my-5">Ajouter des Betties</v-btn>
    </div>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    amount: 150
  })
};
</script>

<style>
.amount {
  font-size: 50px;
}
</style>
