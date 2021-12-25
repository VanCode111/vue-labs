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
    const articles = await this.getArticles();
    this.articles = articles;
  },
  methods: {
    async getArticles() {
      const res = await fetch("articles.json");
      const articles = await res.json();
      return articles;
    },
  },
};
</script>

<style scoped lang="scss"></style>
