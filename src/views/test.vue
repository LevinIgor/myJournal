<template>
  <VTest v-model="text" />
  <h1>{{text}}</h1>
</template>
<script setup>
import { ref } from "vue";
import VTest from "@/components/v-test.vue";

const text = ref({
  text: "Hello World"
});


</script>
<style scoped></style>
