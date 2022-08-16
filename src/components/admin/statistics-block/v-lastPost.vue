<template>
  <VWrapperBlock>
    <template v-slot:title>Последний пост</template>
    <div class="post" @click="$router.push('/post/' + post.id)">
      <span class="post-title">{{ post.title }}</span>
      <img :src="post.img" v-if="post.img.length > 0" alt="img last post" />

      <div class="post-details">
        <span class="post-date">Загружен: {{ date }}</span>
        <span class="post-views">Просмотров: {{ post.views }}</span>
      </div>
    </div>
  </VWrapperBlock>
</template>
<script setup>
import VWrapperBlock from "./v-wrapper-block.vue";
import { useDateFormat } from "@vueuse/core";
import { computed } from "vue";

const props = defineProps(["posts"]);

const post = computed(() => {
  return props.posts.slice(-1)[0];
});

const date = useDateFormat(post.id, "YYYY.MM.DD");
</script>
<style scoped>
.post {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border: 1px solid var(--main-border-color);
}
.post-title {
  font-weight: bold;
  margin: 10px 0;
}
.post-details{
    display: flex;
    flex-direction: column;
    padding: 10px;
}
.post-details span{
    padding: 10px 20px;
}
</style>
