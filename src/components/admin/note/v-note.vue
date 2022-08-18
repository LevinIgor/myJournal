<template>
  <div class="note">
    <section>
      <span
        class="note-title"
        @click="$router.push('/notes/' + props.note.id)"
        >{{ props.note.title }}</span
      >
      <span class="note-blocks"
        >Кол-во блоков: {{ props.note.blocks.length }}</span
      >
    </section>
    <section>
      <div class="note-date">{{ getDate(props.note.id) }}</div>
      <div class="note-id">Просмотров: {{ props.note.views }}</div>
    </section>
    <section class="delete-mode" v-if="props.isDeleteMode">
      <span class="delete-span" @click="emits('onDelete', props.note.id)"
        >Удалить</span
      >
    </section>
  </div>
</template>
<script setup>
import { useDateFormat } from "@vueuse/core";

const props = defineProps(["note", "isDeleteMode"]);
const emits = defineEmits(["onDelete"]);

function getDate(id) {
  return useDateFormat(id, "YYYY-MM-DD HH:mm");
}
</script>
<style scoped>
.note {
  position: relative;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  margin-bottom: 10px;
}
section {
  display: flex;
  flex-direction: column;
}
.note-title {
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.delete-mode {
  user-select: none;
  z-index: 20;
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: rgba(242, 82, 82, 0.208);
}
.delete-mode:hover {
  background-color: rgba(242, 82, 82, 0.408);
}
.delete-span {
  color: rgba(240, 248, 255, 0.607);
  cursor: pointer;
  transition: color 0.3s ease-in-out;
}
.delete-span:hover {
  color: rgb(240, 248, 255);
}
</style>
