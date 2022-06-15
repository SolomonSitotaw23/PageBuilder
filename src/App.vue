<script setup>
import Header from "../src/components/header-and-footer/Header.vue";
import Footer from "./components/header-and-footer/Footer.vue";
</script>

<template>
  <section class="flex flex-col justify-between h-screen">
    <Header class="h-20" />
    <router-view class="flex-grow"> </router-view>
    <Footer class="h-20 footer" />
  </section>
</template>

<style>
#app {
  min-height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #59dffd;
}
</style>
