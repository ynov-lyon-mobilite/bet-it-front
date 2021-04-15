<template>
  <div
    class="d-flex justify-end align-center mr-12"
    v-if="getuser.betties >= 1 && getuser.betties < 30"
  >
    <span class="amount text-h3 mr-5">{{ getuser.betties }}</span>
    <img style="width: 120px" src="../../assets/monney/tas.svg" alt="monnaie" />
  </div>
  <div
    class="d-flex justify-end align-center mr-12"
    v-else-if="getuser.betties >= 30 && getuser.betties < 60"
  >
    <span class="amount text-h3 mr-5">{{ getuser.betties }}</span>
    <img style="width: 120px" src="../../assets/monney/tasUp.svg" alt="monnaie" />
  </div>
  <div
    class="d-flex justify-end align-center mr-12"
    v-else-if="getuser.betties >= 60 && getuser.betties < 150"
  >
    <span class="amount text-h3 mr-5">{{ getuser.betties }}</span>
    <img style="width: 120px" src="../../assets/monney/bourse.svg" alt="monnaie" />
  </div>
  <div
    class="d-flex justify-end align-center mr-12"
    v-else-if="getuser.betties >= 150"
  >
    <span class="amount text-h3 mr-5">{{ getuser.betties }}</span>
    <img style="width: 120px" src="../../assets/monney/coffre.svg" alt="monnaie" />
  </div>
</template>

<script>
import store from "@/store/index.js";

export default {
  store: store,
  computed: {
    getuser() {
      return store.state.user;
    },
  },
};
</script>
