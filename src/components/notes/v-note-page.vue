<template>
  <div class="note">
    <h1>{{ note.title }}</h1>
    <div
      class="block"
      v-for="(block, index) in props.note.blocks"
      :key="index"
      :ref="setItemRef"
    >
      <span class="line-title">
        {{ block.title }}
      </span>
      <span class="line-content" :class="{ hide: block.hide }">
        {{ block.content }}
      </span>
    </div>
  </div>
</template>
<script setup>
import { onBeforeMount } from "vue";

const props = defineProps(["note"]);
const emits = defineEmits(["onMounted"]);

let itemRefs = [];
const setItemRef = (el) => {
  if (el) {
    itemRefs.push(el);
  }
};
onBeforeMount(() => {
  emits("onMounted", itemRefs);
});
</script>
<style scoped>
.note {
  box-sizing: border-box;
  width: var(--content-wrapper-width);
  padding: 10px;
  margin-bottom: 300px;
}
.block {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  user-select: none;
  box-sizing: border-box;
  border: 1px solid rgba(255, 255, 255, 0.269);
  background-color: rgba(240, 255, 255, 0.071);
  padding: 10px;
}
.line-title {
  font-size: x-large;
}
.line-content {
  font-size: var(--content-font-size);
  margin-top: 10px;
}
</style>
