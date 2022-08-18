<template>
  <div class="list">
    <VHeaderList
      @onInvert="invert()"
      @onFilterBy="filterBy($event)"
      @onDeleteMode="isDeleteMode = $event"
    />
    <div class="posts">
      <TransitionGroup name="list" mode="out-in">
        <VPostInList
          :post="post"
          v-for="post in searchPosts"
          :key="post.id"
          :isDeleteMode="isDeleteMode"
          @deletePost="onDeletePost($event)"
        />
      </TransitionGroup>
    </div>
    <h1 class="empty" v-if="posts.length == 0">Пусто</h1>
  </div>
</template>
<script setup>
import { getPosts } from "@/firebase/postAPI";
import { onMounted, ref, inject, computed } from "vue";
import { deletePost } from "@/firebase/postAPI";

import VPostInList from "@/components/admin/post/v-post-in-list.vue";
import VHeaderList from "../v-header-list.vue";

const posts = ref([]);
const isDeleteMode = ref(false);

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

function onDeletePost(id) {
  if (confirm("Вы уверены?")) {
    deletePost(id).then(() => {
      posts.value = posts.value.filter((item) => item.id !== id);
    });
  }
}

onMounted(async () => {
  posts.value = await getPosts();
});
</script>
<style scoped>
.empty {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: rgba(240, 248, 255, 0.445);
}
.list-leave-active {
  transition: all 0.3s ease;
}

.list-leave-to {
  opacity: 0;
}
</style>
