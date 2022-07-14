<template>
  <input
    ref="input"
    :value="props.modelValue"
    @input="emit('update:modelValue', $event.target.value)"
  />
</template>
<script setup>
const props = defineProps(["modelValue"]);
const emit = defineEmits(["update:modelValue"]);
</script>
<style scoped>
input {
  box-sizing: border-box;
  outline: none;
  border: 1px solid var(--main-border-color);
  color: var(--main-font-color);
  padding: 10px 15px;
  background-color: transparent;
  font-size: 24px;
  font-weight: bold;
}
</style>
