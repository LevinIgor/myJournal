<template>
  <div class="note">
    <section class="note-header" :class="{ sticky: isEditMode }">
      <span v-if="!isEditMode" class="note-title">{{ note.title }}</span>
      <input
        v-if="isEditMode"
        class="note-input note-title"
        type="text"
        v-model="note.title"
        :disabled="!isEditMode"
      />

      <section>
        <img
          v-if="!isEditMode"
          class="control-icon"
          @click="isEditMode = true"
          src="@/assets/icons/edit.png"
          alt="edit"
          title="Редактировать"
        />
        <img
          v-if="isEditMode"
          @click="save()"
          class="control-icon"
          src="@/assets/icons/save.png"
          alt="save"
          title="Сохранить"
        />
      </section>
    </section>
    <div
      class="block"
      v-for="(block, index) in props.note.blocks"
      :key="index"
      :ref="setItemRef"
    >
      <span class="block-title" v-if="!isEditMode">{{ block.title }}</span>
      <textarea
        v-else
        type="text"
        class="note-input block-title"
        v-model="block.title"
      />

      <div class="block-content" v-if="!isEditMode">
        {{ block.content }}
      </div>
      <textarea
        v-else
        type="text"
        class="note-input block-content"
        v-model="block.content"
      />
    </div>
  </div>
</template>
<script setup>
import { onBeforeMount, ref } from "vue";
import { createNote } from "@/firebase/notesAPI";

const props = defineProps(["note"]);
const emits = defineEmits(["onMounted"]);

const isEditMode = ref(false);

let itemRefs = [];
const setItemRef = (el) => {
  if (el) {
    itemRefs.push(el);
  }
};

function save() {
  isEditMode.value = false;
  createNote(props.note);
}
onBeforeMount(() => {
  emits("onMounted", itemRefs);
});
</script>
<style scoped>
textarea,
input {
  width: 100%;
  resize: vertical;
}
.note-input {
  border: none;
  background-color: initial;
}
.note-title {
  font-size: xx-large;
}
.note-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 50px;
}
.sticky {
  position: sticky;
  z-index: 10;
  top: var(--header-height);
  background-color: var(--main-bg-color);
}
.block-title {
  font-size: large;
}

.control-icon {
  cursor: pointer;
  width: 25px !important;
  height: 25px !important;
  filter: grayscale(1);
  margin-left: 20px;
  transition: filter 0.3s ease;
}
.control-icon:hover {
  filter: grayscale(0);
}
.note {
  box-sizing: border-box;
  width: var(--content-wrapper-width);
  padding: 10px;
  margin-bottom: 300px;
}
.block {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  user-select: none;
  box-sizing: border-box;
  border: 1px solid rgba(255, 255, 255, 0.269);
  background-color: rgba(240, 255, 255, 0.071);
  padding: 10px;
}
.block-title {
  font-size: 24px;
  margin-bottom: 10px;
}
.block-content {
  font-size: var(--content-font-size);
  margin-top: 10px;
  height: fit-content;
}
</style>
