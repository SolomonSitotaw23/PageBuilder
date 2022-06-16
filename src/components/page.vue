<template>
  <div class="flex w-full justify-end px-8">
    <button
      class="border-2 border-black px-2 py-1 button bg-red-500 text-white hover:bg-opacity-50"
      @click="showModal = true"
    >
      Delete
    </button>
    <router-link
      :to="{
        name: 'page',
        params: {
          id: $route.params.id,
          title: $route.params.title,
          image_url: $route.params.image_url,
          content: $route.params.content,
        },
      }"
      class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 mx-4 mr-2 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Preview
      <svg
        class="ml-2 -mr-1 w-4 h-4"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </router-link>
  </div>
  <div class="flex flex-col justify-center w-full items-center">
    <p class="capitalize">preview of page: {{ $route.params.id }}</p>
    <div class="border-solid border-2 border-black m-2 w-11/12">
      <h1 class="text-3xl capitalize">{{ $route.params.title }}</h1>
      <div class="flex w-full">
        <img class="rounded-t-lg w-1/2 m-6" :src="$route.params.image_url" alt="" />
        <p class="w-1/2 p-8">{{ $route.params.content }}</p>
      </div>
    </div>
  </div>
  <PopUp
    v-show="showModal"
    @close-modal="showModal = false"
    @approve-delete="deletePage()"
  />
</template>
<script setup>
import PopUp from "./Custom/PopUp.vue";
import gql from "graphql-tag";
import { useMutation } from "@vue/apollo-composable";
import { useRoute } from "vue-router";
import { ref } from "vue";

const route = useRoute();
const id = route.params.id;
const showModal = ref(false);

const { mutate: deletePage } = useMutation(
  gql`
    mutation deletePage($id: Int!) {
      delete_pages_by_pk(id: $id) {
        content
        id
        image_url
        published
        title
        slug
      }
    }
  `,
  () => ({ variables: { id: id } })
);
</script>
