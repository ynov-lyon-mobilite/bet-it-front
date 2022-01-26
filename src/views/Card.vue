<template>
  <v-card class="mx-auto panier" id="panier" max-width="344">
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
            :class="simple ? 'active' : ''"
            v-on:click="betSimple"
          >
            Simple
          </div>
          <div
            id="combine"
            :class="combine ? 'active' : ''"
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
              :simple="simple"
              @input="getAmount"
            ></OneBet>
          </v-card>
        </div>
      </div>
    </div>
    <div class="card-footer" id="card-footer">
      <div class="card-footer-total">
        <div class="card-footer-simple" v-if="simple">
          <div class="card-footer-total-text">Mise totale :</div>
          <div class="card-footer-total-amount">
            {{ this.betAmount }}
          </div>
        </div>
        <div v-else class="card-footer-total-amount">
          <v-text-field
            v-model="betAmountCombine"
            @input="getAmount"
            label="Mise :"
            solo
          ></v-text-field>
        </div>
      </div>
      <div class="card-footer-gain">
        <div class="card-footer-gain-text">Gain potentiel :</div>
        <div v-if="simple" class="card-footer-gain-amount">
          {{ this.potentialGain }}
        </div>
        <div v-else class="card-footer-gain-amount">
          {{ this.potentialGainCombine }}
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
    simple: true,
    combine: false,
    potentialGain: 0,
    potentialGainCombine: 0,
    multCote: 0,
    nbBet: []
  }),
  computed: {
    cart() {
      // Cart is correctly added
      return this.$store.state.cart;
    },
    betCount() {
      return this.cart.length;
    }
  },
  watch: {
    betCount(newCount) {
      this.nbBet[newCount - 1] = {
        amount: 0,
        cote: this.cart[newCount - 1].team1.cote
      };
    }
  },
  methods: {
    betSimple() {
      if (this.simple == true) {
        this.combine = false;
      } else {
        this.simple = true;
        this.combine = false;
      }
    },
    betCombine() {
      if (this.combine == true) {
        this.simple = false;
      } else {
        this.combine = true;
        this.simple = false;
      }
    },
    removeToCart(team1, team2) {
      this.$store.dispatch({
        type: "removeToCart",
        bet: { team1, team2 }
      });
    },

    getAmount(data) {
      this.nbBet[data.id] = {
        amount: parseInt(data.value, 10) || 0,
        cote: data.cote
      };

      if (this.simple) {
        this.setTotalAmount();
        this.setPotentialAmount();
      } else {
        console.log("ici");
        this.setPotentialAmountCombine();
      }
    },
    setTotalAmount() {
      this.betAmount = this.nbBet.reduce((sum, { amount }) => {
        return sum + amount;
      }, 0);
    },
    setPotentialAmount() {
      this.potentialGain = this.nbBet.reduce((sum, { amount, cote }) => {
        return sum + amount * cote;
      }, 0);
    },
    setPotentialAmountCombine() {
      this.multCote = this.nbBet.reduce((sum, { cote }) => {
        return sum * cote;
      }, 1);
      this.betAmountCombine = parseInt(this.betAmountCombine, 10);
      this.potentialGainCombine = this.betAmountCombine * this.multCote;
    }
  },
  components: { BettiesSold, OneBet }
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
        max-height: 370px;
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
      }

      .card-footer-gain {
        display: flex;
        justify-content: space-between;
        color: #48a8e7;
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
