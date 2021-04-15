<template>
  <v-container>
    <div>
      <div
        class="d-flex justify-end align-center"
        v-if="getuser.betties >= 1 && getuser.betties < 30"
      >
        <span class="amount text-h3 mr-5">{{ getuser.betties }}</span>
        <img style="width: 120px" src="../assets/monney/tas.svg" alt="monnaie" />
      </div>
      <div
        class="d-flex justify-end align-center"
        v-else-if="getuser.betties >= 30 && getuser.betties < 60"
      >
        <span class="amount text-h3 mr-5">{{ getuser.betties }}</span>
        <img style="width: 120px" src="../assets/monney/tasUp.svg" alt="monnaie" />
      </div>
      <div
        class="d-flex justify-end align-center"
        v-else-if="getuser.betties >= 60 && getuser.betties < 150"
      >
        <span class="amount text-h3 mr-5">{{ getuser.betties }}</span>
        <img style="width: 120px" src="../assets/monney/bourse.svg" alt="monnaie" />
      </div>
      <div
        class="d-flex justify-end align-center"
        v-else-if="getuser.betties >= 150"
      >
        <span class="amount text-h3 mr-5">{{ getuser.betties }}</span>
        <img style="width: 120px" src="../assets/monney/coffre.svg" alt="monnaie" />
      </div>
    </div>

    <InProgress></InProgress>
    <Over></Over>
  </v-container>
</template>
<script>
import store from "@/store/index.js";
import InProgress from "@/components/Room/InProgress.vue";
import Over from "@/components/Room/Over.vue";

export default {
  components: { InProgress, Over },
  store: store,
  InProgress,
  Over,

  computed: {
    getuser() {
      return store.state.user;
    },
  },
};
</script>

<style>
.Top , .v-data-table-header  {
  background: linear-gradient(
    90deg,
    var(--v-darkPurple-base),
    var(--v-info-base),
    var(--v-secondary-base)
  );
}

.room:hover {
  background: rgba(255, 255, 255, 0.2) !important;
  transition: 0.4s ease-in-out;
}

h2 {
  font-size: 30px;
}

#chip {
  font-size: 23px;
}

</style>
