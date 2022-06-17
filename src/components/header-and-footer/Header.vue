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
      <ul class="flex w-1/4 justify-between">
        <router-link to="/" class="">
          <li><button :class="buttonClasses">Home</button></li>
        </router-link>
        <router-link
          :to="{
            name: 'PreviewAllPages',
          }"
        >
          <li><button :class="buttonClasses">Your projects</button></li>
        </router-link>
        <router-link to="Layouts">
          <li><button :class="buttonClasses">Create new website</button></li>
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
