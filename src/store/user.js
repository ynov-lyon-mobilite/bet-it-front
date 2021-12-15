export default {
  namespaced: true,
  state: {
    userInfo: {
      isAuthentified: false,
      data: null
    }
  },

  getters: {
    getUser(state) {
      return state.userInfo;
    }
  },

  mutations: {
    SET_IS_AUTHENTIFIED(state, value) {
      state.userInfo.isAuthentified = value;
    },
    SET_USER(state, data) {
      state.userInfo.data = data;
    }
  },

  actions: {
    fetchUser({ commit }, { userInfo }) {
      commit("SET_IS_AUTHENTIFIED", userInfo !== null);
      if (userInfo) {
        commit("SET_USER", {
          email: userInfo.email
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
