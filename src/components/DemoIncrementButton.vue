<template>
  <div>
    <button @click="doIncrement">Tambah Hitungan</button>
  </div>
</template>

<script>
export default {
  name: "DemoIncrementButton",
  methods: {
    doIncrement() {
      this.$emit("update-counter");
    },
  },
};
</script>
