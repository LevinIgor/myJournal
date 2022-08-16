<template>
  <vHeader />
  <div class="container">
    <div class="notes">
      <VNote v-for="index in 10" :key="index" class="note" />
    </div>
  </div>
</template>
<script setup>
import vHeader from "@/components/main/header/v-header.vue";
import VNote from "@/components/notes/v-note.vue";

</script>
<style scoped>
.container {
  display: flex;
  justify-content: center;
}
.notes {
  cursor: default;
  margin-top: var(--header-height);
  box-sizing: border-box;
  width: var(--content-wrapper-width);
  padding: 10px;
}
.note {
  margin-top: 40px;
}
</style>
