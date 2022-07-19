<template>
  <div class="comment">
    <div class="comment-header">
      <img src="@/assets/icons/user.png" alt="" />
      <span class="author"> {{ props.comment.author }}</span>
      <span class="date">{{ date }}</span>
    </div>
    <p class="comment-content">
      {{ props.comment.content }}
    </p>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useDateFormat } from "@vueuse/core";

const props = defineProps(["comment"]);
const emits = defineEmits(["createReplies"]);
const date = useDateFormat(props.comment.id, "YYYY-MM-DD HH:mm");

</script>
<style scoped>
.comment {
  border: 1px solid var(--main-border-color);
  margin: 40px 0;
}
.comment-header {
  display: flex;
  align-items: flex-end;
  background-color: rgba(240, 248, 255, 0.01);
  padding: 10px 20px;
}
.author {
  font-size: 20px;
  font-weight: bold;
  color: green;
}
img {
  width: 30px !important;
  height: 30px;
  filter: invert(70%);
  margin-right: 10px;
}
.date {
  margin-left: auto;
}
.comment-content{
  padding: 10px 20px;
}
</style>
