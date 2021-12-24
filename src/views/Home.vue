<template>
  <div class="home">
    <p>Angka dari store: {{ angkaDariStore }}</p>
  </div>
</template>

<script>
export default {
  name: "Home",
  computed: {
    angkaDariStore() {
      return this.$store.state.angka;
    },
  },
};
</script>
