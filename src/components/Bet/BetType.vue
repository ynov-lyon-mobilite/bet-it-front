<template>
  <div class="col-12 col-md-6">
    <v-card class="bet-type">
      <v-card-title class="card-title">
        {{ bet.type }}
      </v-card-title>
      <div class="pa-4 d-flex flex-wrap justify-space-between">
        <div
          class="d-flex justify-space-between justify-md-center col-12 col-md-6"
        >
          <div class="text-h6">
            {{ bet.teamA.name }}
          </div>
          <v-btn class="ml-md-3">
            {{ bet.teamA.odd }}
          </v-btn>
        </div>
        <div
          class="d-flex justify-space-between justify-md-center col-12 col-md-6"
        >
          <v-btn v-if="isMdUp" class="mr-3">
            {{ bet.teamB.odd }}
          </v-btn>
          <div class="text-h6">
            {{ bet.teamB.name }}
          </div>
          <v-btn v-if="!isMdUp">
            {{ bet.teamB.odd }}
          </v-btn>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    bet: Object
  },
  data() {
    return {
      amount: null,
      hasBet: false,
      errors: {
        betInput: false,
        bettiesAmount: false
      },
      total: {}
    };
  },
  computed: {
    isMdUp() {
      return this.$vuetify.breakpoint.mdAndUp;
    },
    user() {
      return this.$store.state.user;
    },
    betHistory() {
      return this.$store.state.betHistory;
    },
    hasAlreadyBet() {
      return this.betHistory.find(bet => bet.id === this.bet.id) !== undefined;
    },
    hasBetOpponent() {
      return this.betHistory.find(
        bet =>
          bet.game.id === this.bet.game.id &&
          bet.type === this.bet.type &&
          bet.team !== this.bet.team
      );
    },
    canBet() {
      return !this.hasAlreadyBet && !this.hasBetOpponent;
    }
  },
  methods: {
    getAmount() {
      const bet = this.betHistory.find(bet => bet.id === this.bet.id);
      if (bet) this.amount = bet.amount;
    },
    isNumber(evt) {
      evt = evt ? evt : window.event;
      const charCode = evt.which ? evt.which : evt.keyCode;
      if (
        charCode > 31 &&
        (charCode < 48 || charCode > 57) &&
        charCode !== 46
      ) {
        evt.preventDefault();
      } else {
        return true;
      }
    },
    wantToBet() {
      if (!this.amount || parseFloat(this.amount) === 0)
        this.errors.betInput = true;
      else if (this.amount > this.user.betties)
        this.errors.bettiesAmount = true;
      else this.hasBet = true;
    },
    confirmBet() {
      this.$store.dispatch({
        type: "betAction",
        bet: { ...this.bet, amount: parseFloat(this.amount), date: new Date() }
      });
      this.hasBet = false;
      this.$store.state.betties = this.$store.state.betties - this.amount;
      // this.$store.dispatch("PutBetties", {
      //   betties: this.user.betties,
      //   id: this.user.id,
      // });
    }
  },
  mounted() {
    this.getAmount();
  }
};
</script>

<style lang="scss" scoped>
.bet-type {
  background: #303030 !important;

  .bet-label {
    width: 150px;
  }
  .v-btn,
  .card-title {
    background: linear-gradient(
      0.25turn,
      var(--v-darkPurple-base),
      var(--v-info-base),
      var(--v-secondary-base)
    );
  }
  .disabled {
    background: gray;
  }

  .circle {
    border-radius: 50%;

    &.logo-wrapper {
      width: 75px;
      height: 75px;
      background: white;
    }
  }
}
</style>
