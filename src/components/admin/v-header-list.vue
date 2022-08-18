<template>
  <article class="header">
    <h1 class="title">Список</h1>
    <VFiltersList
      @onFilterBy="emits('onFilterBy', $event)"
      @onInvert="emits('onInvert')"
    >
      <img
        src="@/assets/icons/edit.png"
        alt="edit post"
        class="icon"
        @click="onEditMode()"
        title="Включить режим редактирования"
        :class="{ active: isEditMode }"
      />
      <img
        src="@/assets/icons/delete.png"
        alt="delete post"
        class="icon"
        @click="onDeleteMode()"
        title="Включить режим удаления"
        :class="{ active: isDeleteMode }"
      />
    </VFiltersList>
  </article>
</template>
<script setup>
import { ref } from "vue";
import VFiltersList from "@/components/UI/v-filters-list.vue";

const isDeleteMode = ref(false);
const isEditMode = ref(false);
const emits = defineEmits([
  "onDeleteMode",
  "onFilterBy",
  "onInvert",
  "onEditMode",
]);

function onDeleteMode() {
  if (isEditMode.value) {
    isEditMode.value = false;
    emits("onEditMode", false);
  }
  isDeleteMode.value = !isDeleteMode.value;
  emits("onDeleteMode", isDeleteMode.value);
}
function onEditMode() {
  if (isDeleteMode.value) {
    isDeleteMode.value = false;
    emits("onDeleteMode", false);
  }
  isEditMode.value = !isEditMode.value;
  emits("onEditMode", isEditMode.value);
}
</script>
<style scoped>
.header {
  position: sticky;
  z-index: 100;
  top: var(--header-height);
  background-color: var(--main-bg-color);
  opacity: 0.9;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.icon {
  cursor: pointer;
  width: 20px !important;
  height: 20px;
  margin-left: auto;
  margin-right: 10px;
  filter: grayscale(1);
  transition: filter 0.3s ease;
}
.icon:hover {
  filter: grayscale(0);
}
.active {
  filter: grayscale(0);
}
</style>
