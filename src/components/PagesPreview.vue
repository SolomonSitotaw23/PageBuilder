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

const { result, loading, error } = useQuery(CountriesQuery);
</script>

<template>
  <div class="grid grid-cols-4 gap-4 p-12">
    <p v-if="error">Something went wrong...</p>

    <p v-if="loading" class="text-center w-full ">Loading...</p>
    <div
      v-else
      v-for="page in result.pages"
      :key="page.id"
      class="flex flex-col border p-11 items-center w-full h-36 overflow-hidden mt-5 last-of-type:mb-12 cursor-pointer hover:scale-105"
    >
      <div class="text-3xl">
        {{ page.id }}
      </div>

      <!-- {{ page.slug }}

      {{ page.lang }} -->
      <h1 class="text-4xl">
        {{ page.title }}
      </h1>

      {{ page.published }}
      <div v-for="content in page.content" :key="content.id">
        {{ content.text }}

        <img :src="content.url" alt="" />
      </div>
    </div>
  </div>
</template>
<style>
.page-preview {
  font-family: var(--main-font-family);
}
</style>
