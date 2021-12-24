<template>
  <div class="home-page">
    <div class="container">
      <v-btn> Кнопка </v-btn>
      <Articles :articles="articles" />
    </div>
  </div>
</template>

<script>
import Articles from "../components/Articles.vue";

export default {
  name: "HomePage",
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
