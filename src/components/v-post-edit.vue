<template>
  <VPopupMsg :show="isMessage">
    <span>Изменения успешно применены</span>
  </VPopupMsg>
  <div class="post-edit">
    <h1 class="header">Редактирование публикации</h1>
    <form class="post-details">
      <input
        class="post-title"
        v-model="post.title"
        placeholder="Заголовок публикации"
        required
      />
      <input
        class="post-tags"
        v-model="post.tags"
        placeholder="Теги публикации"
      />
      <input
        class="post-img"
        v-model="post.img"
        placeholder="Если необходимо фото, вставить ссылку"
      />
      <textarea
        class="post-desc"
        v-model="post.desc"
        placeholder="Описание поста"
      />
    </form>

    <v-md-editor v-model="post.text" height="900px" />
    <button @click="save()" class="btn-create-post">Сохранить</button>
  </div>
</template>
<script setup>
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";
import getPost from "../firebase/getPost";
import createPost from "../firebase/createPost";
import VPopupMsg from "./v-popup-msg.vue";

const isMessage = ref(false);
const post = ref({});

const save = async () => {
  await createPost(post.value).then(() => {
    isMessage.value = true;
    setTimeout(() => {
      isMessage.value = false;
    }, 5000);
  });
};

onMounted(async () => {
  const route = useRoute();
  const id = route.params.id;
  console.log(id);
  await getPost(id).then((_post) => {
    post.value = _post;
  });
});
</script>
<style scoped>
h1 {
  margin-bottom: 40px;
}
.edit {
  box-sizing: border-box;
  width: var(--content-wrapper-width);
  background-color: aliceblue;

  display: flex;
  flex-direction: column;
}

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
  margin-bottom: 50px;
  border: 1px solid var(--main-border-color);
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
  margin-bottom: 100px;
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
