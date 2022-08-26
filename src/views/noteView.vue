<template>
  <VHeader :offAdmin="true" :onProgressBar="true" :offSearch="true">
    <img
      class="note-link"
      src="@/assets/icons/note.png"
      alt="notes"
      title="Записки"
      @click="$router.push('/notes/')"
    />
  </VHeader>

  <div class="note-page">
    <VAside @onAsideLinkClick="scrollTo($event)" :note="note" />
    <VNotePage :note="note" @onMounted="pageMounted($event)" />
  </div>
</template>
<script setup>
import VHeader from "@/components/main/header/v-header.vue";
import { ref, onMounted } from "vue";
import { getNote } from "@/firebase/notesAPI";
import { useRoute } from "vue-router";
import VNotePage from "@/components/notes/v-note-page.vue";
import VAside from "@/components/notes/v-aside.vue";


const note = ref([]);
let itemRefs = [];

async function scrollTo(index) {
  itemRefs[index].scrollIntoView({ behavior: "smooth" });
}
function pageMounted(refs) {
  itemRefs = refs;
}

onMounted(async () => {
  let _note = localStorage.getItem("note");
  let route = useRoute();
  _note = JSON.parse(_note);

  if (_note && _note?.id == route.params.id) {
    note.value = _note;
  } else {
    const noteId = route.params.id;
    note.value = await getNote(noteId);
  }

  window.scroll(0, 0);
});
</script>
<style scoped>
.note-page {
  display: flex;
  margin-top: var(--header-height);
}

.note-link {
  cursor: pointer;
  width: 25px !important;
  height: 25px !important;
  filter: invert(0.7);
  transition: filter 0.2s ease-in-out;
}
.note-link:hover {
  filter: invert(1);
}
</style>
