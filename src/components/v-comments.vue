<template>
  <div class="comments">
    <h2 class="comments-title">
      <img src="@/assets/icons/comment.png" alt="" />
      <span>Комментарии</span>
    </h2>

    <div class="comments-list">
      <VCommentCreate @create="create($event)" />
      <VComment
        v-for="(comment, index) in props.comments"
        :key="index"
        :comment="comment"
        @createReplies="createReplies($event)"
      />
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import VComment from "./v-comment.vue";
import VCommentCreate from "./v-comment-create.vue";
import { createComment } from "@/firebase/postAPI.js";

const emits = defineEmits(["create"]);
const props = defineProps({
  comments: {
    type: Array,
    default: () => [],
  },
  postId: {
    type: Number,
    default: 0,
  },
});

const create = (_comment) => {
  let comment = {
    commentId: Date.now(),
    postId: props.postId,
    author: _comment.author,
    content: _comment.content,
    replies: [],
  };

  createComment(comment).then(() => {
    emits("create", comment);
  });
};
const createReplies = (comment) => {
  console.log(comment);
};
</script>
<style scoped>
.comments {
  margin-top: 100px;
}
.comments-title {
  display: flex;
  align-items: flex-end;
}
.comments-title img {
  width: 30px !important;
  height: 30px;
  filter: invert(70%);
  margin-right: 10px;
}
.comment-create {
  margin-bottom: 100px;
  background-color: aqua;
}
</style>
