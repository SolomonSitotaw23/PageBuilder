<template>
  <div class="flex w-full justify-end px-8">
    <button
      class="border-2 border-black px-2 py-1 button bg-red-500 text-white hover:bg-opacity-50"
      @click="showModal = true"
    >
      Delete
    </button>
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
