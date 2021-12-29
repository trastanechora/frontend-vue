const state = () => ({
  currentUser: {
    id: "",
    username: "",
    email: "",
  },
  userList: [],
});

const mutations = {
  setCurrentUser(state, { id, username, email }) {
    state.currentUser.id = id;
    state.currentUser.username = username;
    state.currentUser.email = email;
  },
  setUserList(state, param) {
    state.userList = param;
  },
};

const actions = {
  changeCurrentUser(store, user) {
    store.commit("setCurrentUser", user);
  },
  updateUserList(store, users) {
    store.commit("setUserList", users);
  },
};

export default {
  state,
  mutations,
  actions,
};
