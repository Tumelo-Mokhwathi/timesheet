import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentUser: null,
    loading: false
  },
  getters: {
    CurrentUser: stateParam => stateParam.currentUser,
    Loading: stateParam => stateParam.loading
  },
  actions: {},
  mutations: {
    setCurrentUser: (state, payload) => {
      state.currentUser = payload;
    }
  }
});
