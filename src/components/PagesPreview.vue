<script setup>
import gql from "graphql-tag";
import { useQuery } from "@vue/apollo-composable";
import { FETCH_PAGES } from "./graphql/Operations";

const { result, loading, error, refetch } = useQuery(FETCH_PAGES);
</script>

<template>
  <div class="all-pages">
    <p v-if="error">Something went wrong...</p>
    <!-- loading -->
    <div
      v-if="loading"
      class="flex text-center justify-center items-center w-screen delay-100 loading"
    >
      <img src="../assets/loadingAnimation.svg" />
    </div>

    <!-- checking if there are pages -->

    <div v-else class="py-16">
      <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <!-- empty -->
        <div
          v-if="result.pages.length == 0"
          class="flex flex-col text-center justify-center items-center no-pages-found delay-100 loading"
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

        <div v-else class="grid gap-12 lg:grid-cols-3">
          <div
            v-for="page in result.pages"
            :key="page.id"
            class="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl"
          >
            <img
              :src="page.image_url"
              alt="art cover"
              loading="lazy"
              width="1000"
              height="667"
              class="h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl"
            />
            <div class="sm:w-7/12 pl-0 p-5">
              <div class="space-y-2">
                <div class="space-y-4">
                  <h4 class="text-2xl font-semibold text-cyan-900">
                    {{ page.title }}
                  </h4>
                  <p
                    class="text-gray-600 text-ellipsis"
                    style="overflow: hidden; text-overflow: ellipsis; max-width: 83ch"
                  >
                    {{ page.content }}
                  </p>
                </div>
                <router-link
                  :to="{
                    name: 'page',
                    params: {
                      id: page.id,
                    },
                  }"
                  class="block w-max text-cyan-600"
                  >Preview</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--  -->

    <!-- Result -->

    <!-- Result end -->
  </div>
</template>
<style>
.page-preview {
  font-family: var(--main-font-family);
}
.loading {
  height: 70vh;
}
.no-pages-found {
  height: 65vh;
}

.all-pages {
  min-height: 83vh;
  overflow-y: auto;
}
</style>
