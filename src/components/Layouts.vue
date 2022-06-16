<script setup>
import { reactive } from "vue-demi";
import { useMutation } from "@vue/apollo-composable";
import gql from "graphql-tag";

const formValues = reactive({
  title: "",
  image_url: "",
  content: "",
});
const { mutate: sendMessage } = useMutation(
  gql`
    mutation sendMessage($title: String, $content: String, $image_url: String) {
      insert_pages(objects: { title: $title, content: $content, image_url: $image_url }) {
        returning {
          id
        }
      }
    }
  `,
  () => ({
    variables: {
      title: formValues.title,
      content: formValues.content,
      image_url: formValues.image_url,
    },
  })
);
</script>
<template>
  <span class="title-for-create-page text-3xl">Fill The inputs Below</span>
  <div class="flex justify-center items-center mb-3">
    <div class="layouts border-black border-2 h-5/6 w-1/2">
      <form @submit.prevent="sendMessage">
        <label for="title">Title</label>
        <input name="title" type="text" v-model="formValues.title" />
        <label for="image">Image Url</label>
        <input name="image" type="url" v-model="formValues.image_url" />
        <label for="content">content</label>
        <textarea name="text" type="text" v-model="formValues.content" />
        <button type="submit">Submit</button>
      </form>
      {{ formValues.name }}
    </div>
  </div>
</template>
<style>
.layouts {
  min-height: 80vh;
}
.title-for-create-page {
  font-family: var(--decor-font-family);
}
</style>
