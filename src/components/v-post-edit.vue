<template>
  <VPopupMsg :show="isMessage">
    <span>Изменения успешно применены</span>
  </VPopupMsg>
  <div class="post-edit">
    <h1 class="header">Редактирование публикации</h1>
    <div class="post-details">
      <VInputHeader v-model="post.title" :placeholder="placeholders.title" />
      <div class="tags">
        <VInput
          v-for="(_, index) in post.tags"
          :key="index"
          :placeholder="'Тег'"
          v-model.trim="post.tags[index]"
          @blur="
            post.tags[index].length == 0 ? post.tags.splice(index, 1) : null
          "
          @keydown.space="
            post.tags[index].length != 0 ? post.tags.push('') : null
          "
          @keydown.enter="
            post.tags[index].length != 0 ? post.tags.push('') : null
          "
        />
      </div>
      <VInput v-model="post.img" :placeholder="placeholders.img" />
    </div>

    <v-md-editor v-model="post.text" height="900px" />
    <VButton @click="save()" class="btn-create-post">Сохранить</VButton>
  </div>
</template>
<script setup>
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";
import getPost from "../firebase/getPost";
import createPost from "../firebase/createPost";
import VPopupMsg from "./v-popup-msg.vue";
import VButton from "./UI/v-button.vue";
import VInput from "./UI/v-input.vue";
import VInputHeader from "./UI/v-inputHeader.vue";

const isMessage = ref(false);
const post = ref({});
const placeholders = ref({
  title: "Заголовок публикации",
  img: "Если необходимо фото, вставить ссылку",
});

const clearEmptyTags = () => {
  post.value.tags = post.value.tags.filter((tag) => tag.length > 0);
};

const save = async () => {
  clearEmptyTags();
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
  padding: 10px;
}
.btn-create-post {
  margin-bottom: 100px;
  margin-top: 40px;
  color: rgb(28, 171, 49);
  border: 1px solid rgb(32, 158, 23);
  padding: 10px 20px;
}
.btn-create-post:hover {
  color: white;
  background-color: rgb(32, 158, 23);
}
</style>
