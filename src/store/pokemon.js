import axios from "axios";

const state = () => ({
  list: [],
  info: "",
});

const mutations = {
  setList(state, param) {
    state.list = param;
  },
  setInfo(state, param) {
    state.info = param;
  },
};

const actions = {
  fetchList(store) {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon`)
      .then((response) => {
        store.commit("setList", response.data.results);
        store.commit("setInfo", "");
      })
      .catch((error) => {
        store.commit("setInfo", error);
      });
  },
  fetchMore(store) {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon`, {
        params: {
          limit: 5,
          offset: store.state.list.length,
        },
      })
      .then((response) => {
        store.commit("setList", [
          ...store.state.list,
          ...response.data.results,
        ]);
        store.commit("setInfo", "");
      })
      .catch((error) => {
        store.commit("setInfo", error);
      });
  },
};

export default {
  state,
  mutations,
  actions,
};
