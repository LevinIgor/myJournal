<template>
  <div class="post">
    <div class="img" @click="$router.push('/post/' + props.post.id)">
      <img
        :src="props.post.img"
        class="img"
        :alt="props.post.title"
        v-if="props.post.img"
      />
      <img v-else src="@/assets/icons/image.png" alt="not found" />
    </div>

    <section>
      <div class="title" @click="$router.push('/post/' + props.post.id)">
        {{ props.post.title }}
      </div>
      <div class="views">Просмотров: {{ props.post.views }}</div>
    </section>
    <div class="date">{{ getDate(props.post.id) }}</div>

    <section class="mode-section" v-if="isDeleteMode || isEditMode">
      <span
        v-if="props.isDeleteMode"
        class="mode-span"
        @click="emits('deletePost', props.post.id)"
        >Удалить</span
      >

      <router-link
        v-if="props.isEditMode"
        class="mode-span"
        :to="'/admin/post/edit/' + props.post.id"
        >Редактировать</router-link
      >
    </section>
  </div>
</template>
<script setup>
import { useDateFormat } from "@vueuse/core";
const props = defineProps(["post", "isDeleteMode", "isEditMode"]);
const emits = defineEmits(["deletePost"]);

function getDate(id) {
  return useDateFormat(id, "YYYY-MM-DD HH:mm");
}
</script>
<style scoped>
.title {
  cursor: pointer;
}
.views {
  user-select: none;
}

.post {
  position: relative;
  display: flex;
  align-items: flex-start;
  padding: 0.5rem;
  border-bottom: 1px solid rgba(240, 248, 255, 0.607);
  margin-top: 10px;
}
.img {
  cursor: pointer;
  width: 100px !important;
  height: 60px;
  margin-right: 40px;
}
.img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.views {
  font-size: 0.8rem;
  color: rgba(240, 248, 255, 0.607);
  margin-top: 5px;
}
.date {
  user-select: none;
  position: absolute;
  top: 0;
  right: 0;
  color: rgba(240, 248, 255, 0.607);
  font-size: small;
}

.mode-section {
  user-select: none;
  position: absolute;
  z-index: 10;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.034);
}
.mode-section:hover {
  background-color: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(240, 248, 255, 0.607);
}

.mode-span {
  color: rgba(240, 248, 255, 0.607);
  cursor: pointer;
  transition: color 0.3s ease-in-out;
  font-size: 20px;
}
.mode-span:hover {
  color: rgb(240, 248, 255);
}
</style>
