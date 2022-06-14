<script setup>
import CustomButton from "./buttons/CustomButtons.vue";
</script>
<template>
  <div class="flex w-full justify-end px-8">
    <CustomButton class="pr-8" btn-text="Edit" />
    <CustomButton btn-text="Delete" delete="True" />
  </div>

  <div class="flex flex-col justify-center w-full items-center">
    <p class="capitalize">preview of page: {{ $route.params.id }}</p>
    <div class="border-solid border-2 border-black m-2 w-11/12">
      <h1 class="text-3xl capitalize">{{ $route.params.title }}</h1>
      <div class="flex w-full">
        <img class="rounded-t-lg w-1/2 m-6" :src="$route.params.image_url" alt="" />
        <p class="w-1/2 p-8">{{ $route.params.description }}</p>
      </div>
    </div>
  </div>
</template>
