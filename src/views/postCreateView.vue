<template>
  <div class="wrapper">
    <input class="title" v-model="post.title" placeholder="Title post..." />
    <input class="title" v-model="post.img" placeholder="Img url" />
    <textarea v-model="post.text" placeholder="Main content" />
    <button @click="createPost" class="btn-create-post">Create post</button>
  </div>
</template>
<script setup>
import { reactive } from "vue";
import createPostBD from "../firebase/createPost.js";

const post = reactive({
  id: Date.now(),
  title: "",
  img: "",
  text: "",
  tags: "",
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
.wrapper {
  box-sizing: border-box;
  width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 100px;
}
.title {
  box-sizing: border-box;
  width: 100%;
  font-size: 24px;
  padding: 10px 20px;
  margin: 10px 0;
  background-color: #f5f5f5;
}
textarea {
  box-sizing: border-box;
  min-height: 600px;
  width: 100%;
  padding: 10px;
  margin-top: 40px;
  font-size: 20px;
}

.text-type {
  width: 100%;
}
.text-type textarea {
  border: none;
  font-size: 18px;
}
.img-type {
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.img-type img {
  width: 100%;
  object-fit: cover;
}
.block {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  background-color: white;
  min-height: 150px;
  padding: 10px;
}
.block:hover .block-control {
  opacity: 1;
}
.title-type {
  width: 100%;
  display: flex;
  align-items: flex-end;
  padding-bottom: 20px;
}
.title-type input {
  box-sizing: border-box;
  width: 100%;
  font-size: 28px;
  text-align: center;
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
