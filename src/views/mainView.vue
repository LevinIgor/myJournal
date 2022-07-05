<template>
  <div class="main">
    <div class="header"></div>
    <div class="posts">
      <VPost />
      <VPost />
      <VPost />
    </div>
  </div>
</template>
<script setup>
import VPost from "@/components/v-post.vue";
</script>
<style scoped>
.posts{
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
