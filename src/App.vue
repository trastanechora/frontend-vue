<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
	data() {
    return {
      pesan: 'Halo Vue! '
    }
  },
  computed: {
    pesanGanda() {
      return this.pesan + this.pesan;
    }
  },
  methods: {
    munculkanAlert() {
      alert(this.pesan);
    }
  },
  created() {
    console.log(this.pesanGanda);
  },
  mounted() {
    this.munculkanAlert();
  },
  watch: {
    pesan(nilaiBaru, nilaiLama) {
      console.log(`Pesan telah berubah dari ${nilaiLama} menjadi ${nilaiBaru}`);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
