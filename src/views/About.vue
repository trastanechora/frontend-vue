<template>
  <div class="about">
    <h1 class="primary--text">Ini Adalah Halaman Saya</h1>
    <v-layout wrap>
      <v-flex
        v-for="(angka, index) in [1, 2, 3, 4]"
        :key="index"
        class="pa-2"
        xs12
        sm6
        md4
        lg2
      >
        <v-skeleton-loader
          type="card-avatar, article, actions"
          class="elevation-1"
        ></v-skeleton-loader>
      </v-flex>
    </v-layout>
  </div>
</template>
