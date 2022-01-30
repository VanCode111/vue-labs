<template>
  <div class="home-page">
    <Header />
    <div class="container">
      <Articles :articles="articles" />
    </div>
  </div>
</template>

<script>
import Articles from "../components/Articles.vue";
import Header from "../components/Header.vue";
import { fetchArticles } from "../utils/api";

export default {
  name: "NewsPage",
  data: () => {
    return {
      articles: [],
    };
  },
  props: {
    msg: String,
  },
  components: {
    Articles,
    Header,
  },
  async mounted() {
    this.articles = await fetchArticles();
  },
  methods: {},
};
</script>

<style scoped lang="scss"></style>
