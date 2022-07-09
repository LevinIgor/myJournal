<template>
  <div class="wrapper">
    <VHeader @search="search = $event.target.value" />
    <main>
      <div class="admin-menu">
        <div class="admin-menu-item" @click="$router.push('/admin/posts')">
          <img src="@/assets/icons/list.png" alt="list" />
          <span>Список постов</span>
        </div>
        <div class="admin-menu-item" @click="$router.push('/admin/create')">
          <img src="@/assets/icons/create.png" alt="create" />
          <span>Создать пост</span>
        </div>
      </div>

      <div class="content">
        <VPosts
          v-if="$route.params.tab == 'posts'"
          :posts="filterPosts"
          @deletePost="deletePost($event)"
          @editPost="$router.push('/admin/edit/' + $event)"
        />
        <VCreatePost v-if="$route.params.tab == 'create'" />
        <VPostEdit v-if="$route.params.tab == 'edit'" />
      </div>
    </main>
  </div>
</template>
<script setup>
import getPosts from "../firebase/getPosts";
import deletePostBD from "../firebase/deletePost";
import { onMounted, ref, computed } from "vue";
import { useRouter } from "vue-router";
import VHeader from "../components/v-header.vue";
import VPosts from "../components/v-posts.vue";
import VCreatePost from "../components/v-createPost.vue";
import VPostEdit from "../components/v-post-edit.vue";

let search = ref("");
const posts = ref([]);
const router = useRouter();

const goToPostEdit = (id) => {
  router.push("/post/edit/" + id);
};

const deletePost = async (id) => {
  if (confirm("Delete post?")) {
    deletePostBD(id);
    posts.value = posts.value.filter((post) => post.id !== id);
  }
};

const filterPosts = computed(() => {
  return posts.value.filter((post) => {
    return post.title.toLowerCase().includes(search.value.toLowerCase());
  });
});

onMounted(async () => {
  posts.value = await getPosts();
});
</script>
<style scoped>
.wrapper {
  width: 100%;
  min-height: 100vh;
  display: flex;
}
main {
  width: 100%;
  min-height: 100vh;
  margin-top: 50px;
}
.content {
  width: var(--content-wrapper-width);
  margin: 0 0 0 350px;
}
.admin-menu {
  position: fixed;
  top: 0;
  left: 0;
  padding: 80px 10px 0 10px;
  box-sizing: border-box;
  height: 100%;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(38, 38, 38);
  border-right: 1px solid var(--main-border-color);
}
.admin-menu-item {
  cursor: pointer;
  box-sizing: border-box;
  width: 100%;
  margin: 10px 0;
  padding: 10px 10px;
  display: flex;
  align-items: center;
  background-color: var(--main-block-color);
}
.admin-menu-item img {
  filter: invert(100%);
  margin-right: 10px;
  width: 30px !important;
}
.admin-menu-item:hover {
  background-color: var(--main-block-color-hover);
}

.create-icon {
  cursor: pointer;
  width: 30px !important;
  height: 30px;
  filter: invert(70%);
  margin-left: 10px;
  transition: filter 0.3s ease-in-out;
}
.create-icon:hover {
  filter: invert(100%);
}
</style>
