<template>
  <v-card class="mx-auto panier" id="panier" width="350">
    <div class="card-title">
      <v-card-title class="panier-title"> Panier </v-card-title>

      <div>
        <BettiesSold></BettiesSold>
      </div>
    </div>

    <div class="card-container" id="card-container">
      <div class="bets-main">
        <div class="bets-type">
          <div
            id="simple"
            :class="isBetSimple ? 'active' : ''"
            v-on:click="betSimple"
          >
            Simple
          </div>
          <div
            id="combine"
            :class="isBetCombine ? 'active' : ''"
            v-on:click="betCombine"
          >
            Combiné
          </div>
        </div>
        <div class="bets-container">
          <v-card>
            <OneBet
              class="bet"
              v-for="(bet, idx) in cart"
              :id="idx"
              :key="bet.id"
              :bet="bet"
              :isBetSimple="isBetSimple"
              @input="setAmount"
              :getAmount="getAmount"
              @clicked="deleteChild"
            ></OneBet>
          </v-card>
        </div>
      </div>
    </div>
    <div class="card-footer" id="card-footer">
      <div class="card-footer-total">
        <div class="card-footer-simple" v-if="isBetSimple">
          <div class="card-footer-total-text">Mise totale :</div>
          <div class="card-footer-total-amount">
            {{ totalAmount }}
            <img class="bettie" src="../assets/monney/tas.svg" />
          </div>
        </div>
        <div v-else class="card-footer-total-amount-combine">
          <div class="card-footer-total-text">Mise totale :</div>

          <div class="card-footer-total-amount">
            <v-text-field
              v-model="betAmountCombine"
              @input="getAmount"
              height="20"
            ></v-text-field>
            <img class="bettie" src="../assets/monney/tas.svg" />
          </div>
        </div>
      </div>
      <div v-if="!isBetSimple" class="card-footer-cote">Côte total : {{ totalOdds }}</div>
      <div class="card-footer-gain">
        <div class="card-footer-gain-text">Gain potentiel :</div>
        <div v-if="isBetSimple" class="card-footer-gain-amount">
          {{ this.totalPotentialGain }}
          <img
            v-if="this.totalPotentialGain"
            class="bettie"
            src="../assets/monney/tas.svg"
          />
        </div>
        <div v-else class="card-footer-gain-amount">
          {{ totalPotentialGainCombine }}
          <img class="bettie" src="../assets/monney/tas.svg" />
        </div>
      </div>
      <button type="button" class="card-footer-btn">Parier</button>
    </div>
  </v-card>
</template>

<script>
// import func from "vue-editor-bridge";
import BettiesSold from "../components/BettiesSold.vue";
import OneBet from "@/views/OneBet";
// import { log } from "console";

export default {
  data: () => ({
    betAmount: 0,
    betAmountCombine: 0,
    show: false,
    isBetSimple: true,
    isBetCombine: false,
    potentialGain: 0,
    potentialGainCombine: 0,
    multCote: 0,
    nbBet: [],
  }),
  computed: {
    cart() {
      // Cart is correctly added
      return this.$store.state.cart;
    },
    totalAmount() {
      return this.$store.state.cart.reduce(
        (total, bet) => total + bet.amount,
        0
      );
    },

    totalOdds() {
      return this.$store.state.cart.reduce(
        (total, bet) => total * bet.team1.cote,
        1
      );
    },
    totalPotentialGain() {
      return this.$store.state.cart.reduce(
        (total, bet) => total + bet.amount * bet.team1.cote,
        0
      );
    },
    totalPotentialGainCombine() {
      return this.totalOdds * this.totalAmount;
    },
    betCount() {
      return this.cart.length;
    },
  },
  watch: {
    betAmountCombine(newAmount) {
      if (isNaN(newAmount)) {
        this.betAmountCombine = 0;
      }
    },
    betAmount(betId) {
      if (isNaN(newAmount)) {
        this.betAmountCombine = 0;
      }
    },
    potentialGainCombine() {
      return this.data.potentialGainCombine;
    },
    betCount(newCount) {
      this.nbBet[newCount - 1] = {
        amount: 0,
        cote: this.cart[newCount - 1].team1.cote,
      };
    },
    cart() {
      console.log("cart watch");
    },
  },
  methods: {
    betSimple() {

      if (this.isBetSimple == true) {
        this.isBetCombine = false;
      } else {
        this.isBetSimple = true;
        this.isBetCombine = false;
      }

      
    },
    betCombine() {
      if (this.isBetCombine == true) {
        this.isBetSimple = false;
      } else {
        this.isBetCombine = true;
        this.isBetSimple = false;
      }
    },
    removeToCart(team1, team2) {
      this.$store.dispatch({
        type: "removeToCart",
        bet: { team1, team2 },
      });
    },
    setAmount(data) {
      this.$store.dispatch({
        type: "setAmount",
        amount: parseInt(data.value, 10) || 0,
        betId: data.id,
      });
    },

    deleteChild(event) {
      console.log(event);
      this.nbBet.splice(event, 1);
    },
  },
  components: { BettiesSold, OneBet },
};
</script>

