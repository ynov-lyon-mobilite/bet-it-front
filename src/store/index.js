import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

import fantasy from "./fantasy";

import events from "@/assets/fixtures/events";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    betties: 250,
    user: [],
    betHistory: [],
    room: [],
    event: {},
    token: {},
    events
  },

  modules: {
    fantasy
  },

  mutations: {
    addBetties(state, amount) {
      state.user.betties += amount;
    },
    removeBetties(state, amount) {
      state.user.betties -= amount;
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
    setUser(state, user) {
      state.user = user;
    },
    setToken(state, token) {
      state.token = token;
    },

    setRoom(state, room) {
      state.room = room;
    }
  },

  actions: {
    betAction({ commit }, { bet }) {
      commit("addBetToHistory", bet);
      commit("removeBetties", bet.amount);
    },
    getEventId({ commit, state }, eventId) {
      state.events.forEach(event => {
        if (event.id == eventId) {
          commit("setEvent", event);
        }
      });
    },

    addRoom(context, room) {
      context.commit("setRoom", room);
    },

    async getAuth({ commit, dispatch }, user) {
      await axios
        .post("/api/auth", {
          email: user.email,
          password: user.password
        })
        .then(response => {
          axios.defaults.headers.common = {
            Authorization: `bearer ${response.data.token}`
          };
          commit("setToken", response.data.token);
          dispatch("getUserById", response.data.data.id);
        })

        .catch(function(error) {
          return Promise.reject(error);
        });
    },

    async getUserById(context, id) {
      await axios
        .get("api/users/" + id)
        .then(response => {
          context.commit("setUser", response.data);
        })
        .catch(function(error) {
          return Promise.reject(error);
        });
    },
    async addUser(context, user) {
      await axios
        .post("/api/users", {
          email: user.email,
          roles: ["ROLE_USER"],
          password: "",
          plainPassword: user.plainPassword,
          firstName: user.firstName,
          lastName: user.lastName,
          betties: 2,
          pseudo: user.pseudo,
          PhoneNumber: user.PhoneNumber,
          sexe: user.sexe,
          birthday: user.birthday
        })
        .then(response => {
          context.commit("setUser", response.data);
        })
        .catch(function(error) {
          return Promise.reject(error);
        });
    },

    async PutBetties(context, user) {
      await axios
        .put("/api/users/" + user.id, {
          betties: user.betties,
          id: user.id
        })
        .then(response => {
          context.commit("setUser", response.data);
        });
    }
  }
});
