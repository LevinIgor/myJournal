<template>
  <span>
    {{ props.text }}
  </span>
</template>
<script setup>
const props = defineProps(["text"]);
</script>
<style scoped></style>
