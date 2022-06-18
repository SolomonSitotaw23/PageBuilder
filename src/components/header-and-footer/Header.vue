<script setup>
const buttonClasses = "border-2 border-black px-2 font-bold py-1 button btns";
</script>
<template>
  <div class="header">
    <hr />
    <div class="flex justify-between px-14 py-4">
      <div>
        <img class="w-8" src="../../assets/logo.png" alt="" />
      </div>
      <ul class="">
        <router-link to="/" class="">
          <a href="#_" class="relative px-6 py-3 mx-4 mt-2 font-bold text-black group">
            <span
              class="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-slate-200 group-hover:translate-x-0 group-hover:translate-y-0"
            ></span>
            <span class="absolute inset-0 w-full h-full border-4 border-black"></span>
            <span class="relative">Home</span>
          </a>
        </router-link>
        <router-link
          :to="{
            name: 'PreviewAllPages',
          }"
        >
          <a href="#_" class="relative px-6 mx-4 py-3 font-bold text-black group">
            <span
              class="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-slate-200 group-hover:translate-x-0 group-hover:translate-y-0"
            ></span>
            <span class="absolute inset-0 w-full h-full border-4 border-black"></span>
            <span class="relative">Your Projects</span>
          </a>
        </router-link>
        <router-link to="Layouts">
          <button class="relative px-6 py-3 font-bold text-black group">
            <span
              class="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-slate-200 group-hover:translate-x-0 group-hover:translate-y-0"
            ></span>
            <span class="absolute inset-0 w-full h-full border-4 border-black"></span>
            <span class="relative">Create Project</span>
          </button>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<style>
.header {
  height: 10vh;
}
</style>
