<template>
  <div class="wrapper">
    <VProgressBar />
    <VHeader mode="onlyLogo" />
    <div class="not-found" v-if="notFound">
      <h1>Post of that index is not found</h1>
    </div>

    <div class="post">
      <Markdown :source="post.text" :html="true" :linkify="true" />
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import getPost from "../firebase/getPost";
import VHeader from "../components/v-header.vue";
import Markdown from "vue3-markdown-it";
import VProgressBar from "../components/v-progress-bar.vue";

const post = ref("");
const notFound = ref(false);

onMounted(async () => {
  const _post = localStorage.getItem("post");
  if (_post) {
    post.value = JSON.parse(_post);
  } else {
    const route = useRoute();
    const postId = route.params.id;
    const answer = await getPost(postId);

    post.value = answer === undefined ? (notFound = true) : answer;
  }
  window.scroll(0, 0);
});
</script>
<style scoped>
.wrapper {
  width: 100%;
  min-height: 100vh;
}
.post {
  box-sizing: border-box;
  width: var(--content-wrapper-width);
  min-height: 100vh;
  margin: 100px auto;
  padding: 20px;
  color: var(--main-font-color);
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

.not-found {
  box-sizing: border-box;
  width: 100%;
  min-height: 100vh;
  margin: 100px auto;
  padding: 20px;
  color: var(--main-font-color);
}
</style>
