<template>
  <v-for
    ><v-row>
      <text-input v-model="textComment" />
      <v-btn @click="addComment">Send</v-btn></v-row
    >
  </v-for>
</template>

<script>
import TextInput from "./TextInput.vue";

export default {
  name: "FormComponent",
  components: { TextInput },
  data() {
    return {
      textComment: "",
    };
  },
  methods: {
    addComment() {
      this.$emit("sendForm", this.textComment);
      this.textComment = "";
    },
  },
};
</script>
