<template>
  <v-card class="mx-auto panier" id="panier" width="350">
    <div class="card-title">
      <v-card-title class="panier-title"> Panier </v-card-title>

      <div>
        <BettiesSold></BettiesSold>
      </div>
    </div>

    <div class="card-container" id="card-container">
      <div class="bets-status">
        <div
          id="bets-step1"
          :class="`bets-status-step1 ${isStep1 && 'active'}`"
          v-on:click="goToStep1"
        >
          En attente
        </div>
        <div
          id="bets-step2"
          :class="`bets-status-step2 ${isStep2 && 'active'}`"
          v-on:click="goToStep2"
        >
          En cours
        </div>
        <div
          id="bets-step3"
          :class="`bets-status-step3 ${isStep3 && 'active'}`"
          v-on:click="goToStep3"
        >
          Historique
        </div>
      </div>
      <div :class="`bets-main step1 ${isStep1 && 'active'}`">
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
              :isStep1="isStep1"
              @input="setAmount"
              @clicked="deleteChild"
            ></OneBet>
          </v-card>
        </div>
      </div>
      <div :class="`bets-main step2 ${isStep2 && 'active'}`">
        <div class="bets-container">
          <v-card>
            <OneBet
              class="bet step2"
              v-for="(bet, idx) in pendingBet"
              :id="idx"
              :key="bet.id"
              :bet="bet"
              :isBetSimple="isBetSimple"
              :isStep1="isStep1"
              :amout="bet.amout"
              @clicked="deleteChild"
            ></OneBet>
          </v-card>
        </div>
      </div>
    </div>
    <div :class="`card-footer ${isStep1 && 'active'}`" id="card-footer">
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
            <v-text-field v-model="betAmountCombine" height="20"></v-text-field>
            <img class="bettie" src="../assets/monney/tas.svg" />
          </div>
        </div>
      </div>
      <div v-if="!isBetSimple" class="card-footer-cote">
        <span>Côte total :</span>
        <span>{{ totalOdds }}</span>
      </div>

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
      <button type="button" class="card-footer-btn" v-on:click="saveBets">
        Parier
      </button>
    </div>
  </v-card>
</template>

<script>
import BettiesSold from "../components/BettiesSold.vue";
import OneBet from "@/views/OneBet";

export default {
  data: () => ({
    betAmount: 0,
    betAmountCombine: 0,
    show: false,
    isBetSimple: true,
    isBetCombine: false,
    isStep1: true,
    isStep2: false,
    isStep3: false,
    potentialGain: 0,
    potentialGainCombine: 0,
    multCote: 0,
    nbBet: [],
    pendingBet: [],
  }),
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    totalAmount() {
      return this.cart.reduce((total, bet) => total + bet.amount, 0);
    },
    totalOdds() {
      return this.cart.reduce((total, bet) => total * bet.team1.cote, 1);
    },
    totalPotentialGain() {
      return this.cart.reduce(
        (total, bet) => total + bet.amount * bet.team1.cote,
        0
      );
    },
    totalPotentialGainCombine() {
      return this.totalOdds * this.betAmountCombine;
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
    goToStep1() {
      this.isStep1 = true;
      this.isStep2 = false;
      this.isStep3 = false;
    },
    goToStep2() {
      this.isStep2 = true;
      this.isStep1 = false;
      this.isStep3 = false;
    },
    goToStep3() {
      this.isStep3 = true;
      this.isStep1 = false;
      this.isStep2 = false;
    },
    removeAllInArray(array) {
      array.length = 0;
    },
    // setTotalAmount(data){
    //   return this.data.totalAmount = data;
    // },
    resetData() {
      this.totalAmount = 0;
      this.totalOdds = 0;
      this.totalPotentialGain = 0;
      this.totalPotentialGainCombine = 0;
    },
    saveBets() {
      this.pendingBet = [...this.cart, ...this.pendingBet];
      this.resetData();
      this.removeAllInArray(this.cart);
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
  border: 1px solid grey;
  border-radius: 25px;
  font-size: 12px;
  div {
    &.active {
      color: white !important;
    }
  }

  #combine {
    display: flex;
    align-items: center;
    justify-content: center;
    &:before {
      content: "";
      width: 100%;
      height: 100%;
      display: block;
      z-index: -1;
      background: linear-gradient(
        0.5turn,
        var(--v-darkPurple-base),
        var(--v-info-base),
        var(--v-secondary-base)
      );
      padding: 4px 0px;
      border-radius: 25px;
      position: absolute;
      transform: translate(-160px);
      transition: 0.3s ease-out;
    }
    &.active {
      &:before {
        transform: translate(0px);
        transition: 0.3s ease-out;
      }
    }
  }
  div {
    width: 100%;
    padding: 4px 0px;
    text-align: center;
    position: relative;
    cursor: pointer;
    color: rgb(129, 129, 129);
    transition: 0.3s ease-out;
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

      .bets-status {
        padding: 0px 5px;
        display: flex;
        justify-content: space-between;
        cursor: pointer;
        font-size: 12px;
        div {
          padding: 4px 10px;
          width: 100%;
          text-align: center;
          border-bottom: 2px solid rgba(255, 255, 255, 0);
          color: #818181;
          &.active {
            border-bottom: 2px solid lightgrey;
            color: #dfdfdf;
          }
        }
      }
      .bets-main {
        height: inherit;
        padding: 15px 15px 0px 15px;

        &.step1 {
          &.false {
            display: none;
          }
        }
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
      font-size: 14px;
      &.false {
        display: none;
      }
      .card-footer-cote {
        display: flex;
        justify-content: space-between;
      }
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
