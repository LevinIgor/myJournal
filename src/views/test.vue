<template>
  <div class="test">
    <main>
      <span @mouseenter="isHover = true" @mouseleave="isHover = false"
        >Hover me </span
      >
      <span
        class="hover-text"
        :style="[
          isHover
            ? { left: `${x + 10}px`, top: `${y + 10}px`, opacity: '1' }
            : '',
        ]"
        >Hover text</span
      >
    </main>
  </div>
</template>
<script setup>
import { useMouse } from "@vueuse/core";
import { reactive, computed, watch, ref } from "vue";

const { x, y } = useMouse();
const isHover = ref(false);
</script>
<style scoped>
.test {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
.hover-text {
  position: absolute;
  opacity: 0;
  padding: 20px 30px;
  transition: opacity 0.3s ease-in-out;
  background-color: rgba(240, 248, 255, 0.153);
}
</style>
