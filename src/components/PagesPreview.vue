<script setup>
import gql from "graphql-tag";
import { useQuery } from "@vue/apollo-composable";

// !importing data

const CountriesQuery = gql`
  query Pages {
    pages {
      id
      slug
      lang
      title
      published
      content {
        ... on ImageBlock {
          url
          id
        }
        ... on TextBlock {
          id
          text
        }
      }
    }
  }
`;
const press_me = () => {
  return alert();
};
let count = 0;
const { result, loading, error } = useQuery(CountriesQuery);
let indicator = 0;
</script>

<template>
  <div>
    <div class="grid grid-cols-2 gap-4 p-12 page-preview">
      <p v-if="error">Something went wrong...</p>

      <!-- Content Starts -->

      <p v-if="loading" class="text-center self-center w-full loading">
        Loading...
      </p>
      <div
        v-else
        v-for="page in result.pages"
        :key="page.id"
        class="flex flex-col items-center overflow-hidden mt-5 last-of-type:mb-12 cursor-pointer"
      >
        <!-- content wrapper -->
        <div v-if="page.id > 10" class="border border-black">
          {{ (indicator = 0 ? (indicator = 1) : indicator) }}

          <h1 class="text-3xl">{{ page.title }}</h1>
          <div v-for="content in page.content" :key="content.id" class="">
            <div class="">
              <img
                :src="content.url"
                alt=""
                class="w-1/2 float-left relative self-start inline h-full p-5"
              />
              <div class="p-4 w-full text-left" v-if="content.text">
                <p>{{ content.text }}</p>
              </div>
            </div>
          </div>
        </div>
        <!-- content wrapper end -->
      </div>

      <!-- content end -->
    </div>
    <div v-if="indicator === 0"><h1>No content to display</h1></div>
  </div>
</template>
<style>
.page-preview {
  font-family: var(--main-font-family);
}
.loading {
  height: 70vh;
}
</style>
