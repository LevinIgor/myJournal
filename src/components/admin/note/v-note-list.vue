<template>
  <div class="list">
    <div class="title">
      <h1>Записки</h1>
      <VFiltersList @onFilterBy="filterBy($event)" @onInvert="invert()" />
    </div>
    <div class="notes">
      <div class="note" v-for="(note, index) in searchNotes" :key="index">
        <section>
          <span class="note-title">{{ note.title }}</span>
          <span class="note-blocks"
            >Кол-во блоков: {{ note.blocks.length }}</span
          >
        </section>
        <section>
          <div class="note-date">{{ getDate(note.id) }}</div>
          <div class="note-id">Просмотров: {{ note.views }}</div>
        </section>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, inject, onMounted, computed } from "vue";
import { getNotes } from "@/firebase/notesAPI";
import { useDateFormat } from "@vueuse/core";
import VFiltersList from "../../UI/v-filters-list.vue";

const search = inject("search");
const notes = ref([]);

const searchNotes = computed(() => {
  return notes.value.filter((note) => {
    return note.title.toLowerCase().includes(search.value.toLowerCase());
  });
});

function invert() {
  notes.value.reverse();
}

let currentFilter = "";

function filterBy(filter) {
  if (currentFilter === filter) {
    notes.value.reverse();
  } else {
    notes.value.sort((a, b) => a[filter] - b[filter]);
    currentFilter = filter;
  }
}

function getDate(id) {
  return useDateFormat(id, "YYYY-MM-DD HH:mm");
}

onMounted(async () => {
  notes.value = await getNotes();
  console.log(notes.value);
});
</script>
<style scoped>
section {
  display: flex;
  flex-direction: column;
}
.title {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.note-title {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}
.note {
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  padding: 10px 20px;
}
</style>
