import HomePage from "../components/HomePage.vue";
import PagesPreview from "../components/PagesPreview.vue";
import Layouts from "../components/Layouts.vue";
import page from "../components/page.vue";
import EditPage from "../components/EditPage.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: HomePage,
    },
    {
      path: "/previewPages",
      name: "PreviewAllPages",
      component: PagesPreview,
    },
    {
      path: "/Layouts",
      component: Layouts,
    },
    {
      path: "/preview/:id",
      name: "page",
      component: page,
    },
    {
      path: "/EditPage/:id",
      name: "EditPage",
      component: EditPage,
    },
  ],
});
export default router;
