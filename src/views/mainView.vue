<template>
  <div class="main">
    <VHeader @search="searchValue = $event" />
    <div class="posts">
      <transition-group name="list">
        <VPost v-for="post in filterPost" :post="post" :key="post.id" />
      </transition-group>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref, computed, } from "vue";
import getPostsAPI from "@/firebase/getPosts";
import VHeader from "@/components/v-header.vue";
import VPost from "@/components/v-post.vue";
const posts = ref([]);
const searchValue = ref("");

const filterPost = computed(() => {
  return posts.value.filter((post) => {
    return post.title.toUpperCase().includes(searchValue.value.toUpperCase());
  });
});

onMounted(async () => {
  posts.value = await getPostsAPI();
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

.list-enter-active,
.list-leave-active {
  transition: opacity .4s, transform .3s;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(300px);
}
</style>
