<template>
  <div class="list">
    <VHeaderList
      @onInvert="invert()"
      @onFilterBy="filterBy($event)"
      @onDeleteMode="isDeleteMode = $event"
    />
    <div class="notes">
      <TransitionGroup name="list">
        <VNote
          class="note"
          v-for="note in searchNotes"
          :key="note.id"
          :note="note"
          :isDeleteMode="isDeleteMode"
          @onDelete="onDeleteNote($event)"
        />
      </TransitionGroup>
      <h1 class="empty" v-if="notes.length == 0">Пусто...</h1>
    </div>
  </div>
</template>
<script setup>
import { ref, inject, onMounted, computed } from "vue";
import { getNotes } from "@/firebase/notesAPI";
import VHeaderList from "@/components/admin/v-header-list.vue";
import VNote from "./v-note.vue";

import { deleteNote } from "@/firebase/notesAPI";

const search = inject("search");
const notes = ref([]);
const isDeleteMode = ref(false);

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

function onDeleteNote(id) {
  if (confirm("Вы действительно хотите удалить заметку?")) {
    deleteNote(id).then(() => {
      notes.value = notes.value.filter((note) => note.id !== id);
    });
  }
}

onMounted(async () => {
  notes.value = await getNotes();
});
</script>
<style scoped>

.empty{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: rgba(240, 248, 255, 0.445);
}
.list-leave-active {
  transition: all 0.3s ease;
}

.list-leave-to {
  opacity: 0;
}
</style>
