<template>
  <div class="home-page">
    <Header />
    <div class="container">
      <h1>Hello there!</h1>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";

export default {
  name: "HomePage",
  components: {
    Header,
  },
};
</script>

<style scoped lang="scss"></style>
