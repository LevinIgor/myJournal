<template>
  <textarea
    ref="input"
    :value="props.modelValue"
    @input="emit('update:modelValue', $event.target.value)"
    :placeholder="props.placeholder"
    :maxlength="maxlength"
  ></textarea>
</template>
<script setup>
const props = defineProps(["modelValue", "placeholder", "maxlength"]);
const emit = defineEmits(["update:modelValue"]);
</script>
<style scoped>
textarea {
  box-sizing: border-box;
  outline: none;
  border: 1px solid var(--main-border-color);
  color: var(--main-font-color);
  min-height: 100px;
  padding: 10px 15px;
  margin: 5px 0;
  font-size: 14px;
  background-color: transparent;
  resize: vertical;
}
</style>
