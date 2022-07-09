<template>
  <transition name="popup">
    <div class="popup" v-if="props.show">
      <slot />
    </div>
  </transition>
</template>
<script setup>
const props = defineProps(['show'])
</script>
<style scoped>
.popup {
  position: fixed;
  cursor: pointer;
  z-index: 100;
  bottom: 100px;
  right: 100px;
  padding: 20px 40px;
  border: 1px solid var(--main-border-color);
  border-radius: 5px;
  animation: pulls 1s infinite;
}
@keyframes pulls {
  0% {
    background-color: rgba(12, 52, 12, 0.642);
  }
  50% {
    background-color: rgb(26, 114, 26);
  }
  100% {
    background-color: rgba(12, 52, 12, 0.642);
  }
}
.popup-enter-active,
.popup-leave-active {
  transition: opacity .3s ease-in, transform .7s;
}

.popup-enter-from,
.popup-leave-to {
  transform: translateY(200px);
  opacity: 0;
}
</style>
