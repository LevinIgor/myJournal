<template>
  <div class="main">
    <VHeader @search="searchValue = $event" />
    <div class="posts">
      <VFilters
        @changeFilter="changeFilter($event)"
        @changeOrder="changeOrder($event)"
      />
      <VPost v-for="post in filterPost" :post="post" :key="post.id" />
      <VPostSkeleton v-if="posts.length == 0" />
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref, computed } from "vue";
import { getPosts } from "@/firebase/postAPI.js";
import VHeader from "@/components/main/header/v-header.vue";
import VPost from "@/components/main/post/v-post.vue";
import VPostSkeleton from "@/components/skeletons/v-post.vue";
import VFilters from "@/components/UI/v-filters.vue";

const posts = ref([]);
const searchValue = ref("");

const filterPost = computed(() => {
  return posts.value.filter((post) => {
    return post.title.toUpperCase().includes(searchValue.value.toUpperCase());
  });
});

const changeFilter = (filter) => {
  posts.value = [];
  setTimeout(() => {
    getPosts(filter).then((data) => {
      posts.value = data;
    });
  }, 1000);
};
const changeOrder = () => {
  posts.value.reverse();
};

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
  padding-top: 100px;
  width: var(--content-wrapper-width);
}
.filter {
  margin-top: 50px;
  margin-bottom: 20px;
  background-color: white;
  padding: 10px 20px;
}
.filter select {
  cursor: pointer;
  border: none;
  outline: none;
  font-size: 16px;
  padding: 10px 100px 10px 10px;
}
</style>
