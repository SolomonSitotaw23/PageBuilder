import HomePage from "../components/HomePage.vue";
import PagesPreview from "../components/PagesPreview.vue";
import Layouts from "../components/Layouts.vue"
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
    {
      path: "/Layouts",
      component: Layouts,
    },
  ],
});
export default router;
