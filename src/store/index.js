import Vue from "vue";
import Vuex from "vuex";

import events from "@/assets/fixtures/events";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    betties: 150,
    betHistory: [],
    fantasyTeam: null,
    event: {},
    events
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

    setEvent(state, event) {
      state.event = event;
    },
    setFantasyTeam(state, team) {
      state.fantasyTeam = team;
    }
  },

  actions: {
    betAction({ commit }, { bet }) {
      commit("addBetToHistory", bet);
      commit("removeBetties", bet.amount);
    },
    validateTeam({ commit }, { team }) {
      commit("setFantasyTeam", team);
    },
    getEventId({ commit, state }, eventId) {
      state.events.forEach(event => {
        if (event.id == eventId) {
          commit("setEvent", event);
        }
      });
    }
  },

  modules: {}
});
