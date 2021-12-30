import axios from "axios";

const corsByPasser = "https://cors-anywhere.herokuapp.com";
const apiHost = `${corsByPasser}/http://restapi.adequateshop.com`;

const state = () => ({
  token: "",
  info: "",
});

const mutations = {
  setToken(state, param) {
    state.token = param;
  },
  setInfo(state, param) {
    state.info = param;
  },
};

const actions = {
  register(store, credentials) {
    return axios
      .post(`${apiHost}/api/authaccount/registration`, {
        name: credentials.username,
        email: credentials.email,
        password: credentials.password,
      })
      .then((response) => {
        if (response.data.message === "success") {
          return response;
        } else {
          store.commit("setInfo", response.data.message);
        }
      })
      .catch((error) => {
        store.commit("setInfo", error);
      });
  },
  login(store, credentials) {
    return axios
      .post(`${apiHost}/api/authaccount/login`, {
        email: credentials.email,
        password: credentials.password,
      })
      .then((response) => {
        if (response.data.message === "success") {
          store.commit("setToken", response.data.data.Token);
          store.commit(
            "user/setCurrentUser",
            {
              id: response.data.data.Id,
              username: response.data.data.Name,
              email: response.data.data.Email,
            },
            {
              root: true,
            }
          );
          return response;
        } else {
          store.commit("setInfo", response.data.message);
        }
      })
      .catch((error) => {
        store.commit("setInfo", error);
      });
  },
  logout(store) {
    store.commit("setToken", "");
    store.commit(
      "user/setCurrentUser",
      {
        id: "",
        username: "",
        email: "",
      },
      {
        root: true,
      }
    );
    return true;
  },
  checkUser(store, id) {
    return axios
      .get(`${apiHost}/api/users/${id}`, {
        headers: { Authorization: `Bearer ${store.state.token}` },
      })
      .then((response) => {
        if (response.data.message === "success") {
          store.commit("setToken", response.data.data.Token);
          store.commit(
            "user/setCurrentUser",
            {
              id: response.data.data.Id,
              username: response.data.data.Name,
              email: response.data.data.Email,
            },
            {
              root: true,
            }
          );
          return response;
        } else {
          store.commit("setInfo", response.data.message);
        }
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
