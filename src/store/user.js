export default {
  namespaced: true,
  state: {
    userInfo: {
      isAuthentified: false,
      data: null
    }
  },

  getters: {
    user(state) {
      return state.userInfo.data;
    },
    isAuthentified(state) {
      return state.userInfo.isAuthentified;
    },
    betties(state) {
      return state.userInfo.data.betties;
    }
  },

  mutations: {
    SET_IS_AUTHENTIFIED(state, isAuthentified) {
      state.userInfo.isAuthentified = isAuthentified;
    },
    SET_USER(state, data) {
      state.userInfo.data = data;
    },
    REMOVE_BETTIES(state, amount) {
      state.userInfo.data.betties -= amount;
    },
    ADD_BETTIES(state, amount) {
      state.userInfo.data.betties += amount;
    }
  },

  actions: {
    setUser({ commit }, { userInfo }) {
      commit("SET_IS_AUTHENTIFIED", userInfo !== null);
      if (userInfo) {
        commit("SET_USER", {
          ...userInfo
        });
      } else {
        commit("SET_USER", null);
      }
    },
    logout({ commit }) {
      commit("SET_IS_AUTHENTIFIED", false);
      commit("SET_USER", null);
    }
  }
};
