<template>
  <div class="main">
    <VHeader @search="searchValue = $event">
      <img
        src="@/assets/icons/note.png"
        alt="note page"
        class="note-link"
        title="Записки"
        @click="$router.push('/notes/')"
      />
    </VHeader>
    
    <div class="posts">
      <section>
        <h1>Популярные публикации</h1>
        <VFiltersList @onFilterBy="filterBy($event)" @onInvert="invert()" />
      </section>
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
import VFiltersList from "../components/UI/v-filters-list.vue";

const posts = ref([]);
const searchValue = ref("");

const filterPost = computed(() => {
  return posts.value.filter((post) => {
    return post.title.toUpperCase().includes(searchValue.value.toUpperCase());
  });
});

function invert() {
  posts.value.reverse();
}

let currentFilter = "";

function filterBy(filter) {
  if (currentFilter === filter) {
    posts.value.reverse();
  } else {
    posts.value.sort((a, b) => a[filter] - b[filter]);
    currentFilter = filter;
  }
}

onMounted(async () => {
  posts.value = await getPosts();
});
</script>
<style scoped>
section {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.main {
  width: 100%;
  min-height: 100vh;
}
.posts {
  box-sizing: border-box;
  margin: 0 auto;
  padding: 0 20px;
  padding-top: 100px;
  width: var(--content-wrapper-width);
}

.note-link{
  cursor: pointer;
  width: 25px !important;
  height: 25px;
  filter: invert(.7);
  transition: filter .3s ease-in-out;
  margin-left: 30px;
}
.note-link:hover{
  filter: invert(1);
}
</style>
