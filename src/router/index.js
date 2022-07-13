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
      path: "/admin/:tab/:id?",
      name: "admin",
      component: () => import("@/views/adminView.vue"),
    },
    {
      path: "/post/:id",
      name: "post",
      component: () => import("@/views/postView.vue"),
    }, 
    {
      path: "/test",
      name: "test",
      component: () => import("@/views/test.vue"),
    }, 
  ],
});

export default router;
