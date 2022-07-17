<template>
  <div class="comments">
    <h2 class="comments-title">
      <img src="@/assets/icons/comment.png" alt="" />
      <span>Комментарии</span>
    </h2>
    <div class="comments-list">
      <VComment
        v-for="(comment, index) in comments"
        :key="index"
        :comment="comment"
      />
      
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import VComment from "./v-comment.vue";

const comments = ref([
  {
    author: "Levin Ihor",
    id: 1657363082422,
    date: "12.12.2000",
    content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat hic earum dolorem velit consequatur exercitationem dolores, voluptate rerum! Quasi dolore dolorem ducimus aliquid repellendus tempora error eius quibusdam, nam repudiandae architecto ex voluptatem aliquam adipisci porro exercitationem consequatur suscipit praesentium rerum, voluptas assumenda ea. Placeat dolores earum debitis impedit totam.",
    replies: [{}],
  },
]);
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
</style>
