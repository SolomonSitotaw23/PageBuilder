import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import HomePage from "./components/HomePage.vue";
import PagesPreview from "./components/PagesPreview.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: HomePage,
    },
    {
      path: "/preview",
      component: PagesPreview,
    },
  ],
});

createApp(App).use(router).mount("#app");
