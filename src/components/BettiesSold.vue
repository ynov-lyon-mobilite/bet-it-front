<template>
  <div class="v-card__title">
    <span class="font-title mr-5">{{ betties }}</span>

    <img
      v-if="betties >= 1 && betties < 30"
      src="../assets/monney/tas.svg"
      alt="monnaie"
    />
    <img
      v-else-if="betties >= 30 && betties < 60"
      src="../assets/monney/tasUp.svg"
      alt="monnaie"
    />
    <img
      v-else-if="betties >= 60 && betties < 150"
      src="../assets/monney/bourse.svg"
      alt="monnaie"
    />
    <img
      v-else-if="betties >= 150"
      src="../assets/monney/coffre.svg"
      alt="monnaie"
    />
  </div>
</template>

<script>
export default {
  name: "BettiesSold",
  computed: {
    betties() {
      return this.$store.state.betties;
    },
    soldeImage() {
      //Todo return the good img
    },
  },
};
</script>

<style scoped lang="scss">
.v-card__title {
  padding: 0;
}
.font-title {
  font-size: 26px;
}

img {
  width: 60px;
}
</style>
