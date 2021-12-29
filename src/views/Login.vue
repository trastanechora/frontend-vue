<template>
  <div class="register">
    <h1>Register Pengguna Baru</h1>
    <div>
      <div class="input-field">
        <label for="email">Masukkan email: </label><br />
        <input id="email" type="email" v-model="emailInput" />
      </div>
      <div class="input-field">
        <label for="password-input">Masukkan password: </label><br />
        <input id="password-input" type="password" v-model="passwordInput" />
      </div>
      <p v-if="errorText" class="error-text">{{ errorText }}</p>
      <button @click="doLogin">Masuk</button>
    </div>
  </div>
</template>

<script>
import { validateEmail, validatePassword } from "@/utils/validator.js";

export default {
  name: "Login",
  data() {
    return {
      errorText: "",
      emailInput: "",
      passwordInput: "",
    };
  },
  methods: {
    async doLogin() {
      const isValid = this.validateUserInput();
      if (!isValid) return;

      const result = await this.$store.dispatch("auth/login", {
        email: this.emailInput,
        password: this.passwordInput,
      });

      if (result) {
        this.$router.push("/account");
      } else {
        this.errorText = this.$store.state.auth.info;
      }
    },
    validateUserInput() {
      // Reset Error Text
      this.errorText = "";

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
.input-field {
  margin-bottom: 8px;
}
</style>
