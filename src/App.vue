<script setup>
import Header from "../src/components/header-and-footer/Header.vue";
import Footer from "./components/header-and-footer/Footer.vue";
</script>

<template>
  <section class=".view">
    <Header />
    <router-view> </router-view>
    <Footer />
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
.view {
}
</style>
