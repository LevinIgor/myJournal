<template>
  <div class="filter">
    <img
      src="@/assets/icons/alphabetic.png"
      title="По алфавиту"
      alt="По алфавиту"
      @click="onFilter('title')"
      :class="{'active': currentFilter === 'title'}"
    />
    <img
      src="@/assets/icons/calendar.png"
      title="По дате"
      alt=" По дате"
      @click="onFilter('id')"
      :class="{'active': currentFilter === 'id'}"
    />
    <img
      src="@/assets/icons/eye.png"
      title="По просмотрам"
      alt="По просмотрам"
      @click="onFilter('views')"
      :class="{'active': currentFilter === 'views'}"
    />
    <img
      src="@/assets/icons/up-down-arrow.png"
      title="Изменить порядок"
      alt="Изменить порядок"
      @click="emits('onInvert')"
    />
  </div>
</template>
<script setup>
import { ref } from 'vue';
const emits = defineEmits(["onFilterBy", "onInvert"]);
const currentFilter = ref("");

function onFilter(filter) {
  currentFilter.value = filter;
  emits("onFilterBy", filter);
}
</script>
<style scoped>
.filter img {
  width: 20px !important;
  height: 20px;
  margin-right: 10px;
  filter: invert(0.5);
  cursor: pointer;
  transition: filter 0.2s ease-in-out;
}
.filter img:hover {
  filter: invert(1);
}
.active{
  filter: invert(1) !important;
}
</style>
