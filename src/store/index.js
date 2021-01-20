import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    betties: 150,
    betHistory: [],
  },
  mutations: {
    addBetties(state, amount) {
      state.betties += amount;
    },
    removeBetties(state, amount) {
      state.betties -= amount;
    },
    addBetToHistory(state, bet) {
      state.betHistory = [...state.betHistory, bet];
    },
  },
  actions: {
    betAction({ commit }, { bet }) {
      commit("addBetToHistory", bet);
      commit("removeBetties", bet.amount);
    },
  },
  modules: {},
});
