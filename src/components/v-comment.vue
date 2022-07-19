<template>
  <div class="comment">
    <div class="comment-header">
      <span class="author">{{ props.comment.author }}</span>
      <span class="id">#{{ props.comment.id }}</span>
      <span class="date">{{ props.comment.date }}</span>
    </div>
    <p class="comment-content">
      {{ props.comment.content }}
    </p>
    <div class="comment-footer">
      <div class="reply">
        <span @click="showCreateForm()">Ответить</span>
      </div>
    </div>
      <VCommentCreate v-if="isCreateForm" @create="createReplies($event)" />
    <div class="comment-replies" v-if="props.comment.replies.length>0">
      <div
        class="replies"
       
        v-for="(replies, index) in props.comment.replies"
        :key="index"
      >
        <div class="replies-header">
          <span class="author">{{ replies.author }}</span>
          <span class="replies-to">В ответ: {{ replies.repliesTo }}</span>
          <span class="id">{{ replies.id }}</span>
          <span class="date">{{ replies.date }}</span>
        </div>
        <p class="replies-content">
          {{ replies.content }}
        </p>
        <div class="replies-footer"></div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import VCommentCreate from "./v-comment-create.vue";

const props = defineProps(["comment"]);
const emits = defineEmits(["createReplies"]);
const isCreateForm = ref(false);

const showCreateForm = () => {
  isCreateForm.value = true;
};
const hideCreateForm = () => {
  isCreateForm.value = false;
};

const createReplies = (comment) => {
  hideCreateForm();
  emits("createReplies", comment);
};
</script>
<style scoped>
.comment {
  padding: 20px;
  border: 1px solid var(--main-border-color);
  margin: 40px 0;
}
.comment-header {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 40px;
}
.id {
  color: rgba(255, 255, 255, 0.595);
  font-size: 12px;
  margin-left: 40px;
}
.date {
  margin-left: auto;
}
.comment-footer {
  display: flex;
  justify-content: flex-end;
}
.reply {
  cursor: pointer;
}
.comment-replies {
  margin: 40px 0 0px 40px;
}
.replies-header {
  display: flex;
}
.replies-to {
  margin-left: 40px;
}
</style>
