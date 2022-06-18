<script setup>
import { reactive } from "vue-demi";
import { useMutation } from "@vue/apollo-composable";
import { INSERT_PAGE } from "./graphql/Operations";
const page = reactive({});

const formValues = reactive({
  title: "",
  image_url: "",
  content: "",
  content_2: "",
  image_url_2: "",
});
const { mutate: sendMessage } = useMutation(INSERT_PAGE, () => ({
  variables: {
    title: formValues.title,
    content: formValues.content,
    image_url: formValues.image_url,
    content_2: formValues.content_2,
    image_url_2: formValues.image_url_2,
  },
}));
</script>
<template>
  <div class="max-w-screen flex justify-around add-page">
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
                placeholder="first image"
                class="bg-gray-200 appearance-none mb-8 border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
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
                placeholder="image 2 (optional) "
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
            <span class="relative text-black group-hover:text-white mb-4"
              >Create Page</span
            >
          </button>
        </form>
      </div>
    </div>

    <!-- Form -->

    <div class="bg-slate-200 w-5/6 m-3 mb-8 p-11">
      <h1 class="text-3xl font-semibold capitalize">
        {{ formValues.title }}
      </h1>
      <div>
        <div class="flex">
          <div>
            <img class="rounded-t-lg mt-8" :src="formValues.image_url" alt="" />
          </div>
          <div>
            <p class="p-8 text-left">{{ formValues.content }}</p>
          </div>
        </div>
        <div class="flex">
          <div>
            <p class="p-8 text-justify">{{ formValues.content_2 }}</p>
          </div>
          <div>
            <img class="rounded-t-lg mt-8" :src="formValues.image_url_2" alt="" />
          </div>
        </div>
      </div>
      <div class="w-full bg-slate-300 text-xs bottom-0">
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
.add-page {
  font-family: var(--text-font);
}
.para {
  width: 5vw;
  overflow-wrap: wrap;
}
</style>
