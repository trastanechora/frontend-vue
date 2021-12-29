<template>
  <div class="register">
    <h1 class="primary--text">Register Pengguna Baru</h1>
    <v-col>
      <v-row class="input-field">
        <v-text-field
          id="username"
          label="Masukkan nama pengguna"
          outlined
          v-model="usernameInput"
          autocomplete="off"
        ></v-text-field>
      </v-row>
      <v-row class="input-field">
        <v-text-field
          id="email"
          label="Masukkan email"
          outlined
          v-model="emailInput"
          autocomplete="off"
        ></v-text-field>
      </v-row>
      <v-row class="input-field">
        <v-text-field
          id="password"
          label="Masukkan password baru"
          outlined
          v-model="passwordInput"
        ></v-text-field>
      </v-row>
      <p v-if="errorText" class="error-text">{{ errorText }}</p>
      <v-btn color="primary" @click="doRegister">Simpan</v-btn>
    </v-col>
  </div>
</template>

<script>
import {
  validateUsername,
  validateEmail,
  validatePassword,
} from "@/utils/validator.js";

export default {
  name: "Register",
  data() {
    return {
      errorText: "",
      usernameInput: "",
      emailInput: "",
      passwordInput: "",
    };
  },
  methods: {
    async doRegister() {
      const isValid = this.validateUserInput();
      if (!isValid) return;

      const result = await this.$store.dispatch("auth/register", {
        username: this.usernameInput,
        email: this.emailInput,
        password: this.passwordInput,
      });

      if (result) {
        this.$router.push("/login");
      } else {
        this.errorText = this.$store.state.auth.info;
      }
    },
    validateUserInput() {
      // Reset Error Text
      this.errorText = "";

      // Validate Username Input
      const { isUsernameValid, usernameErrorText } = validateUsername(
        this.usernameInput
      );
      if (!isUsernameValid) {
        this.errorText = usernameErrorText;
        return false;
      }
      // Validate Email Input
      const { isEmailValid, emailErrorText } = validateEmail(this.emailInput);
      if (!isEmailValid) {
        this.errorText = emailErrorText;
        return false;
      }
      // Validate Password Input
      const { isPasswordValid, passwordErrorText } = validatePassword(
        this.passwordInput
      );
      if (!isPasswordValid) {
        this.errorText = passwordErrorText;
        return false;
      }

      return true;
    },
  },
};
</script>

<style scoped>
.validation {
  text-align: left;
}
.error-text {
  color: red;
}
.input-field,
h1 {
  margin-bottom: 8px;
}
</style>
