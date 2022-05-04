<script setup>
import { ArrowNarrowRightIcon } from "@vue-hero-icons/outline";
const buttonClasses =
  "bg-black  px-2 font-bold getStartedButton button btn btn-three w-48 h-9 py-2";


defineProps({
  msg: String,
});
</script>

<template>
  <div class="h-4/5">
    <div
      class="w-full flex heroSection justify-between h-4/5 items-center px-20 py-14"
    >
      <div class="flex flex-col items-start w-2/5 justify-between h-full">
        <div class="text-9xl text-left">
          <div class="grid grid-cols-3 p-0 items-center">
            <p>Build</p>
            <img src="../assets/drag.svg" alt="" class="w-16" />
            <p>your</p>
          </div>
          website by drag and dropping
        </div>

        <button :class="buttonClasses" class="">
          Get Started
        </button>
      </div>
      <div class="w-1/2">
        <img src="../assets/Hero Image.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<style>
.heroSection {
  height: 70%;
  background-color: #59dffd;
  font-family: var(--decor-font-family);
}
.getStartedButton {
  color: #59dffd;
}
</style>
