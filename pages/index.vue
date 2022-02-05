<template>
  <v-row justify="center" align="center">{{ articles }}</v-row>
</template>

<script>
import axios from "axios";
export default {
  name: "IndexPage",
  data() {
    return {
      articles: [],
    };
  },
  async asyncData() {
    const articles = await axios.get(
      `http://demo-api.vsdev.space/api/articles`
    );

    return {
      articles: articles.data,
    };
  },
};
</script>
