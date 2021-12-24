<template>
  <div class="article">
    <h5 class="article__name">{{ article && article.name }}</h5>
    <p class="article__desc">{{ article && article.desc }}</p>
    <p class="article__date">{{ article && article.date }}</p>
    <router-link :to="`/article/${article && article.id}`" class="button"
      >Открыть статью</router-link
    >
  </div>
</template>

<script>
export default {
  name: "Article",
  props: {
    article: Object,
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