<style lang="scss" scoped>
.bets-type {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-bottom: 10px;
  div {
    width: 100%;
    text-align: center;
    padding-top: 10px;
    cursor: grab;
    border-top: 2px solid transparent;
    color: rgb(129, 129, 129);
    &.active {
      border-top: 2px solid lightgrey;
      color: rgb(223, 223, 223);
    }
  }
}
.bettie {
  position: absolute;
  width: 25px;
  top: 6px;
  right: -30px;
}

/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: linear-gradient(
    0.5turn,
    var(--v-darkPurple-base),
    var(--v-info-base),
    var(--v-secondary-base)
  );
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(
    0.5turn,
    var(--v-darkPurple-base),
    var(--v-info-base),
    var(--v-secondary-base)
  );
}

.card {
  .panier {
    position: sticky;
    display: flex;
    width: 100%;
    height: 80vh;
    left: 0;
    top: 110px;
    margin-bottom: 50px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;

    .card-title {
      display: flex;
      flex-direction: row;
      background: linear-gradient(
        0.25turn,
        var(--v-darkPurple-base),
        var(--v-info-base),
        var(--v-secondary-base)
      );
      text-transform: none;
      align-content: center;
      justify-content: space-between;
      align-items: center;
      padding: 16px;
      .panier-title {
        font-size: 36px;
        padding: 0;
      }
    }

    .card-container {
      overflow: hidden;
      height: 100%;
      .bets-main {
        height: inherit;
        padding: 15px 15px 0px 15px;
      }
      .bets-container {
        overflow: scroll;
        overflow-x: hidden;
        height: 288px;
        padding-right: 5px;

        .bet {
          background-color: rgba(255, 255, 255, 0.9);
          height: 70px;
          margin-bottom: 10px;
          border-radius: 6px;
        }
      }
    }

    .card-footer {
      margin-top: auto;
      padding: 10px;
      .card-footer-total {
        border-top: 2px solid lightgrey;
        padding-top: 10px;
        display: flex;
        justify-content: space-between;

        .card-footer-simple {
          display: flex;
          justify-content: space-between;
          width: 100%;
        }
        .card-footer-total-amount {
          margin-right: 30px;
          position: relative;
          .v-input {
            width: 100px;
            height: 23px;
            padding-top: 0px;

            .v-input__control {
              min-height: 20px;
            }
          }
        }
        .card-footer-total-amount-combine {
          position: relative;
          display: flex;
          width: 100%;
          justify-content: space-between;

          .v-input__slot {
            box-shadow: none;
            border: 1px solid white;
          }

          .card-footer-total-amount {
            .v-input {
              overflow: hidden;
              .v-input__control {
                min-height: 200px;
                .v-text-field__details {
                  display: none !important;
                }
              }
            }
            input {
              text-align: left;
            }
          }
        }
      }

      .card-footer-gain {
        display: flex;
        justify-content: space-between;
        color: #48a8e7;
        .card-footer-gain-amount {
          margin-right: 30px;
          position: relative;
        }
      }
      .card-footer-btn {
        margin-top: 15px;
        width: 100%;
        height: 50px;
        border-radius: 5px;
        background-color: #48a8e7;
      }
    }

    .bets {
      color: whitesmoke;
      padding: 10px 15px 0px 15px;
    }

    .title {
      justify-content: center;
      color: whitesmoke;
    }

    .bet-type {
      justify-content: center;
      margin-bottom: 20px;
      text-align: center;
    }
    .line {
      justify-content: center;
      height: 1px;
      background-color: white;
      width: 5%;
      margin: auto;
    }
    input {
      color: white;
      text-align: center;
      background-color: #1e1e1e9d;
    }
  }
}
</style>
