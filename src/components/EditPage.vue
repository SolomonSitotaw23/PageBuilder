<script setup>
import { reactive } from "vue-demi";
import { useMutation, useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { useRoute } from "vue-router";
import { EDIT_PAGE, FETCH_PAGE_BY_ID } from "./graphql/Operations";
const route = useRoute();

const formValues = reactive({
  id: route.params.id,
  title: route.params.title,
  image_url: route.params.image_url,
  content: route.params.content,
});

const { mutate: editPage } = useMutation(EDIT_PAGE, () => ({
  variables: {
    id: formValues.id,
    title: formValues.title,
    content: formValues.content,
    image_url: formValues.image_url,
  },
}));
</script>
<template>
  <div class="flex justify-center items-center mb-3">
    <div class="layouts border-black border-2 h-5/6 w-1/2">
      <form @submit.prevent="editPage" class="flex flex-col p-8 items-center">
        <div class="">
          <input
            name="title"
            type="text"
            v-model="formValues.title"
            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-5/6 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            placeholder="Title"
          />
        </div>

        <div class="flex mt-6 justify-between w-full flex-row">
          <input
            name="image"
            type="url"
            v-model="formValues.image_url"
            class="image-input w-full mr-8 h-64 bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          />

          <div class="w-full">
            <textarea
              name="content"
              type="text"
              v-model="formValues.content"
              placeholder="your page content"
              class="w-full mr-8 h-64 bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            />
          </div>
        </div>
        <button
          type="submit"
          class="relative bottom-0 inline-block px-4 py-2 font-medium group mt-48"
        >
          <span
            class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"
          ></span>
          <span
            class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"
          ></span>
          <span class="relative text-black group-hover:text-white">Create Page</span>
        </button>
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
.image-input {
  background-image: url("../assets/addImage.png");
  background-repeat: repeat-y;
  background-size: contain;
  background-position: center;
  background-blend-mode: color-burn;
}
</style>
