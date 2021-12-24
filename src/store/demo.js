const state = () => ({
  angka: 14,
  infoText: "Angka Lebih besar dari sepuluh",
});

const mutations = {
  setAngka(state, param) {
    state.angka = param;
  },
  setInfo(state, param) {
    state.infoText = param;
  },
};

const actions = {
  changeAngkaValue(store, param) {
    store.commit("setAngka", param);
    if (param > 10) {
      store.commit("setInfo", "Angka Lebih besar dari sepuluh");
    } else {
      store.commit("setInfo", "Angka Lebih kecil dari sepuluh");
    }
  },
};

export default {
  state,
  mutations,
  actions,
};
