<template>
  <div class="comment">
    <div class="comment-header">
      <div class="author">{{ props.comment.author }}</div>
      <div class="number">{{ props.comment.id }}</div>
      <div class="date">{{ props.comment.date }}</div>
    </div>
    <div class="comment-content">
      <p>
        {{ props.comment.content }}
      </p>
    </div>
    <div class="comment-footer">
      <div class="reply">
        <span>Ответить</span>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useDateFormat } from "@vueuse/core";

const props = defineProps(["comment"]);
const inc = Date.now() - props.comment.id
const result = useDateFormat(inc, "YYYY-MM-DD HH:mm");
</script>
<style scoped>
.comment {
  padding: 20px 40px;
  margin-left: 20px;
  border: 1px solid var(--main-border-color);
}
.comment-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
}
.comment-footer {
  display: flex;
  justify-content: flex-end;
}
.reply {
  cursor: pointer;
}
</style>
