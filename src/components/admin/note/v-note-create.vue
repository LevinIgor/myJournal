<template>
  <div class="note-create">
    <VPopupMsg :show="isMessage" @click="isMessage = false">
      <span>Записка успешно добавлена</span>
    </VPopupMsg>
    <h1>Создание записки</h1>
    <section>
      <VInputHeader :placeholder="'Заголовок записки'" v-model="note.title" />
      <div class="btn-control">
        <span @click="addBlock()">Добавить</span>
        <span @click="onDeleteMode()" :class="{ 'delete-active': isDeleteMode }"
          >Удаление</span
        >
        <span @click="create()" :class="{ disable: note.title.length == 0 }"
          >Создать</span
        >
      </div>
      <article
        v-for="(block, index) in note.blocks"
        :key="index"
        class="create-block"
      >
        <VInput :placeholder="'Заголовок'" v-model="block.title" />
        <VBaseTextarea :placeholder="'Текст'" v-model="block.content" />
        <div class="delete-block" v-if="isDeleteMode">
          <span @click="onDelete(index)">Удалить</span>
        </div>
      </article>
    </section>
  </div>
</template>
<script setup>
import VInputHeader from "@/components/UI/v-inputHeader.vue";
import VInput from "@/components/UI/v-input.vue";
import VBaseTextarea from "@/components/UI/v-base-textarea.vue";
import { createNote } from "@/firebase/notesAPI";
import { ref } from "vue";
import VPopupMsg from "@/components/v-popup-msg.vue";

const isDeleteMode = ref(false);
const isMessage = ref(false);
const note = ref({
  title: "",
  views: 0,
  id: Date.now(),
  blocks: [{ title: "", content: "" }],
});

function addBlock() {
  note.value.blocks.push({
    title: "",
    content: "",
  });
}
function onDeleteMode() {
  isDeleteMode.value = !isDeleteMode.value;
}
function onDelete(index) {
  if (note.value.blocks.length > 1) {
    note.value.blocks.splice(index, 1);
  }
}

function create() {
  if (!validate()) {
    return;
  }
  createNote(note.value).then(() => {
    showNotification();
    clearNote();
  });
}

function showNotification() {
  isMessage.value = true;
  setTimeout(() => {
    isMessage.value = false;
  }, 4000);
}

function clearNote() {
  note.value = {
    title: "",
    id: Date.now(),
    blocks: [{ title: "", content: "" }],
  };
}

function validate() {
  if (note.value.title.length < 1) {
    return false;
  }
  return true;
}
</script>
<style scoped>
section {
  border: 1px solid rgba(204, 204, 204, 0.158);
  padding: 10px;
}
.btn-control {
  position: sticky;
  z-index: 10;
  display: flex;
  top: var(--header-height);
  background-color: rgb(50, 50, 50);
  margin-top: 30px;
  margin-bottom: 10px;
}
.btn-control span {
  user-select: none;
  font-size: var(--content-font-size);
  color: rgb(201, 198, 198);
  border: none;
  padding: 5px 10px;
  margin: 5px;
  cursor: pointer;
}
.btn-control span:hover {
  color: rgb(255, 255, 255);
}
.btn-control span:last-child {
  margin-left: auto;
}

.create-block {
  position: relative;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
}
.delete-block {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.363);
}
.delete-block span {
  user-select: none;
  font-size: var(--content-font-size);
  color: rgb(201, 198, 198);
  border: none;
  padding: 5px 10px;
  margin: 5px;
  cursor: pointer;
}
.delete-block span:hover {
  color: rgb(255, 255, 255);
}
.delete-active {
  color: rgb(198, 90, 43) !important;
}

.disable {
  color: rgb(102, 102, 102) !important;
  cursor: default !important;
}
</style>
