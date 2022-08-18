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
  cursor: default;
  display: flex;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.756);
}
.post-tag {
  margin: 0 5px;
  cursor: pointer;
  text-decoration: underline;
  transition: all .3s ease;
}
.post-tag:hover{
  color: white;
}
</style>
