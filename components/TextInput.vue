<template>
  <v-text-field
    label="Write a comment"
    :value="value"
    @input="(value) => $emit('input', value)"
    >></v-text-field
  >
</template>

<script>
export default {
  name: "text-input",
  props: {
    value: String,
  },
};
</script>
