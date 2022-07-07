<template>
  <div class="wrapper">
    <div class="admin">
      <div class="header"></div>
      <div class="content">
        <input type="text" class="search" />
        <div class="post" v-for="post in posts">
          <div class="post-title">{{ post.title }}</div>
          <div class="post-id">{{ post.id }}</div>
          <div class="post-control">
            <img
              src="@/assets/icons/edit.png"
              alt="edit"
              class="icon"
              @click="goToPostEdit(post.id)"
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
    </div>
  </div>
</template>
<script setup>
import getPosts from "../firebase/getPosts";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import VPopupCenter from "@/components/v-popup-center.vue";

const posts = ref([]);
const router = useRouter();
const isConfirmDeletePost = ref(false);

const goToPostEdit = (id) => {
  router.push("/post/edit/" + id);
};

const deletePost = (id) => {
  if (confirm("Delete post?")) {
    console.log('delete');
  }
};

onMounted(async () => {
  posts.value = await getPosts();
});
</script>
<style scoped>
.wrapper {
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
}
.admin {
  box-sizing: border-box;
  width: var(--content-wrapper-width);
  padding: 20px;
  background-color: rgb(255, 255, 255);
}

.post {
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  margin-top: 20px;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 2px;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.2);
  transition: background-color 0.2s ease;
}
.post:hover {
  background-color: rgb(221, 221, 221);
}
.post-title {
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
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

.popup-title {
  font-size: 33px;
}
.popup-control {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 100px;
  height: 100px;
}
.btn {
  cursor: pointer;
  padding: 10px 40px;
  font-size: 20px;
  border: none;
  border-radius: 5px;
  background-color: transparent;
  transition: background-color 0.2s ease;
}
.yes {
  border: 1px solid rgb(20, 176, 33);
}
.no {
  border: 1px solid rgb(177, 33, 33);
}
</style>
