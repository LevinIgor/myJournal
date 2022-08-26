<template>
  <VPopupMsg :show="isMessage" @click="isMessage = false">
    <span>Публикация успешно добавлена</span>
  </VPopupMsg>

  <div class="create-post">
    <section>
      <h1>Создание публикации</h1>
      <span @click="createPost" :class="{ disable: post.title.length == 0 }"
        >Создать</span
      >
    </section>

    <div class="post-details">
      <VInputHeader v-model="post.title" :placeholder="placeholders.title" />
      <VTags @updateTags="post.tags = $event" :tags="post.tags" />
      <VInput v-model="post.img" :placeholder="placeholders.img" />
    </div>

    <div class="post-content">
      <v-md-editor v-model="post.text" height="900px" />
    </div>
  </div>
</template>
<script setup>
import { reactive, ref } from "vue";
import createPostBD from "@/firebase/createPost.js";
import VPopupMsg from "@/components/v-popup-msg.vue";
import VButton from "@/components/UI/v-button.vue";
import VTags from "@/components/UI/v-tags.vue";
import VInputHeader from "@/components/UI/v-inputHeader.vue";
import VInput from "@/components/UI/v-input.vue";

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
  comments: [],
});

const createPost = async () => {
  if (post.title.length === 0) {
    return;
  }
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
section {
  position: sticky;
  top: var(--header-height);
  background-color: var(--main-bg-color);
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
section span {
  user-select: none;
  color: rgba(240, 248, 255, 0.701);
  cursor: pointer;
}
section span:hover {
  color: var(--main-font-color);
}

.disable {
  color: rgba(240, 248, 255, 0.329) !important;
  cursor: default;
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
</style>
