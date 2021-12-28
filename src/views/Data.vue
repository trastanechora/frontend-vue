<template>
  <div class="home">
    <h1>Info Pengguna</h1>
    <p>Nama: {{ data.pengguna ? data.pengguna.name : "Tanpa Nama" }}</p>
    <p>Nomor Telepon: {{ data.user.phone }}</p>
    <input type="text" v-model="newInputValue" />
    <button @click="changeAngka">Ganti Nomor Telepon</button>
  </div>
</template>

<script>
export default {
  name: "Data",
  data() {
    return {
      newInputValue: 0,
      data: {
        user: {
          id: 1,
          name: "John Doe",
          gender: "male",
          phone: "08987654321",
        },
      },
    };
  },
  methods: {
    changeAngka() {
      this.user.phone = this.newInputValue;
    },
  },
};
</script>
