<template>
  <div class="postsTag">
    <vHeader @search="search = $event" />
    <h2 class="tag-name">Выборка по выбраному тегу: {{ $route.params.tag }}</h2>
    <VPostSkeleton v-if="posts.length == 0" />
    <div class="posts">
      <VPost v-for="(item, index) in filteredPosts" :key="index" :post="item" />
    </div>
  </div>
</template>
<script setup>
import { useRoute, useRouter } from "vue-router";
import { onMounted, ref, computed } from "vue";
import vHeader from "@/components/main/header/v-header.vue";
import VPost from "@/components/main/post/v-post.vue";
import tagQuery from "@/firebase/tagQuery.js";
import VPostSkeleton from "@/components/skeletons/v-post.vue";

const posts = ref([]);
const route = useRoute();
const router = useRouter();
const search = ref("");

router.beforeEach(async (to, from, next) => {
  if (to.params.tag) {
    posts.value = [];
    posts.value = await tagQuery(to.params.tag);
  }
  next();
});

onMounted(async () => {
  const tag = route.params.tag;
  posts.value = await tagQuery(tag);
  window.scroll(0, 0);
});

const filteredPosts = computed(() => {
  search.value = search.value.toLowerCase();
  return posts.value.filter((post) =>
    post.title.toLowerCase().includes(search.value)
  );
});
</script>
<style scoped>
.postsTag {
  margin-top: var(--header-height);
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
}
.posts {
  display: grid;
  justify-content: center;
}
.tag-name {
  text-align: center;
}
</style>
