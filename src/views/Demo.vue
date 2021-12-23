<template>
  <div class="demo">
    <DemoComponent
      :pesan="pesanSingkat"
      :jumlahHitungan="jumlahHitunganSaatIni"
      :apakahSelesai="apakahSudahSelesai"
      :alamat="alamatLengkap"
      :list="listNominasiPenghargaan"
    />
    <DemoIncrementButton @update-counter="updateCounterValue" />
  </div>
</template>

<script>
import DemoComponent from "@/components/DemoComponent.vue";
import DemoIncrementButton from "@/components/DemoIncrementButton.vue";

export default {
  name: "Demo",
  components: {
    DemoComponent,
    DemoIncrementButton,
  },
  data() {
    return {
      pesanSingkat: "Halo Vue",
      jumlahHitunganSaatIni: 0,
      apakahSudahSelesai: false,
      alamatLengkap: {
        titikLokasi: "Indonesia",
      },
      listNominasiPenghargaan: [
        "Vue Cepat",
        "Vue Mudah Dipelajari",
        "Vue Menyenangkan",
      ],
    };
  },
  methods: {
    updateCounterValue() {
      this.jumlahHitunganSaatIni += 1;
    },
  },
};
</script>
