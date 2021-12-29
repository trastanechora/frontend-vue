<template>
  <div class="register">
    <h1>Register Pengguna Baru</h1>
    <div>
      <div class="input-field">
        <label for="username">Masukkan nama pengguna: </label><br />
        <input id="username" type="text" v-model="usernameInput" />
      </div>
      <div class="input-field">
        <label for="email">Masukkan email: </label><br />
        <input id="email" type="email" v-model="emailInput" />
      </div>
      <div class="input-field">
        <label for="password-input">Masukkan password baru: </label><br />
        <input id="password-input" type="password" v-model="passwordInput" />
      </div>
      <p v-if="errorText" class="error-text">{{ errorText }}</p>
      <button @click="doRegister">Simpan</button>
    </div>
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
.input-field {
  margin-bottom: 8px;
}
</style>
