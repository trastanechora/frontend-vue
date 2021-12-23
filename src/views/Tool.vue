<template>
  <div class="demo">
    <input type="number" v-model.number="variabelSatu" />
    <input type="number" v-model.number="variabelDua" />
    <p>Hasil: {{ hasil }}</p>
    <button @click="lakukanPenjumlahan">Tambah</button>
    <button @click="lakukanPengurangan">Kurang</button>
  </div>
</template>

<script>
import { penambahan, pengurangan } from "@/utils/operasi-matematika";

export default {
  name: "Tool",
  data() {
    return {
      variabelSatu: 0,
      variabelDua: 0,
      hasil: 0,
    };
  },
  methods: {
    lakukanPenjumlahan() {
      this.hasil = penambahan(this.variabelSatu, this.variabelDua);
    },
    lakukanPengurangan() {
      this.hasil = pengurangan(this.variabelSatu, this.variabelDua);
    },
  },
};
</script>
