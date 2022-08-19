<template>
  <aside class="aside">
    <h2 class="section-title">Оглавление</h2>
    <div class="section-content">
      <span
        class="section-item"
        v-for="(block, index) in props.note.blocks"
        :key="index"
        @click="emits('onAsideLinkClick', index)"
        >{{ block.title }}</span
      >
    </div>
  </aside>
</template>
<script setup>
const props = defineProps(["note"]);
const emits = defineEmits(["onAsideLinkClick"]);
</script>
<style scoped>
.aside {
  user-select: none;
  position: sticky;
  box-sizing: border-box;
  overflow: scroll;
  max-height: calc(100vh - var(--header-height));
  top: var(--header-height);
  width: 200px;
  height: calc(100vh - var(--header-height));
  background-color: var(--fixed-bg-color);
  padding: 10px;
  border-right: 1px solid rgba(255, 255, 255, 0.089);
}
.aside h2 {
  margin: 0;
  padding: 0;
}
.section-title {
  font-size: large;
  margin-top: 10px;
}
.section-content {
  display: flex;
  flex-direction: column;
  padding: 10px;
}
.section-item {
  cursor: pointer;
  margin-top: 20px;
  color: rgba(240, 248, 255, 0.651);
  transition: color 0.2s ease-in-out;
}
.section-item:hover {
  color: rgba(240, 248, 255, 1);
}
</style>
