<template>
  <div class="validation">
    <h1>Ini Halaman Validasi</h1>
    <!-- <form>
      <div>
        <label for="name">Ketik nama (Wajib isi): </label>
        <input id="name" name="name" required />
      </div>
      <button type="submit">Simpan</button>
    </form> -->

    <!-- <form>
      <div>
        <label for="name">Ketik e-mail (Wajib isi): </label>
        <input type="email" id="mail" name="mail" required minlength="8" />
      </div>
      <button type="submit">Simpan</button>
    </form> -->

    <!-- <div>
      <div>
        <label for="number-input">Ketik angka 1 - 10: </label>
        <input id="number-input" type="number" v-model="numberInput" />
      </div>
      <p v-if="errorText">{{ errorText }}</p>
      <button @click="validateNumberInput">Cek</button>
      <button @click="resetNumberInput">Hapus</button>
    </div> -->
    <div>
      <div>
        <label for="password-input">Masukkan password baru: </label>
        <input id="password-input" type="password" v-model="passwordInput" />
      </div>
      <p v-if="errorText" class="error-text">{{ errorText }}</p>
      <button @click="validatePassword">Cek</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Validation",
  data() {
    return {
      numberInput: 0,
      errorText: "",
      passwordInput: "",
    };
  },
  methods: {
    validateNumberInput() {
      if (this.numberInput < 1 || this.numberInput > 10) {
        this.errorText = "Hanya boleh masukkan angka 1 sampai 10";
      } else {
        this.errorText = "";
      }
    },
    resetNumberInput() {
      this.numberInput = 0;
      this.errorText = "";
    },
    validatePassword() {
      const regularExpression = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/g;
      const result = regularExpression.test(this.passwordInput);
      if (result) {
        this.errorText = "";
      } else {
        this.errorText =
          "Password harus minimal 8 karakter yang terdiri dari huruf kapital, non-kapital dan angka";
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
</style>
