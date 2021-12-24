const state = () => ({
  currentUser: {
    uuid: "",
    username: "",
    displayName: "",
    role: "user",
    imgUrl: "",
  },
  userList: [],
});

const mutations = {
  setCurrentUser(state, param) {
    state.currentUser = param;
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
