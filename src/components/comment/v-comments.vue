<template>
  <VPopupMsg :show="isMessageShow">Успешно добавлено</VPopupMsg>
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
import { ref } from "vue";
import VComment from "./v-comment.vue";
import VCommentCreate from "./v-comment-create.vue";
import { createComment } from "@/firebase/postAPI.js";
import VPopupMsg from "@/components/v-popup-msg.vue";

const emits = defineEmits(["create"]);
const props = defineProps(["comments", "postId"]);

const isMessageShow = ref(false);

const create = (_comment) => {
  let comment = {
    id: Date.now(),
    postId: props.postId,
    author: _comment.author,
    content: _comment.content,
    replies: [],
  };

  createComment(comment).then(() => {
    emits("create", comment);
    isMessageShow.value = true;
    setTimeout(() => {
      isMessageShow.value = false;
    }, 3000);
  });
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
