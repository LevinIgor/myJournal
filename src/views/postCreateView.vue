<template>
  <div class="wrapper">
    <VHeader mode="onlyLogo" />
    <div class="create-post">
      <form class="post-details">
        <input
          class="post-title"
          v-model="post.title"
          placeholder="Title post..."
          required
        />
        <input
          class="post-tags"
          v-model="post.tags"
          placeholder="Tags post..."
        />
        <input class="post-img" v-model="post.img" placeholder="Img url" />
        <textarea
          class="post-desc"
          v-model="post.desc"
          placeholder="Post desc"
        />
      </form>
      <div class="post-content">
        <v-md-editor v-model="post.text" height="900px" />
      </div>
      <button @click="createPost" class="btn-create-post">Create post</button>
    </div>
  </div>
</template>
<script setup>
import { reactive } from "vue";
import createPostBD from "../firebase/createPost.js";
import VHeader from "@/components/v-header.vue";

const post = reactive({
  id: Date.now(),
  title: "",
  img: "",
  text: "",
  tags: "",
  desc: "",
});

const createPost = async () => {
  createPostBD(post).then(() => {
    post.title = "";
    post.img = "";
    post.text = "";
    post.tags = [];
  });
};
</script>
<style scoped>
input {
  border: none;
  outline: none;
  padding: 10px 20px;
}
textarea {
  box-sizing: border-box;
  border: none;
  outline: none;
  resize: vertical;
  padding: 10px 20px;
}
.wrapper {
  box-sizing: border-box;
  min-height: 100vh;
}
.create-post {
  box-sizing: border-box;
  width: var(--content-wrapper-width);
  background-color: aliceblue;
  margin: 20px auto;
  padding: 20px;
}
.post-details {
  display: flex;
  flex-direction: column;
}
.post-title {
  font-size: 24px;
  font-weight: bold;
}
.post-content {
  margin-top: 40px;
}

.btn-create-post {
  box-sizing: border-box;
  margin-top: 40px;
  cursor: pointer;
  color: rgb(28, 171, 49);
  font-weight: bold;
  font-size: 22px;
  border: 1px solid rgb(32, 158, 23);
  border-radius: 5px;
  padding: 10px 20px;
  background-color: white;
  transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;
}
.btn-create-post:hover {
  color: white;
  background-color: rgb(32, 158, 23);
}
</style>
