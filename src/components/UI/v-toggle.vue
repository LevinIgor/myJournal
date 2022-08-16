<template>
  <button class="toggle" @click="switchToggle()">
    <div class="circle" :class="{ right: startPosition }"></div>
  </button>
</template>
<script setup>
import { ref } from "vue";
const emits = defineEmits(["onSwitch"]);
const props = defineProps(["startPosition"]);

const startPosition = ref(props.startPosition == "right" ? true : false);

function switchToggle() {
  startPosition.value = !startPosition.value;
  emits("onSwitch");
}
</script>
<style scoped>
.toggle {
  cursor: pointer;
  position: relative;
  outline: none;
  box-sizing: border-box;
  border: 1px solid black;
  border-radius: 30px;
  width: 40px;
  height: 20px;
  padding: 0;
  background-color: rgb(52, 52, 52);
  transform: scale(0.8);
}
.circle {
  position: absolute;
  box-sizing: border-box;
  border: 1px solid rgb(120, 120, 120);
  background-color: rgba(172, 172, 172, 0.731);
  border-radius: 50%;
  width: 22px;
  height: 22px;
  top: -2px;
  left: -2px;
}
.right {
  left: auto;
  right: -2px;
}
</style>
