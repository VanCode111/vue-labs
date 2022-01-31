<template>
  <div class="article">
    <Header />
    <v-container v-if="article">
      <h2>{{ article.name }}</h2>
      <v-img :src="require(`../../assets/img/${article.full_image}`)" />
      <p>{{ article.date }}</p>
      <p>{{ article.desc }}</p>
      <Comments />
    </v-container>
  </div>
</template>

<script>
import Header from "../../components/Header.vue";
import { fetchArticles } from "../../utils/api";
import Comments from "../../components/Comments.vue";

export default {
  name: "Articles",
  data: () => {
    return {
      article: null,
    };
  },
  components: {
    Header,
    Comments,
  },
  async asyncData({ params }) {
    const id = params.id;
    const article = await fetchArticles(id);
    return {
      article,
    };
  },
};
</script>

<style scoped lang="scss">
.article {
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
