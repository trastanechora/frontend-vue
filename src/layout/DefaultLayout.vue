<template>
  <div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/setting">Setting</router-link> |
      <router-link to="/user">User</router-link> |
      <router-link to="/pokemon">Pokemon</router-link> |
      <router-link to="/data">Data</router-link> |
      <router-link to="/validation">Validasi</router-link> |
      <router-link to="/register">Register</router-link> |
      <router-link to="/account">Account</router-link> |
      <router-link v-if="!isLogin" to="/login">Login</router-link>
      <a v-else @click="doLogout">Logout</a>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "DefaultLayout",
  methods: {
    doLogout() {
      this.$store.dispatch("auth/logout");
      this.$router.push("/login");
    },
  },
  computed: {
    isLogin() {
      if (this.$store.state.auth.token !== "") {
        return true;
      }
      return false;
    },
  },
};
</script>
