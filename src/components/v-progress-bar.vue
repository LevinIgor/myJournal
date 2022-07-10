<template>
  <div class="progress-bar" :style="progressBarStyle" />
</template>
<script setup>
import { ref, computed, onMounted } from "vue";

const scrolled = ref(0);

const progressBarStyle = computed(() => ({
  width: `${scrolled.value}%`,
  height: "2px",
}));

onMounted(() => {
  document.addEventListener("scroll", () => {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight =
      document.documentElement.scrollHeight || document.body.scrollHeight;
    const clientHeight =
      document.documentElement.clientHeight || document.body.clientHeight;
    const _scrolled = (scrollTop / (scrollHeight - clientHeight)) * 100;
    scrolled.value = Math.round(_scrolled, 2);
  });
});
</script>
<style scoped>
.progress-bar {
  position: fixed;
  top: calc(var(--header-height) + 1px);
  left: 0;
  background-color: green;
}
</style>
