<template>
  <div class="filter">
    <img
      src="@/assets/icons/alphabetic.png"
      title="По алфавиту"
      alt="По алфавиту"
      @click="emits('onFilterBy', 'title')"
    />
    <img
      src="@/assets/icons/calendar.png"
      title="По дате"
      alt=" По дате"
      @click="emits('onFilterBy', 'id')"
    />
    <img
      src="@/assets/icons/eye.png"
      title="По просмотрам"
      alt="По просмотрам"
      @click="emits('onFilterBy', 'views')"
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
const emits = defineEmits(["onFilterBy", "onInvert"]);
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
</style>
