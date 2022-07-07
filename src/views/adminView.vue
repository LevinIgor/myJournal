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
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase";
import { onMounted, reactive } from "vue";
import { useRouter } from "vue-router";

const posts = reactive([]);
const router = useRouter();

const goToPostEdit = (id) => {
  router.push('/post/edit/' + id);
};

onMounted(async () => {
  const querySnapshot = await getDocs(collection(db, "posts"));
  querySnapshot.forEach((doc) => {
    posts.push(doc.data());
  });
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
</style>
