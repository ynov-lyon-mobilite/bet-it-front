<template>
  <v-container>
    <div v-if="user.id != null">
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
import store from "@/store/index.js";
import SuccessCategory from "@/components/Success/SuccessCategory.vue";
import NotConnected from "@/components/NotConnected.vue";

export default {
  store: store,
  components: {
    SuccessCategory,
    NotConnected,
  },
  data: () => ({
    month: 1,
    wonBet: 6,
    categories: {
      bet: [
        {
          id: "5wins",
          label: "Remporter 5 paris",
          goal: 5,
          reward: 100,
          isDone: true,
        },
        {
          id: "10wins",
          label: "Remporter 10 paris",
          goal: 10,
          reward: 250,
          isDone: false,
        },
        {
          id: "20wins",
          label: "Remporter 20 paris",
          goal: 20,
          reward: 300,
          isDone: false,
        },
        {
          id: "30wins",
          label: "Remporter 30 paris",
          goal: 30,
          reward: 600,
          isDone: false,
        },
        {
          id: "50wins",
          label: "Remporter 50 paris",
          goal: 50,
          reward: 1500,
          isDone: false,
        },
      ],
      birthday: [
        {
          id: "1month",
          label: "1 mois d'ancienneté",
          goal: 1,
          reward: 10,
          isDone: true,
        },
        {
          id: "2months",
          label: "2 mois d'ancienneté",
          goal: 2,
          reward: 20,
          isDone: false,
        },
        {
          id: "3months",
          label: "3 mois d'ancienneté",
          goal: 3,
          reward: 50,
          isDone: false,
        },
        {
          id: "6months",
          label: "6 mois d'ancienneté",
          goal: 6,
          reward: 100,
          isDone: false,
        },
      ],
    },
  }),
  computed: {
    user() {
      return store.state.user;
    },
  },
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
