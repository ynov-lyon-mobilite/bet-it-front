<template>
  <v-container>
    <div v-if="user.isAuthentified">
      <SuccessCategory
        label="Paris"
        :successList="categories.bet"
        :progress="wonBet"
      />
      <SuccessCategory
        label="Anniversaires"
        :successList="categories.birthday"
        :progress="month"
      />
    </div>
    <div v-else>
      <NotConnected></NotConnected>
    </div>
  </v-container>
</template>

<script>
import SuccessCategory from "@/components/Success/SuccessCategory.vue";
import NotConnected from "@/components/NotConnected.vue";

import success from "../assets/fixtures/success";

export default {
  components: {
    SuccessCategory,
    NotConnected
  },
  data: () => ({
    month: 1,
    wonBet: 6,
    categories: success
  }),
  computed: {
    user() {
      return this.$store.state.user.userInfo;
    }
  }
};
</script>

<style lang="scss">
.success-card {
  background: #303030 !important;
}
.card-title,
.btn,
.reward {
  background: linear-gradient(
    0.25turn,
    var(--v-darkPurple-base),
    var(--v-info-base),
    var(--v-secondary-base)
  );
  text-transform: none;
}

.disabled {
  color: gray !important;
  & > .card-title {
    background: gray;
  }
}

.success-mark {
  color: var(--v-secondary-base);
}
</style>
