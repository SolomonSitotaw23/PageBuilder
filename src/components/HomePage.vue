<script setup>
const buttonClasses =
  "bg-black  px-2 font-bold getStartedButton button btn btn-three w-48 h-9 py-2 mt-10";

defineProps({
  msg: String,
});
</script>

<template>
  <div class="home-page w-full flex heroSection justify-between items-center px-20 py-14">
    <div class="flex flex-col items-start w-2/5 justify-between">
      <div class="text-9xl text-left">
        <div class="">
          <span
            >Build
            <img src="../assets/drag.svg" alt="" class="w-20 inline" />
            your</span
          >
          <span> website </span>
          <img src="../assets/drop.svg" alt="" class="inline w-20" />
        </div>
      </div>

      <button :class="buttonClasses" class="">Get Started</button>
    </div>
    <div class="w-1/2">
      <img src="../assets/Hero Image.svg" alt="" />
    </div>
  </div>
</template>

<style>
.heroSection {
  background-color: var(--main-color);
  font-family: var(--decor-font-family);
}
.getStartedButton {
  color: #59dffd;
}
.home-page {
  height: 83vh;
}
</style>
