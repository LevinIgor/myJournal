import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "main",
      component: () => import("@/views/mainView.vue"),
    },
    {
      path: "/admin/:tab",
      name: "admin",
      component: () => import("@/views/adminView.vue"),
    },
    {
      path: "/post/:id",
      name: "post",
      component: () => import("@/views/postView.vue"),
    },
    {
      path: "/post/edit/:id",
      name: "edit post",
      component: () => import("@/views/postEditView.vue"),
    },
  
   
  ],
});

export default router;
