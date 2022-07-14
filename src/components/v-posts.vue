<template>
  <div class="main">
    <h1>Все публикации</h1>

    <div class="post" v-for="post in filterPosts" :key="post.id">
      <span class="post-title" @click="$router.push(`/post/${post.id}`)">
        {{ post.title }}</span
      >
      <span class="post-id">{{ post.id }}</span>
      <div class="post-control">
        <img
          src="@/assets/icons/edit.png"
          alt="edit"
          class="icon"
          @click="$router.push('/admin/edit/' + post.id)"
        />
        <img
          src="@/assets/icons/delete.png"
          alt="delete"
          class="icon"
          @click="deletePost(post.id)"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import getPosts from "../firebase/getPosts";
import deletePostAPI from "../firebase/deletePost";
import { onMounted, ref, computed } from "vue";

const props = defineProps(["search"]);
const posts = ref([]);

const deletePost = async (id) => {
  if (confirm("Delete post?")) {
    deletePostAPI(id);
    posts.value = posts.value.filter((post) => post.id !== id);
  }
};

const filterPosts = computed(() => {
  return posts.value.filter((post) => {
    return post.title.toLowerCase().includes(props.search.toLowerCase());
  });
});

onMounted(async () => {
  posts.value = await getPosts();
});
</script>
<style scoped>
h1 {
  margin-bottom: 80px;
}
.post {
  box-sizing: border-box;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  margin-top: 20px;
  border: 1px solid rgba(221, 221, 221, 0.671);
  border-radius: 2px;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.2);
  transition: background-color 0.2s ease;
}
.post:hover {
  background-color: rgba(221, 221, 221, 0.041);
}
.post-title {
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
  color: var(--main-font-color);
}
.post-id {
  position: absolute;
  top: -10px;
  right: 10px;
}
.post-control {
  display: flex;
  align-items: center;
}
.icon {
  cursor: pointer;
  padding: 10px 20px;
  filter: grayscale(100%);
}
.icon:hover {
  filter: grayscale(0%);
}

.not-found {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.not-found img {
  width: 200px !important;
  filter: invert(90%);
}
</style>
