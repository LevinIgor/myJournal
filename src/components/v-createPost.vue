<template>
  <div class="create-post">
    <h1>Создание публикации</h1>
    <form class="post-details">
      <input
        class="post-title"
        v-model="post.title"
        placeholder="Заголовок публикации"
        required
      />
      <input class="post-tags" v-model="post.tags" placeholder="Теги публикации" />
      <input class="post-img" v-model="post.img" placeholder="Если необходимо фото, вставить ссылку" />
      <textarea class="post-desc" v-model="post.desc" placeholder="Описание поста" />
    </form>
    <div class="post-content">
      <v-md-editor v-model="post.text" height="900px" />
    </div>
    <button @click="createPost" class="btn-create-post">Создать</button>
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
input,
textarea {
  box-sizing: border-box;
  border: none;
  outline: none;
  padding: 10px 20px;
  background-color: transparent;
  color: var(--main-font-color);
  resize: vertical;
}

.create-post {
  box-sizing: border-box;
  width: var(--content-wrapper-width);
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
  background-color: transparent;
  transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;
}
.btn-create-post:hover {
  color: white;
  background-color: rgb(32, 158, 23);
}
</style>
