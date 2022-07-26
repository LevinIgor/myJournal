<template>
  <div class="tips" @mouseenter="isHover = true" @mouseleave="isHover = false">
    <slot name="content" />

    <span
      ref="tipsRef"
      class="hover-text"
      :style="[
        isHover
          ? { left: `${x - num}px`, top: `${y + 20}px`, visibility: 'visible' }
          : '',
      ]"
      ><slot name="tips"
    /></span>
  </div>
</template>
<script setup>
import { useMouse } from "@vueuse/core";
import { ref, watch } from "vue";

const { x, y } = useMouse();
const isHover = ref(false);
const num = ref(0);

const tipsRef = ref(null);

watch(isHover, () => {
  if (x.value + tipsRef.value.offsetWidth  > window.innerWidth) {
    num.value = tipsRef.value.offsetWidth + 50;
  } else {
    num.value = 0;
  }
});
</script>
<style scoped>
div {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.hover-text {
  position: absolute;
  z-index: 100;
  visibility: hidden;
  padding: 10px 20px;
  background-color: rgb(76, 76, 76);
  color: rgb(219, 219, 219);
  border: 1px solid var(--main-border-color);
  border-radius: 2px;
  user-select: none;
  font-size: 12px;
}
</style>
