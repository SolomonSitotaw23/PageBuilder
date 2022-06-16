<script setup>
import gql from "graphql-tag";
import { useQuery } from "@vue/apollo-composable";

// !importing data

const PagesQuery = gql`
  query MyQuery {
    pages {
      id
      title
      slug
      image_url
      published
      content
    }
  }
`;

const { result, loading, error } = useQuery(PagesQuery);
</script>

<template>
  <div>
    <div>
      <!-- ________________ -->
      <p v-if="error">Something went wrong...</p>

      <div
        v-if="loading"
        class="flex text-center justify-center items-center w-screen delay-100 loading"
      >
        <img src="../assets/loadingAnimation.svg" />
      </div>
      <div v-else>
        <div
          v-if="result.pages.length == 0"
          class="flex flex-col text-center justify-center items-center w-screen delay-100 loading"
        >
          <img src="../assets/NoData.svg" class="w-1/2 h-1/2" alt="" />
          <router-link to="Layouts">
            <button
              class="bg-none border-2 border-black p-2 hover:bg-black hover:text-white ease-in duration-300"
            >
              Create new website
            </button>
          </router-link>
        </div>
        <!-- Result -->
        <div
          v-else
          v-for="page in result.pages"
          :key="page.id"
          class="grid grid-cols-3 gap-8 p-12 page-preview"
        >
          <!-- content wrapper -->

          <div
            class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
          >
            <div class="flex flex-wrap justify-center">
              <div class="w-full sm:w-full px-4">
                <img
                  :src="page.image_url"
                  class="shadow rounded w-full h-44 align-middle border-none"
                />
              </div>
            </div>

            <div class="p-5">
              <a href="#">
                <h5
                  class="mb-2 text-2xl font-bold tracking-tight text-gray-900 capitalize dark:text-white"
                >
                  {{ page.slug }}
                </h5>
              </a>
              <p
                class="mb-3 font-normal text-gray-700 dark:text-gray-400"
                style="
                  white-space: nowrap;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  max-width: 83ch;
                "
              >
                {{ page.content }}
              </p>

              <!-- router -->
              <router-link
                :to="{
                  name: 'page',
                  params: {
                    id: page.id,
                    title: page.title,
                    image_url: page.image_url,
                    content: page.content,
                  },
                }"
                class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
              <!-- router end -->
            </div>
          </div>
          <!-- content end -->
        </div>
      </div>
      <!-- Result end -->
    </div>
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
