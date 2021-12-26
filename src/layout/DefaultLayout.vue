<template>
  <div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/setting">Setting</router-link> |
      <router-link to="/user">User</router-link> |
      <router-link to="/pokemon">Pokemon</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "DefaultLayout",
  methods: {
    redirectTo(path) {
      this.$router.push(path);
    },
  },
};
</script>
