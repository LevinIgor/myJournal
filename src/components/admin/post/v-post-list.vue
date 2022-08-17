<template>
  <div class="list">
    <section class="header">
      <h1 class="title">Публикации</h1>
      <VFiltersList @onFilterBy="filterBy($event)" @onInvert="invert()" />
    </section>
    <div class="posts">
      <div class="post" v-for="post in searchPosts" :key="post.id">
        <div class="img" @click="$router.push('/post/' + post.id)">
          <img :src="post.img" class="img" :alt="post.title" v-if="post.img" />
          <img v-else src="@/assets/icons/image.png" alt="" />
        </div>

        <section>
          <div class="title" @click="$router.push('/post/' + post.id)">
            {{ post.title }}
          </div>
          <div class="views">Просмотров: {{ post.views }}</div>
        </section>
        <div class="date">{{ getDate(post.id) }}</div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { getPosts } from "@/firebase/postAPI";
import { onMounted, ref, inject, computed } from "vue";
import { useDateFormat } from "@vueuse/core";
import VFiltersList from "@/components/UI/v-filters-list.vue";

const posts = ref([]);

function getDate(id) {
  return useDateFormat(id, "YYYY-MM-DD HH:mm");
}

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
const search = inject("search");

const searchPosts = computed(() => {
  return posts.value.filter((post) => {
    return post.title.toLowerCase().includes(search.value.toLowerCase());
  });
});

onMounted(async () => {
  posts.value = await getPosts();
});
</script>
<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.post {
  position: relative;
  display: flex;
  align-items: flex-start;
  padding: 0.5rem;
  border-bottom: 1px solid rgba(240, 248, 255, 0.607);
  cursor: pointer;
  margin-top: 10px;
}
.img {
  width: 100px !important;
  height: 60px;
  margin-right: 40px;
}
.img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.views {
  font-size: 0.8rem;
  color: rgba(240, 248, 255, 0.607);
  margin-top: 5px;
}
.date {
  position: absolute;
  top: 0;
  right: 0;
  color: rgba(240, 248, 255, 0.607);
  font-size: small;
}
</style>
