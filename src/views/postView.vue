<template>
  <div class="wrapper">
    <div class="post" v-if="!notFound">
      <div class="post-title">{{ post.title }}</div>
      <div class="post-content" v-html="post.text"></div>
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

const post = ref("");
const notFound = ref(false);

onMounted(async () => {
  const route = useRoute();
  const postId = route.params.id;
  const answer = await getPost(postId);
  answer === null ? (notFound.value = true) : (post.value = answer);
});
</script>
<style scoped>
.post-content {
  white-space: pre-wrap;
  overflow: scroll;
}
.post-content {
  font-size: 20px;
}
.post-content img {
  box-sizing: border-box;
  width: 100%;
}
.wrapper {
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding: 20px 0;
}
.post {
  box-sizing: border-box;
  width: var(--content-wrapper-width);
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
}
.post-title {
  margin-top: 40px;
  font-size: 44px;
}
</style>
