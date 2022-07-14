<template>
  <input
    ref="input"
    :value="props.modelValue"
    @input="emit('update:modelValue', $event.target.value)"
    :placeholder="props.placeholder"
  />
</template>
<script setup>
const props = defineProps(["modelValue", "placeholder"]);
const emit = defineEmits(["update:modelValue"]);

</script>
<style scoped>
input {
  box-sizing: border-box;
  outline: none;
  border: 1px solid var(--main-border-color);
  color: var(--main-font-color);
  padding: 5px 10px;
  background-color: transparent;
}
</style>
