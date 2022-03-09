<template>
  <div>
    <div class="bet-header">
      <div class="bet-header-showmatch">
        {{ bet.team1.namefull }} vs {{ bet.team2.namefull }}
      </div>
      <div class="bet-header-date">06 January, 12:30</div>
    </div>
    <div class="bet-body">
      <div class="bet-body-cote">{{ bet.team1.cote }}</div>
      <div class="bet-body-desc">
        <div class="bet-body-desc-winner">{{ bet.team1.name }}</div>
        <div class="bet-body-desc-type">Win</div>
      </div>
      <div v-if="isBetSimple" class="bet-body-amount">
        <input
          class="bet-body-input"
          v-model.number="betAmount"
          type="number"
          @input="
            $emit('input', {
              value: $event.target.value,
              id,
              cote: bet.team1.cote,
            })
          "
          placeholder="0"
        />
        <img class="bettie" src="../assets/monney/tas.svg" />
      </div>
      <div class="bet-body-delete" @click="removeToCart(id)">X</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    bet: Object,
    id: Number,
    isBetSimple: Boolean,
  },
  data: () => ({
    betAmount: 0,
    betAmountTemp: 0,
    betAmountToSend: 0,
    gains: 0,
    gainsTemp: 0,
    gainsToSend: 0,
    show: true,
    combine: false,
  }),
  computed: {},
  methods: {
    removeToCart(id) {
      this.$store.dispatch({
        type: "removeToCart",
        id,
      });

      this.$emit("clicked", id);
    },
    addBetValue(bet, value) {
      this.$store.dispatch({
        type: "addToCart",
        bet: { ...bet, value },
      });
    },
    
  },
};
</script>

<style lang="scss">
.bet-header {
  padding: 5px;
  display: flex;
  justify-content: space-between;
  .bet-header-showmatch,
  .bet-header-date {
    font-size: 11px;
    color: grey;
  }
}
.bet-body {
  display: flex;
  padding: 0px 10px;
  align-items: center;
  justify-content: flex-start;

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  .bet-body-cote {
    border-radius: 5px;
    padding: 3px;
    width: 48px;
    height: 100%;
    display: flex;
    text-align: center;
    background-color: #48a8e7;
    align-items: center;
    justify-content: center;
  }
  .bet-body-desc {
    margin-left: 10px;
    display: flex;
    width: 120px;
    flex-direction: column;
    .bet-body-desc-winner {
      font-size: 16px;
      color: black;
      font-weight: bold;
    }
    .bet-body-desc-type {
      margin-top: -5px;
      font-size: 12px;
      color: grey;
    }
  }
  .bet-body-amount {
    position: relative;
    .bet-body-input {
      width: 80px;
      background-color: transparent;
      border: 1px solid lightgray;
      text-align: left;
      border-radius: 5px;
      padding-left: 5px;
      color: grey;
      &:active,
      &:focus-visible,
      &:focus {
        outline: none;
        border: 1px solid grey;
      }
    }
    .bettie {
      position: absolute;
      width: 25px;
      top: 9px;
      right: 3px;
    }
  }
  .bet-body-delete {
    margin-left: auto;
    color: black;
  }
}
</style>
