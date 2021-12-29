<template>
  <div>
    <h1>Ini Halaman Detail Pengguna</h1>
    <h2>Atas name: {{ username }}</h2>
    <h2>email: {{ email }}</h2>
  </div>
</template>

<script>
export default {
  name: "Account",
  computed: {
    username() {
      return this.$store.state.user.currentUser.username;
    },
    email() {
      return this.$store.state.user.currentUser.email;
    },
  },
  mounted() {
    this.$store.dispatch(
      "auth/checkUser",
      this.$store.state.user.currentUser.id
    );
  },
};
</script>
