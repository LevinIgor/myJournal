<template>
  <div class="post-tags">
    <span>Метки:</span>

    <span
      class="post-tag"
      @click="$router.push('/posts/' + tag)"
      v-for="(tag, index) in props.tags"
      :key="index"
      ><VTips>
        <template v-slot:content>{{ tag }}</template>
        <template v-slot:tips>Поиск по метке {{ tag }}</template>
      </VTips></span
    >
  </div>
</template>
<script setup>
import VTips from "./UI/v-tips.vue";
const props = defineProps(["tags"]);
</script>
<style scoped>
.post-tags {
  display: flex;
  font-size: 12px;
  color: var(--second-font-color);
  padding: 5px 0;
}
.post-tag {
  margin: 0 5px;
  cursor: pointer;
  text-decoration: underline;
}
</style>
