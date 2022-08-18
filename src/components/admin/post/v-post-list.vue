<template>
  <div class="list">
    <section class="header">
      <h1 class="title">Публикации</h1>
      <VFiltersList @onFilterBy="filterBy($event)" @onInvert="invert()">
        <img
          src="../../../assets/icons/delete.png"
          alt="delete post"
          class="delete-icon"
          @click="onDeleteMode()"
          title="Включить режим удаления"
          :class="{ active: isDeleteMode }"
        />
      </VFiltersList>
    </section>
    <div class="posts">
      <TransitionGroup name="list" mode="out-in">
        <div class="post" v-for="post in searchPosts" :key="post.id">
          <VPostInList
            :post="post"
            :isDeleteMode="isDeleteMode"
            @deletePost="onDeletePost($event)"
          />
        </div>
      </TransitionGroup>
    </div>
  </div>
</template>
<script setup>
import { getPosts } from "@/firebase/postAPI";
import { onMounted, ref, inject, computed } from "vue";
import { deletePost } from "@/firebase/postAPI";

import VFiltersList from "@/components/UI/v-filters-list.vue";
import VPostInList from "@/components/admin/post/v-post-in-list.vue";

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

function onDeleteMode() {
  isDeleteMode.value = !isDeleteMode.value;
}

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
.header {
  position: sticky;
  z-index: 100;
  top: var(--header-height);
  background-color: var(--main-bg-color);
  opacity: 0.9;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.delete-icon {
  cursor: pointer;
  width: 20px !important;
  height: 20px;
  margin-left: auto;
  margin-right: 10px;
  filter: grayscale(1);
  transition: filter 0.3s ease;
}
.delete-icon:hover {
  filter: grayscale(0);
}
.active {
  filter: grayscale(0);
}

.list-move, /* apply transition to moving elements */
.list-leave-active {
  transition: all 0.3s ease;
}

.list-leave-to {
  opacity: 0;
}
</style>
