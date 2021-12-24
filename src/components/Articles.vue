<template>
  <div class="articles">
    <Article
      class="articles__article"
      v-for="article in articles"
      :key="article.id"
      :article="article"
    />
  </div>
</template>

<script>
import Article from "./Article.vue";

export default {
  name: "Articles",
  props: {
    articles: Array,
  },
  components: {
    Article,
  },
};
</script>

<style scoped lang="scss">
.articles__article {
  margin-top: 15px;
}
</style>
