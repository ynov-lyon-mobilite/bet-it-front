<template>
  <center>
    <h1 class="ma-10">
      Vous n'êtes pas connecté
    </h1>
    <v-btn class="notco ma-2" :to="{ name: 'Registration' }">S'inscrire </v-btn>
    <v-btn class="notco ma-2" :to="{ name: 'Login' }"> Se connecter</v-btn>
  </center>
</template>

<style lang="scss" scoped>
.notco {
  background: linear-gradient(
    90deg,
    var(--v-darkPurple-base),
    var(--v-info-base),
    var(--v-secondary-base)
  );
}
</style>
