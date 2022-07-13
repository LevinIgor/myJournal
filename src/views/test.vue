<template>
  <VTest :text="text" />
</template>
<script setup>
import { ref, onMounted } from "vue";
import VTest from "@/components/v-test.vue";

const text = ref("");

onMounted(() => {
  setTimeout(() => {
    text.value = "Привет мир!";
  }, 3000);
});
</script>
<style scoped></style>
