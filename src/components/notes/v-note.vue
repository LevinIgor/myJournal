<template>
  <div class="note">
    <div class="details">
      <span class="date">2022-08-22 22:22</span>
      <span class="id">#{{ note.id }}</span>
    </div>
    <section>
      <div class="title" @click="goToNote()">{{ props.note.title }}</div>
      <span class="blocks">Блоков: {{ props.note.blocks.length }}</span>
    </section>
    <VButton class="btn-open" @click="goToNote()">Смотреть</VButton>
  </div>
</template>
<script setup>
import VButton from "@/components/UI/v-button.vue";
import { useRouter } from "vue-router";
const props = defineProps(["note"]);

const router = useRouter();

function goToNote() {
  router.push(`/notes/${props.note.id}`);
}
</script>
<style scoped>
.details {
  user-select: none;
  display: flex;
  justify-content: space-between;
  font-size: var(--secondary-font-size);
  color: rgba(255, 255, 255, 0.742);
}
.title {
  cursor: pointer;
  margin-top: 10px;
  font-size: var(--title-font-size);
}
.blocks {
  margin-top: 10px;
  font-size: var(--secondary-font-size);
  color: rgba(255, 255, 255, 0.742);
}
.btn-open {
  opacity: 0;
  border: 1px solid rgba(96, 96, 215, 0.678);
  color: rgba(91, 130, 238, 0.854);
  margin-top: 20px;
}
.note:hover .btn-open {
  opacity: 1;
}
.btn-open:hover {
  background-color: rgba(38, 38, 242, 0.628);
  color: rgb(255, 255, 255);
}
</style>
