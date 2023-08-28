import { createStore } from 'vuex';

export default createStore({
  state: {
    isAuth: false,
    accessToken: null,
    user: null
  },
  mutations: {
    setAuth(state, value) {
      state.isAuth = value;
    },
    setUser(state, value) {
      state.user = value;
    },
    setAccessToken(state, value) {
      state.accessToken = value;
    },
  },
  actions: {
    loginUser({ commit }, { accessToken }) {
      commit('setAccessToken', accessToken);
      commit('setAuth', true);
    },
    setUser({ commit }, { user }) {
      commit('setUser', user);
    },
  },
  getters: {
    isAuthenticated(state) {
      if (state.accessToken !== null && state.isAuth) {
        return true;
      }
      return false;
    },
    accessToken(state) {
      if (state.accessToken !== null) {
        return state.accessToken;
      }
      return null;
    },
  },
});


