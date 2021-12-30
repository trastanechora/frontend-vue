<template>
  <div>
    <h1 class="primary--text">Ini Halaman Setting</h1>
    <v-btn @click="isDialogOpen = true" outlined>Buka Dialog</v-btn>
    <v-dialog
      v-model="isDialogOpen"
      transition="dialog-bottom-transition"
      max-width="600"
    >
      <v-card>
        <v-toolbar color="primary" dark>Dialog Pertamaku</v-toolbar>
        <v-card-text>
          <div class="text-h2 pa-12">Halo Dunia!</div>
        </v-card-text>
        <v-card-actions class="justify-end">
          <v-btn text @click="isDialogOpen = false">Tutup</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "Setting",
  data() {
    return {
      isDialogOpen: false,
    };
  },
};
</script>
