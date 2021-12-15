<template>
  <div
    class="bet-type d-flex flex-wrap-reverse justify-space-around align-center pa-4"
  >
    <div class="d-flex flex-column justify-center">
      <div class="bet-label text-h5 text-center">{{ bet.type }}</div>
      <v-btn
        :class="!canBet && 'disabled'"
        @click="wantToBet"
        :disabled="!canBet"
        >Parier
      </v-btn>
      <v-dialog v-model="errors.bettiesAmount" max-width="400">
        <v-card>
          <v-card-text class="d-flex justify-center pa-4">
            Vous n'avez pas assez de betties.
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="secondary" text @click="errors.bettiesAmount = false">
              OK
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-dialog v-model="errors.betInput" max-width="400">
        <v-card>
          <v-card-text class="d-flex justify-center pa-4">
            Veuillez miser une somme valide.
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="secondary" text @click="errors.betInput = false">
              OK
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-dialog v-model="hasBet" persistent max-width="400">
        <v-card>
          <v-card-title class="headline"> Récapitulatif du pari </v-card-title>
          <v-card-text class="text-center">
            <p>{{ `${bet.team.name} - ${bet.type}` }}</p>
            <p>
              {{ `Gains potentiels : ${Math.ceil(bet.odd * amount)} betties` }}
            </p>
            <p>{{ `Betties restant : ${getuser.betties - amount}` }}</p>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="secondary" text @click="confirmBet">
              Confirmer
            </v-btn>

            <v-btn color="secondary" text @click="hasBet = false">
              Annuler
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
    <div class="d-flex flex-column align-center px-10">
      <div class="d-flex justify-center align-center circle logo-wrapper pa-3">
        <v-img :src="bet.team.logo"></v-img>
      </div>
      <div class="text-h6">{{ bet.odd }}</div>
    </div>
    <v-text-field
      @keypress="isNumber($event)"
      v-model="amount"
      outlined
      class="mt-10"
      label="Mise"
      color="black"
      clearable
      :disabled="!canBet"
      dense
    ></v-text-field>
  </div>
</template>

<script>
export default {
  props: {
    bet: Object
  },
  data() {
    return {
      user: {},
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
    getuser() {
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
      else if (this.amount > this.getuser.betties)
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
      //   betties: this.getuser.betties,
      //   id: this.getuser.id,
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
  border-bottom: 1px solid silver;
  &:last-of-type {
    border-bottom: none;
  }
  .bet-label {
    width: 150px;
  }
  .v-btn {
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
