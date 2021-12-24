<template>
  <div class="home">
    <p>Angka dari store: {{ angkaDariStore }}</p>
    <p>{{ infoDariStore }}</p>
    <input type="number" v-model.number="newInputValue" />
    <button @click="changeAngka">Ganti Angka di Store</button>
  </div>
</template>

<script>
export default {
  name: "Home",
  computed: {
    angkaDariStore() {
      return this.$store.state.demo.angka;
    },
    infoDariStore() {
      return this.$store.state.demo.infoText;
    },
  },
  data() {
    return {
      newInputValue: 0,
    };
  },
  methods: {
    changeAngka() {
      this.$store.dispatch("demo/changeAngkaValue", this.newInputValue);
    },
  },
};
</script>
