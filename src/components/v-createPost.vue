<template>
  <VPopupMsg :show="isMessage" @click="isMessage = false">
    <span>Публикация успешно добавлена</span>
  </VPopupMsg>
  <div class="create-post">
    <h1>Создание публикации</h1>
    <div class="post-details">
      <VInputHeader v-model="post.title" :placeholder="placeholders.title" />
      <VTags @updateTags="post.tags = $event" :tags="post.tags" />
      <VInput v-model="post.img" :placeholder="placeholders.img" />
    </div>
    <div class="post-content">
      <v-md-editor v-model="post.text" height="900px" />
    </div>
    <VButton @click="createPost" class="btn-create-post">Создать</VButton>
  </div>
</template>
<script setup>
import { reactive, ref } from "vue";
import createPostBD from "../firebase/createPost.js";
import VPopupMsg from "@/components/v-popup-msg.vue";
import VButton from "@/components/UI/v-button.vue";
import VTags from "./UI/v-tags.vue";
import VInputHeader from "./UI/v-inputHeader.vue";
import VInput from "./UI/v-input.vue";

const isMessage = ref(false);
const placeholders = ref({
  title: "Заголовок публикации",
  img: "Если необходимо фото, вставить ссылку",
});
const post = reactive({
  id: Date.now(),
  views: 0,
  title: "",
  img: "",
  text: "",
  tags: [""],
  comments:[],
});

const createPost = async () => {
  createPostBD(post).then(() => {
    isMessage.value = true;
    setTimeout(() => {
      isMessage.value = false;
    }, 4000);
    post.title = "";
    post.img = "";
    post.text = "";
    post.tags = [""];
  });
};
</script>
<style scoped>
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
  border: 1px solid var(--main-border-color);
  padding: 10px;
}

.post-content {
  margin-top: 40px;
}

.btn-create-post {
  margin-top: 40px;
  color: rgb(28, 171, 49);
  border: 1px solid rgb(32, 158, 23);
  margin-bottom: 100px;
}
.btn-create-post:hover {
  color: white;
  background-color: rgb(32, 158, 23);
}
</style>
