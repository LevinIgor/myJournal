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
      path: "/posts/:tag",
      name: "postsTag",
      component: () => import("@/views/postsTagView.vue"),
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
      path: "/notes/",
      name: "notes",
      component: () => import("@/views/notesView.vue"),
    },
    {
      path: "/notes/:id",
      name: "note",
      component: () => import("@/views/noteView.vue"),
    },
    {
      path: "/test",
      name: "test",
      component: () => import("@/views/test.vue"),
    },
  ],
});

export default router;
