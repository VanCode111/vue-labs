<template>
  <div class="comments">
    <formComponent @sendForm="(text) => addComment(text)" />
    <v-card v-for="comment in comments" :key="comment.id">
      <v-card-title>{{ comment.user_name }}</v-card-title>
      <v-card-text class="mb-5">{{ comment.comment }}</v-card-text>
    </v-card>
  </div>
</template>

<script>
import { fetchComments, addCommentApi } from "../utils/api";
import formComponent from "./FormComponent.vue";

export default {
  name: "Comments",
  components: {
    formComponent,
  },
  data() {
    return {
      comments: [],
      textComment: "",
      id: null,
    };
  },
  async mounted() {
    const id = this.$route.params.id;
    this.id = id;
    this.comments = await fetchComments(id);
  },
  methods: {
    async addComment(text) {
      console.log("sended");
      await addCommentApi({ id: this.id, comment: text });
      this.comments = await fetchComments(this.id);
    },
  },
};
</script>
