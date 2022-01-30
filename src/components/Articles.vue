<template>
  <div class="articles">
    <v-container class="fill-height" fluid style="min-height: 434px">
      <v-fade-transition mode="out-in">
        <v-row>
          <v-col v-for="article in articles" :key="article.id" cols="6">
            <v-card>
              <v-img
                :src="'img/' + article.preview_image"
                height="125"
                class="grey darken-4"
              ></v-img>
              <v-card-title class="text-h6"> {{ article.name }} </v-card-title>
              <v-card-text>{{
                article.shortDesc || "no short description"
              }}</v-card-text>
              <v-card-actions>
                <v-btn
                  color="deep-purple lighten-2"
                  text
                  :to="`/article/${article.id}`"
                >
                  Read more
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-fade-transition>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Articles",
  props: {
    articles: Array,
  },
  components: {},
};
</script>

<style scoped lang="scss">
.articles__article {
  margin-top: 15px;
}
</style>
