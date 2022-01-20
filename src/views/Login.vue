<template>
  <v-layout wrap class="mx-4">
    <v-flex xs12>
      <v-img
        :src="require('../assets/illustration.png')"
        max-width="250"
        class="ma-auto mt-10"
      />
    </v-flex>
    <v-flex xs12>
      <v-form ref="loginForm">
        <v-text-field
          outlined
          label="Email"
          v-model="email"
          :disabled="isLoading"
          :loading="isLoading"
        ></v-text-field>
        <v-text-field
          outlined
          label="Password"
          :type="showPassword ? 'text' : 'password'"
          v-model="password"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPassword = !showPassword"
          :disabled="isLoading"
          :loading="isLoading"
        ></v-text-field>
        <v-btn
          block
          color="primary"
          @click="doLogin"
          :disabled="isLoading"
          :loading="isLoading"
          >Login</v-btn
        >
        <p class="registerText">
          New to Sally? <a @click="doRegister">Sign up</a>
        </p>
      </v-form>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      showPassword: false,
      isLoading: false,
    };
  },
  methods: {
    doLogin() {
      console.warn("Melakukan Login!");
      this.isLoading = true;
    },
    doRegister() {
      console.warn("Melakukan Register");
    },
  },
};
</script>

<style scoped>
.v-btn {
  text-transform: none;
  letter-spacing: normal;
}
.registerText {
  text-align: center;
  margin-top: 8px;
}
</style>
