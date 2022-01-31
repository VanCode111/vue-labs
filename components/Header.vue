<template>
  <header class="header">
    <v-app-bar color="deep-purple accent-4" dense dark>
      <img src="~/assets/logo.svg" alt="logo" />
      <v-btn outlined class="ml-3" to="/news">News</v-btn>
      <v-btn outlined class="ml-3" to="/">Home</v-btn>
      <v-btn outlined class="ml-3" to="/gallery">Gallery</v-btn>
      <v-text-field
        class="ml-3 mt-6"
        label="Поиск"
        prepend-icon="mdi-magnify"
      ></v-text-field>
    </v-app-bar>
  </header>
</template>

<style scoped lang="scss">
.router-link {
  text-decoration: none;
  color: white;
}
</style>
