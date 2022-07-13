<template>
  <div class="tags">
    <input
      v-for="(tag, index) in tags"
      :key="index"
      ref="tagsRef"
      class="input"
      v-model.trim="tags[index]"
      @keydown.space="createTag(index)"
      @keydown.enter="createTag(index)"
      @blur="inputCheck(index)"
      placeholder="Тег "
    />
  </div>
</template>
<script setup>
import { ref, watch, nextTick, computed } from "vue";
const props = defineProps(["test"]);

const emit = defineEmits(["updateTags"]);

const tags = ref([""]);
const tagsRef = ref([]);

const createTag = (index) => {
  if (tags.value[index] != "") {
    tags.value.push("");
    inputFocus(tags.value.length - 1);
  }
};

const inputFocus = (index) => {
  nextTick(() => {
    tagsRef.value[index].focus();
  });
};

const inputCheck = (index) => {
  if (tags.value[index] === "" && tags.value.length > 1) {
    tags.value.splice(index, 1);
  }
};

watch(
  () => tags,
  (newValue) => {
    emit("updateTags", newValue);
  },
  { deep: true }
);

</script>
<style scoped>
.input {
  box-sizing: border-box;
  border: 1px solid var(--main-border-color);
  border-radius: 10px;
  width: 100px;
  text-align: center;
  margin: 5px 5px;
  outline: none;
  padding: 5px 10px;
  background-color: transparent;
  color: var(--main-font-color);
}
</style>
