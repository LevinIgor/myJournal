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
      path: "/admin",
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
    {
      path: "/post/create/:id",
      name: "create post",
      component: () => import("@/views/postCreateView.vue"),
    },
   
  ],
});

export default router;
