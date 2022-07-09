<template>
  <div class="wrapper">
    <VHeader mode="onlyLogo" />
    <div class="post" v-if="!notFound">
      <Markdown :source="post.text" :html="true" :linkify="true" />
    </div>
    <div class="not-found" v-if="notFound">
      <h1>Post of that index is not found</h1>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import getPost from "../firebase/getPost";
import VHeader from "../components/v-header.vue";
import Markdown from "vue3-markdown-it";

const post = ref("");
const notFound = ref(false);

// const md = require("markdown-it")().use(require("markdown-it-highlightjs"));

onMounted(async () => {
  const route = useRoute();
  const postId = route.params.id;
  const answer = await getPost(postId);
  answer === null ? (notFound.value = true) : (post.value = answer);
});
</script>
<style scoped>

.wrapper {
  width: 100%;
  min-height: 100vh;
}
.post-title {
  margin-top: 40px;
  font-size: 28px;
  font-weight: 600;
}

.post-img {
  margin-top: 40px;
  width: 100%;
}
.post-content {
  white-space: pre-wrap;
}
.post-content {
  font-size: 16px;
}
.post-content img {
  box-sizing: border-box;
  width: 100%;
}
.post {
  box-sizing: border-box;
  width: var(--content-wrapper-width);
  margin: 0 auto;
  padding: 20px;
  color: var(--main-font-color);
}
</style>
