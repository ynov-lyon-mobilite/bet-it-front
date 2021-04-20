export default {
  namespaced: true,
  state: {
    fantasyTeam: null
  },

  actions: {
    validateTeam({ commit }, { team }) {
      commit("setFantasyTeam", team);
    }
  },

  mutations: {
    setFantasyTeam(state, team) {
      state.fantasyTeam = team;
    }
  }
};
