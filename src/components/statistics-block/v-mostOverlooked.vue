<template>
  <VWrapperBlock>
    <template v-slot:title>Самый не просматриваемый пост</template>

    <div class="post" @click="$router.push('/post/' + mostOverlookedPost.id)">
      <span class="post-title">{{ mostOverlookedPost.title }}</span>
      <img
        :src="mostOverlookedPost.img"
        alt="img"
        v-if="mostOverlookedPost.img.length > 0"
      />
    </div>

    <span>За все время было {{ mostOverlookedPost.views }} просмотров</span>
  </VWrapperBlock>
</template>
<script setup>
import VWrapperBlock from "./v-wrapper-block.vue";
import { computed } from "vue";

const props = defineProps(["posts"]);

const mostOverlookedPost = computed(() => {
  let sorted = props.posts.sort((a, b) => b.views - a.views);
  return sorted.slice(-1)[0];
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
