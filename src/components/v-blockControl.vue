<template>
  <div class="block-control">
    <img
      src="/icons/remove.png"
      @click="emits('deleteBlock')"
      class="block-btn"
    />
    <img
      src="/public/icons/text.png"
      @click="emits('changeType', 'img')"
      v-if="props.block.type == 'text'"
      class="block-btn"
    />
    <img
      src="/public/icons/img.png"
      v-if="props.block.type == 'img'"
      @click="emits('changeType', 'title')"
      class="block-btn"
    />
    <img
      src="/public/icons/title.png"
      v-if="props.block.type == 'title'"
      @click="emits('changeType', 'text')"
      class="block-btn"
    />
    <img
      src="/public/icons/add.png"
      @click="emits('addBlock')"
      class="block-btn"
    />
  </div>
</template>
<script setup>
const props = defineProps(["block"]);
const emits = defineEmits(["deleteBlock", "addBlock", "changeType"]);
</script>
<style scoped>
.block-control {
  position: absolute;
  right: -80px;
  top: 0;
  display: flex;
  flex-direction: column;
  opacity: 0;
  padding: 10px 40px;
}
.block-btn {
  cursor: pointer;
  margin-bottom: 5px;
  padding: 5px 0;
  transition: filter 0.3s ease-in-out;
  filter: invert(40%);
}
.block-btn:hover {
  filter: invert(0%);
}
</style>
