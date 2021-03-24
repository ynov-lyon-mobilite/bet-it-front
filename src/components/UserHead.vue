<template>
  <v-row id="title" class="flex-row justify-space-between pa-4">
    <div>
      <h1
        style="
          font-size: 40px;
          color: #fff;
          text-shadow: rgb(255, 255, 255) 0px 0px 5px, rgb(0 0 0) 0px 0px 10px,
            rgb(0, 0, 0) 0px 0px 20px, rgb(2, 2, 2) 0px 0px 40px,
            rgb(107, 108, 117) 0px 0px 67px, rgb(44, 51, 51) 0px 0px 90px,
            rgb(33, 37, 37) 0px 0px 100px, rgb(51, 56, 56) 0px 0px 120px;
        "
      >
        LEC 2021
      </h1>
      <p>22/01 | 06/02</p>
    </div>
    <div
      class="d-flex justify-end align-center"
      v-if="getuser.betties >= 1 && getuser.betties < 30"
    >
      <span class="amount text-h3 mr-5">{{ getuser.betties }}</span>
      <img style="width: 120px" src="../assets/tas.svg" alt="monnaie" />
    </div>
    <div
      class="d-flex justify-end align-center"
      v-else-if="getuser.betties >= 30 && getuser.betties < 60"
    >
      <span class="amount text-h3 mr-5">{{ getuser.betties }}</span>
      <img style="width: 120px" src="../assets/tasUp.svg" alt="monnaie" />
    </div>
    <div
      class="d-flex justify-end align-center"
      v-else-if="getuser.betties >= 60 && getuser.betties < 150"
    >
      <span class="amount text-h3 mr-5">{{ getuser.betties }}</span>
      <img style="width: 120px" src="../assets/bourse.svg" alt="monnaie" />
    </div>
    <div
      class="d-flex justify-end align-center"
      v-else-if="getuser.betties >= 150"
    >
      <span class="amount text-h3 mr-5">{{ getuser.betties }}</span>
      <img style="width: 120px" src="../assets/coffre.svg" alt="monnaie" />
    </div>
  </v-row>
</template>

<script>
export default {
  name: "UserHead",
  computed: {
    getuser() {
      return this.$store.state.user;
    },
  },
};
</script>

<style scoped>
</style>
