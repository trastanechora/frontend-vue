import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    angka: 14,
    infoText: "Angka Lebih besar dari sepuluh",
  },
  mutations: {
    setAngka(state, param) {
      state.angka = param;
    },
    setInfo(state, param) {
      state.infoText = param;
    },
  },
  actions: {
    changeAngkaValue(store, param) {
      store.commit("setAngka", param);
      if (param > 10) {
        store.commit("setInfo", "Angka Lebih besar dari sepuluh");
      } else {
        store.commit("setInfo", "Angka Lebih kecil dari sepuluh");
      }
    },
  },
});
