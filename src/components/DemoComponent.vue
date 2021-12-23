<template>
  <div>
    <h1>{{ pesan }}</h1>
    <p>Jumlah Hitungan saat ini: {{ jumlahHitungan }}</p>
    <p>Apakah sudah ditutup: {{ apakahSelesai ? "Sudah" : "Belum" }}</p>
    <p>Alamat Lokasi: {{ alamat.titikLokasi }}</p>
    <p>Daftar nominasi yang tersedia: {{ list }}</p>
  </div>
</template>

<script>
export default {
  name: "DemoComponent",
  props: {
    pesan: String,
    jumlahHitungan: Number,
    apakahSelesai: Boolean,
    alamat: Object,
    list: Array,
  },
};
</script>
