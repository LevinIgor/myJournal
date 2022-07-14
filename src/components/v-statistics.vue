<template>
  <div class="statistics" v-if="posts">
    <VMostViews :posts="posts" />
    <VMostOverlooked :posts="posts" />
    <VLastPost :posts="posts" />
  </div>
</template>
<script setup>
import getPostsAPI from "../firebase/getPosts";
import { ref, onMounted } from "vue";
import VMostViews from "./statistics-block/v-mostViews.vue";
import VMostOverlooked from "./statistics-block/v-mostOverlooked.vue";
import VLastPost from "./statistics-block/v-lastPost.vue";

const posts = ref();

onMounted(async () => {
  posts.value = await getPostsAPI();
});
</script>
<style scoped>
.statistics {
  width: 75vw;
  display: flex;
  flex-wrap: wrap;
  margin-top: var(--header-height);
}
</style>
