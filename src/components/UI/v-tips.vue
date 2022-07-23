<template>
  <div class="tips" @mouseenter="isHover = true" @mouseleave="isHover = false">
    <slot name="content" />

    <span
      class="hover-text"
      :style="[
        isHover ? { left: `${x}px`, top: `${y + 20}px`, display:'block' } : '',
      ]"
      ><slot name="tips"
    /></span>
  </div>
</template>
<script setup>
import { useMouse } from "@vueuse/core";
import { ref } from "vue";

const { x, y } = useMouse();
const isHover = ref(false);
</script>
<style scoped>
div{
  display: flex;
  flex-direction: column;
 justify-content: center;
}
.hover-text {
  position: absolute;
  z-index: 100;
  display: none;
  padding: 10px 20px;
  background-color: rgb(76, 76, 76);
  color: rgb(219, 219, 219);
  border: 1px solid var(--main-border-color);
  border-radius: 2px;
  user-select: none;
  font-size: 12px;
}
</style>
