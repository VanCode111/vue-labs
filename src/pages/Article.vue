<template>
  <div class="article">
    <Article :v-if="article" :article="article" />
  </div>
</template>

<script>
import Article from "../components/Article.vue";

export default {
  name: "Articles",
  data: () => {
    return {
      article: null,
    };
  },
  components: {
    Article,
  },
  async mounted() {
    const id = this.$route.params.id;
    const articles = await this.getArticles();
    const article = this.getArticle(articles, id);
    this.article = article;
    console.log(article);
  },
  methods: {
    async getArticles() {
      const res = await fetch("/articles.json");
      const articles = await res.json();
      return articles;
    },
    getArticle(articles, id) {
      let article = null;
      for (let i = 0; i < articles.length; i++) {
        if (articles[i].id == id) {
          article = articles[i];
          break;
        }
      }
      this.article = article;
      return article;
    },
  },
};
</script>

<style scoped lang="scss">
.article {
  background-color: #fff;
  border-radius: 18px;
  padding: 15px;
  &__name {
    font-size: 20px;
  }
}
.button {
  border-radius: 10px;
  color: white;
  background-color: rgb(85, 85, 255);
  border: none;
  cursor: pointer;
  padding: 15px;
  display: block;
  text-decoration: none;
  font-family: sans-serif;
  font-size: 15px;
}
</style>
