<template>
  <div class="register">
    <h1 class="primary--text">Register Pengguna Baru</h1>
    <v-form ref="registerForm" v-model="valid" lazy-validation>
      <v-col>
        <v-row class="input-field">
          <v-text-field
            id="username"
            label="Masukkan nama pengguna"
            outlined
            v-model="usernameInput"
            autocomplete="off"
            :rules="[
              (inputValue) => !!inputValue || `Nama pengguna harus diisi`,
              (inputValue) =>
                (inputValue && inputValue.length <= 10) ||
                'Nama pengguna tidak boleh lebih dari 10 karakter',
            ]"
          ></v-text-field>
        </v-row>
        <v-row class="input-field">
          <v-text-field
            id="email"
            label="Masukkan email"
            outlined
            v-model="emailInput"
            autocomplete="off"
            :rules="[
              (inputValue) => !!inputValue || 'E-mail harus diisi',
              (inputValue) =>
                /.+@.+\..+/.test(inputValue) || 'E-mail harus valid',
            ]"
          ></v-text-field>
        </v-row>
        <v-row class="input-field">
          <v-text-field
            id="password"
            label="Masukkan password baru"
            outlined
            v-model="passwordInput"
            type="password"
            :rules="[
              (inputValue) => !!inputValue || 'Password harus diisi',
              (inputValue) =>
                /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/g.test(inputValue) ||
                'Password harus valid',
            ]"
          ></v-text-field>
        </v-row>
        <p v-if="errorText" class="error-text">{{ errorText }}</p>
        <v-btn color="primary" @click="doRegister">Simpan</v-btn>
      </v-col>
    </v-form>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      valid: true,
      errorText: "",
      usernameInput: "",
      emailInput: "",
      passwordInput: "",
    };
  },
  methods: {
    async doRegister() {
      const registerForm = this.$refs.registerForm;
      registerForm.validate();

      if (!this.valid) return;

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
