<template>
  <vHeader @search="search = $event" />
  <div class="container">
    <div class="notes">
      <VNote
        v-for="note in filteredNotes"
        :key="note.id"
        class="note"
        :note="note"
      />
    </div>
  </div>
</template>
<script setup>
import vHeader from "@/components/main/header/v-header.vue";
import VNote from "@/components/notes/v-note.vue";
import { getNotes } from "@/firebase/notesAPI";
import { onMounted, ref, computed } from "vue";

const notes = ref([]);
const search = ref("");

const filteredNotes = computed(() => {
  return notes.value.filter((notes) => {
    return notes.title.toUpperCase().includes(search.value.toUpperCase());
  });
});

onMounted(async () => {
  notes.value = await getNotes();
});
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
