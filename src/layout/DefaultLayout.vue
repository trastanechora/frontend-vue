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
    <v-layout>
      <p>Ganti Warna Tema:</p>
      <v-flex>
        <v-btn color="#1976D2" outlined @click="changeTheme('#1976D2')"
          >Biru</v-btn
        >
      </v-flex>
      <v-flex>
        <v-btn color="#39ac37" outlined @click="changeTheme('#39ac37')"
          >Hijau</v-btn
        >
      </v-flex>
      <v-flex>
        <v-btn color="#db9600" outlined @click="changeTheme('#db9600')"
          >Oranye</v-btn
        >
      </v-flex>
      <v-flex>
        <v-btn depressed small fab @click="switchTheme">
          <v-icon>mdi-theme-light-dark</v-icon>
        </v-btn>
      </v-flex>
    </v-layout>

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
    changeTheme(color) {
      if (this.$vuetify.theme.dark) {
        this.$vuetify.theme.themes.dark.primary = color;
      } else {
        this.$vuetify.theme.themes.light.primary = color;
      }
    },
    switchTheme() {
      if (this.$vuetify.theme.dark) {
        this.$vuetify.theme.themes.light.primary =
          this.$vuetify.theme.themes.dark.primary;
      } else {
        this.$vuetify.theme.themes.dark.primary =
          this.$vuetify.theme.themes.light.primary;
      }
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
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
