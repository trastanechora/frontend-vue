<template>
  <div class="home">
    <h1>List Pokemon:</h1>
    <ul id="example-1">
      <li v-for="pokemon in listPokemon" :key="pokemon.name">
        {{ pokemon.name }}
      </li>
    </ul>
    <p>{{ infoPokemon }}</p>
    <button @click="fetchMorePokemon">Muat Lebih banyak</button>
  </div>
</template>

<script>
export default {
  name: "Pokemon",
  computed: {
    listPokemon() {
      return this.$store.state.pokemon.list;
    },
    infoPokemon() {
      return this.$store.state.pokemon.info;
    },
  },
  methods: {
    fetchPokemon() {
      this.$store.dispatch("pokemon/fetchList");
    },
    fetchMorePokemon() {
      this.$store.dispatch("pokemon/fetchMore");
    },
  },
  mounted() {
    this.fetchPokemon();
  },
};
</script>

<style scoped>
ul {
  text-align: left;
}
</style>
