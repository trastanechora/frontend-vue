import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

import user from "./user";
import demo from "./demo";
import pokemon from "./pokemon";

Vue.use(Vuex);

const persistedDataState = createPersistedState({
  paths: ["demo"],
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
  },
});
