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
  content_2: route.params.content_2,
  image_url_2: route.image_url_2,
});

const { mutate: editPage } = useMutation(EDIT_PAGE, () => ({
  variables: {
    id: formValues.id,
    title: formValues.title,
    content: formValues.content,
    image_url: formValues.image_url,
    content_2: route.params.content_2,
    image_url_2: route.image_url_2,
  },
}));
</script>
<template>
  <div class="max-w-screen flex justify-around">
    <div class="flex justify-center items-center mb-3 w-full">
      <div class="layouts border-black border-2 h-5/6">
        <form @submit.prevent="sendMessage" class="flex flex-col p-8 items-center">
          <div class="">
            <input
              name="title"
              type="text"
              v-model="formValues.title"
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-5/6 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              placeholder="Title"
            />
          </div>

          <div class="flex flex-col mt-6 justify-between w-full">
            <div>
              <input
                name="image"
                type="url"
                v-model="formValues.image_url"
                class="bg-gray-200appearance-none mb-8 border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              />
            </div>
            <div class="w-full">
              <textarea
                name="content"
                type="text"
                v-model="formValues.content"
                placeholder="your page content"
                class="w-full bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              />
            </div>

            <div>
              <input
                name="image"
                type="url"
                v-model="formValues.image_url_2"
                class="w-full bg-gray-200 mb-8 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              />
            </div>
            <div class="w-full">
              <textarea
                name="content"
                type="text"
                v-model="formValues.content_2"
                placeholder="your page content"
                class="w-full bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
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
            <span class="relative text-black group-hover:text-white">Update Page</span>
          </button>
        </form>
      </div>
    </div>

    <!-- FOrm -->
    <div>
      <div class="flex justify-center items-center w-full h-5/6 bg-slate-200 border-2">
        <div class="flex flex-col justify-center items-center">
          <h1 class="text-3xl capitalize">{{ formValues.title }}</h1>
          <div class="flex w-full">
            <img class="rounded-t-lg w-1/2 m-6" :src="formValues.image_url" alt="" />
            <p class="w-1/2 p-8 text-wrap">{{ formValues.content_2 }}</p>
          </div>
          <div class="flex w-full">
            <p class="w-1/2 p-8 text-wrap">{{ formValues.content }}</p>
            <img class="rounded-t-lg w-1/2 m-6" :src="formValues.image_url_2" alt="" />
          </div>
        </div>
      </div>
      <div class="w-full bg-slate-300 text-xs">
        &copy; {{ new Date().toLocaleString() }}
      </div>
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
