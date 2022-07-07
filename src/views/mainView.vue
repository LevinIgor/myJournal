<template>
  <div class="main">
    <VHeader />
    <div class="posts">
      <transition-group name="list">
        <VPost v-for="post in posts" :post="post" :key="post.id" />
      </transition-group>
    </div>
  </div>
</template>
<script setup>
import VPost from "@/components/v-post.vue";
import VHeader from "../components/v-header.vue";

import { onMounted, ref } from "vue";
import getPosts from "../firebase/getPosts";

const posts = ref([]);

onMounted(async () => {
  posts.value = await getPosts();
});
</script>
<style scoped>
.main {
  width: 100%;
  min-height: 100vh;
}
.posts {
  margin: 0 auto;
  width: var(--content-wrapper-width);
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
