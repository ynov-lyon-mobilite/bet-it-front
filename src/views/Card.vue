<template>
  <v-card class="mx-auto panier" id="panier" max-width="344">
    <div class="card-title">
      <v-card-title class="panier-title">
        Panier
      </v-card-title>

      <div>
        <BettiesSold></BettiesSold>
      </div>
    </div>

    <div class="cart-container" id="cart-container">
      <div class="bets-main">
        <div class="bet" v-for="bet in cart" :key="bet.id">
          <div class="bet-container-grid">
            <div class="bet-container-team1">
              <img
                contain
                :src="bet.team1.logo"
                width="55"
                height="55"
                class=""
              />
              <div class="team1-title">
                {{ bet.team1.name }}
              </div>
            </div>
            <div class="bet-container-team2">
              <img
                contain
                :src="bet.team2.logo"
                width="55"
                height="55"
                class=""
              />
              <div class="team2-title">
                {{ bet.team2.name }}
              </div>
            </div>
          </div>
          <input class="container-input" placeholder="42 " />
          <img class="bettie" src="../assets/monney/tas.svg" />
          <div class="bet-type">Gagnant : {{ bet.team1.name }}</div>
          <div class="line"></div>
        </div>
      </div>

      <div class="cart-footer" id="cart-footer">
        <button type="button" class="btn-bet-container">Parier</button>
      </div>
    </div>
  </v-card>
</template>

<script>
import BettiesSold from "../components/BettiesSold.vue";

export default {
  data: () => ({
    show: false,
  }),
  computed: {
    cart() {
      console.log(this.$store.state.cart);
      // Cart is correctly added
      return this.$store.state.cart;
    },
  },
  components: { BettiesSold },
};
</script>

<style lang="scss" scoped>
.bet-container-grid {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas: ". .";
}

.cart-footer {
  display: none;
  position: fixed;
  height: 100px;
  bottom: 20px;
  right: 40px;
  width: 330px;
  background-color: linear-gradient(
    0.25turn,
    var(--v-darkPurple-base),
    var(--v-info-base),
    var(--v-secondary-base)
  );
}
.bettie {
  width: 25px;
  height: 25px;
  position: absolute;
  top: 17px;
  left: 175px;
}
.container-input {
  position: absolute;
  top: 17px;
  left: 110px;
  padding-right: 5px;
  background-color: linear-gradient(
    0.25turn,
    var(--v-darkPurple-base),
    var(--v-info-base),
    var(--v-secondary-base)
  );
  width: 20%;
  color: black;
  margin: 0 auto;
  border-bottom: 1px solid white;
  input:focus,
  textarea:focus,
  select:focus {
    outline: none;
  }
}

.bets-main {
  position: relative;
  padding: 0px 15px;
}

.bet {
  position: relative;
  margin-top: 10px;
}

.bet-container-team1 {
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
  flex-wrap: nowrap;
  img {
    margin-right: 10px;
  }

  .team1-title {
    text-align: center;
    color: linear-gradient(
      0.25turn,
      var(--v-darkPurple-base),
      var(--v-info-base),
      var(--v-secondary-base)
    );
  }
}
.bet-container-team2 {
  display: flex;
  justify-content: flex-start;
  flex-direction: row-reverse;
  align-items: center;
  flex-wrap: nowrap;
  img {
    margin-left: 10px;
  }
  .team2-title {
    text-align: center;
  }
}

.panier-title {
  font-size: 36px;
  padding: 0;
}
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
#panier {
  overflow: scroll;
  overflow-x: hidden;
  position: sticky;
  width: 100%;
  height: 80vh;
  left: 0;
  top: 110px;
  margin-bottom: 50px;

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
</style>
