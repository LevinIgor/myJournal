<template>
  <VPopupMsg :show="isMessageShow" class="popup">
    Не все поля заполнены</VPopupMsg
  >
  <div class="comment-create">
    <label>Имя пользователя</label>
    <VInput
      class="input"
      :placeholder="'Пользователь'"
      v-model="comment.author"
    />

    <label>Текст комментария</label>
    <VBaseTextarea
      @keypress.enter.prevent="create()"
      class="textarea"
      :placeholder="'Текст комментария. Mакс 1000 символов'"
      v-model="comment.content"
      :maxlength="1000"
    />
    <div class="footer">
      <VButton class="create" @click="create()">Добавить</VButton>
    </div>
  </div>
</template>
<script setup>
import VInput from "@/components/UI/v-input.vue";
import VBaseTextarea from "@/components/UI/v-base-textarea.vue";
import VButton from "@/components/UI/v-button.vue";
import { ref } from "vue";
import VPopupMsg from "@/components/v-popup-msg.vue";

const comment = ref({
  id: Date.now(),
});

const isMessageShow = ref(false);

const emits = defineEmits(["create"]);

const create = () => {
  if (comment.value.author && comment.value.content) {
    emits("create", comment.value);
    comment.value = {
      id: Date.now(),
    };
  } else {
    isMessageShow.value = true;
    setTimeout(() => {
      isMessageShow.value = false;
    }, 3000);
  }
};
</script>
<style scoped>
.popup {
  background-color: rgba(255, 0, 0, 0.318) !important;
}
.textarea {
  width: 100%;
}
.input,
.textarea {
  background-color: rgb(230, 230, 230);
  color: rgba(0, 0, 0, 0.867);
  margin-bottom: 40px;
}
.comment-create {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid var(--main-border-color);
  padding: 20px;
  margin-top: 20px;
  margin-bottom: 50px;
}

.footer {
  display: flex;
  justify-content: flex-end;
}
.create {
  box-sizing: border-box;
  width: 120px;
  border: 1px solid green;
  color: green;
  justify-self: end;
}
.create:hover {
  background-color: green;
  color: white;
}
</style>
