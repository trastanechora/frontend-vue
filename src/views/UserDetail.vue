<template>
  <div>
    <h1>Ini Halaman Detail Pengguna</h1>
    <h2>Dengan nomor identitas {{ id }}</h2>
  </div>
</template>

<script>
export default {
  name: "User",
  computed: {
    id() {
      return this.$route.params.id;
    },
  },
};
</script>
