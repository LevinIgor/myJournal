<template>
  <div class="wrapper">
    <input class="title" v-model="post.title" />
    <input class="text" v-model="post.img" />
    <textarea name="" id="" v-model="post.text"></textarea>
    <button @click="createPost" class="btn-create-post">Create post</button>
  </div>
</template>
<script setup>
import { reactive, ref } from "vue";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/firebase";

const imgUrl = ref("");

const post = reactive({
  id: Date.now(),
  title: "",
  img: "",
  text: "",
  tags: [],
});

const createPost = async () => {
  await setDoc(doc(db, "posts", post.id.toString()), post).then(() => {
    console.log("Done");
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
  background-color: #f5f5f5;
  margin-bottom: 40px;
}
textarea {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
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
