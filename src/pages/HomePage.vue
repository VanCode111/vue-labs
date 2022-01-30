<template>
  <div class="home-page">
    <Header />
    <v-container fluid>
      <h1>Hello there!</h1>
      <v-carousel :v-if="articles.length > 0" v-model="model" slider="true">
        <v-carousel-item v-for="article in articles" :key="article.id">
          <v-sheet :color="color" height="100%" tile>
            <v-row class="fill-height" align="center" justify="center">
              <div class="text-h2">Slide {{ article.name }}</div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </v-container>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import { fetchArticles } from "../utils/api";

export default {
  name: "HomePage",
  data() {
    return {
      articles: [],
    };
  },
  components: {
    Header,
  },
  mounted() {
    this.getArticles();
  },
  methods: {
    async getArticles() {
      const data = await fetchArticles();
      console.log(data);
      this.articles = data.filter((item) => item.slider == true);
      console.log(this.articles);
    },
  },
};
</script>

<style scoped lang="scss"></style>
