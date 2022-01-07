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
          <v-card class="bet" v-for="bet in cart" :key="bet.id">
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
              <div class="bet-body-amount">
                <input class="bet-body-input" placeholder="0" />
                <img class="bettie" src="../assets/monney/tas.svg" />
              </div>
              <div class="bet-body-delete" :click="removeToCard">X</div>
            </div>
          </v-card>
        </div>
      </div>
    </div>
    <div class="card-footer" id="card-footer">
      <div class="card-footer-total">
        <div class="card-footer-total-text">Mise totale :</div>
        <div class="card-footer-total-amount">0</div>
      </div>
      <div class="card-footer-gain">
        <div class="card-footer-gain-text">Gain potentiel :</div>
        <div class="card-footer-gain-amount">0</div>
      </div>
      <button type="button" class="card-footer-btn">Parier</button>
    </div>
  </v-card>
</template>

<script>
// import func from "vue-editor-bridge";
import BettiesSold from "../components/BettiesSold.vue";

export default {
  data: () => ({
    betAmount: null,
    show: false,
    simple: true,
    combine: false
  }),
  computed: {
    cart() {
      console.log(this.$store.state.cart);
      // Cart is correctly added
      return this.$store.state.cart;
    }
    // gain() {
    //   return this.betAmount * this.bet.team1.cote;
    // }
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
    removeToCard(team1, team2) {
      this.$store.dispatch({
        type: "addToCart",
        bet: { team1, team2 }
      });
    }
  },
  components: { BettiesSold }
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
