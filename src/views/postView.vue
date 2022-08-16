<template>
  <div class="wrapper">
    <VProgressBar />
    <VHeader mode="onlyLogo" />
    <div class="not-found" v-if="notFound">
      <h1>Post of that index is not found</h1>
    </div>
    <div class="post">
      <VPath :title="post.title" class="path" />
      <VTags :tags="post.tags" />
      <Markdown :source="post.text" :html="true" :linkify="true" />
      <VComments
        :comments="post.comments"
        :postId="post.id"
        @create="createComment($event)"
        v-if="post"
      />
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import getPost from "@/firebase/getPost";
import VHeader from "@/components/main/header/v-header.vue";
import Markdown from "vue3-markdown-it";
import VProgressBar from "@/components/UI/v-progress-bar.vue";
import VComments from "@/components/comment/v-comments.vue";
import VTags from "@/components/v-tags.vue";
import VPath from "@/components/UI/v-path.vue";

const post = ref("");
const notFound = ref(false);
const route = useRoute()

function createComment(comment) {
  post.value.comments.unshift(comment);
}

onMounted(async () => {

  let _post = localStorage.getItem("post");

  _post = JSON.parse(_post);

  if (_post && _post?.id == route.params.id) {

    post.value = _post;
  } else {

    const postId = route.params.id;
    const answer = await getPost(postId);

    post.value = answer === undefined ? (notFound.value = true) : answer;
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
.path{
  margin-bottom: 20px;
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
