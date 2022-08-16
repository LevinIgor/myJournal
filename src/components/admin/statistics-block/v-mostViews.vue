<template>
  <VWrapperBlock>
    <template v-slot:title>Самый просматриваемый пост</template>

    <div class="post" @click="$router.push('/post/' + mostViewsPost.id)">
      <span class="post-title">{{ postTitle }}</span>
      <img
        :src="mostViewsPost.img"
        alt="img"
        v-if="mostViewsPost.img.length > 0"
      />
    </div>

    <span>За все время было {{ mostViewsPost.views }} просмотров</span>
  </VWrapperBlock>
</template>
<script setup>
import VWrapperBlock from "./v-wrapper-block.vue";
import { computed } from "vue";

const props = defineProps(["posts"]);

const postTitle = computed(() => {
  return mostViewsPost.value.title;
});
const mostViewsPost = computed(() => {
  return props.posts.sort((a, b) => b.views - a.views)[0];
});
</script>
<style scoped>
img {
  width: 400px !important;
}
span {
  margin: 10px 0;
}

.post {
  cursor: pointer;
  display: grid;
  border: 1px solid var(--main-border-color);
  padding: 10px;
}
.post-title {
  font-weight: bold;
}
</style>
