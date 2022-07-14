<template>
  <input
    type="text"
    :value="props.modelValue.text"
    @input="emit('update:modelValue', $event.target.value)"
  />
</template>
<script setup>
const props = defineProps(["modelValue"]);
const emit = defineEmits(["update:modelValue"]);
</script>
<style scoped></style>
