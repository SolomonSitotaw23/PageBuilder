<script setup>
import PopUp from "./Custom/PopUp.vue";
import { useMutation, useQuery } from "@vue/apollo-composable";
import { useRoute } from "vue-router";
import { ref } from "vue";
import { DELETE_PAGE_BY_ID, FETCH_PAGE_BY_ID } from "./graphql/Operations";

const route = useRoute();
const id = parseInt(route.params.id);
const showModal = ref(false);
const pageRef = ref();
const { result, loading, error } = useQuery(FETCH_PAGE_BY_ID, () => ({
  id: id,
}));
const { mutate: deletePage } = useMutation(DELETE_PAGE_BY_ID, () => ({
  variables: { id: id },
}));
</script>

<template>
  <div class="single-page flex flex-col items-center justify-center">
    <!-- Loading -->
    <p v-if="error">Something went wrong...</p>
    <div
      v-if="loading"
      class="flex text-center justify-center items-center w-screen delay-100 loading"
    >
      <p>loading</p>
    </div>
    <div v-else class="flex w-full px-8">
      <button
        class="border-2 border-black px-2 py-1 button bg-red-500 text-white hover:bg-opacity-50"
        @click="showModal = true"
      >
        Delete
      </button>
      <router-link
        :to="{
          name: 'EditPage',
          params: {
            id: result.pages_by_pk.id,
            title: result.pages_by_pk.title,
            image_url: result.pages_by_pk.image_url,
            content: result.pages_by_pk.content,
            content_2: result.pages_by_pk.content_2,
            image_url_2: result.pages_by_pk.image_url_2,
          },
        }"
        class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 mx-4 mr-2 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Edit
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

    <div class="bg-slate-200 preview-page m-3 mb-8 p-11">
      <h1 class="text-3xl font-semibold capitalize">
        {{ result.pages_by_pk.title }}
      </h1>
      <div>
        <div class="flex">
          <div>
            <img class="rounded-t-lg mt-8" :src="result.pages_by_pk.image_url" alt="" />
          </div>
          <div>
            <p class="p-8 text-left">{{ result.pages_by_pk.content }}</p>
          </div>
        </div>
        <div class="flex">
          <div>
            <p class="p-8 text-justify">{{ result.pages_by_pk.content_2 }}</p>
          </div>
          <div>
            <img class="rounded-t-lg mt-8" :src="result.pages_by_pk.image_url_2" alt="" />
          </div>
        </div>
      </div>
      <div class="w-full bg-slate-300 text-xs bottom-0">
        &copy; {{ new Date().toLocaleString() }}
      </div>
    </div>
  </div>
  <PopUp
    v-show="showModal"
    @close-modal="showModal = false"
    @approve-delete="deletePage()"
  />
</template>
<style>
.single-page {
  min-height: 83vh;
}
.page-preview {
  width: 50vw;
}
</style>
