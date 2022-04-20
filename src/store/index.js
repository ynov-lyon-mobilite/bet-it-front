import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import fantasy from "./fantasy";
import user from "./user";
import { doc, updateDoc, getFirestore } from "firebase/firestore";
import events from "@/assets/fixtures/events";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [],
    betHistory: [],
    room: [],
    event: {},
    token: {},
    events
  },

  modules: {
    fantasy,
    user
  },

  mutations: {
    addBetties(state, amount) {
      state.user.betties += amount;
    },
    ADD_TO_CART(state, bet) {
      state.cart = [...state.cart, bet];
    },
    SET_AMOUNT(state, { amount, betId }) {
      state.cart[betId].amount = amount;
    },
    REMOVE_TO_CART(state, id) {
      state.cart.splice(id, 1);
    },
    ADD_VALUE_TO_BET(state, bet) {
      state.cart = [...state.cart, bet];
    },
    removeFakeBetties(state, amount) {
      state.betties -= amount;
    },
    addBetToHistory(state, bet) {
      state.betHistory = [...state.betHistory, bet];
    },
    setEvent(state, event) {
      state.event = event;
    },
    setRoom(state, room) {
      state.rooms = [...state.rooms, room];
    },
    setTeam(state, team) {
      state.teams = [...state.teams, team];
    },
    setFantasyTeam(state, team) {
      state.fantasyTeam = team;
    }
  },

  actions: {
    async betAction({ commit, rootGetters }, { bet }) {
      commit("addBetToHistory", bet);
      commit("user/REMOVE_BETTIES", bet.amount, { root: true });
      const user = rootGetters["user/user"];
      const db = getFirestore();
      const userRef = doc(db, "users", user.id);
      await updateDoc(userRef, {
        betties: user.betties
      });
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
    },
    addToCart({ commit }, { bet }) {
      commit("ADD_TO_CART", bet);
    },
    setAmount({ commit }, { amount, betId }) {
      commit("SET_AMOUNT", { amount, betId });
    },
    removeToCart({ commit }, { id }) {
      commit("REMOVE_TO_CART", id);
    },
    addBetValue({ commit }, { bet }) {
      commit("ADD_VALUE_TO_BET", bet);
    },

    addRoom(context, room) {
      context.commit("setRoom", room);
    },

    addTeam(context, team) {
      context.commit("setTeam", team);
    }
  }
});
