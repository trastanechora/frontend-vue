import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

import user from "./user";
import demo from "./demo";
import pokemon from "./pokemon";
import auth from "./auth";

Vue.use(Vuex);

const persistedDataState = createPersistedState({
  paths: ["demo", "auth.token"],
});

export default new Vuex.Store({
  plugins: [persistedDataState],
  modules: {
    demo: {
      namespaced: true,
      ...demo,
    },
    user: {
      namespaced: true,
      ...user,
    },
    pokemon: {
      namespaced: true,
      ...pokemon,
    },
    auth: {
      namespaced: true,
      ...auth,
    },
  },
});
