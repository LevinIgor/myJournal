<template>
  <div class="filter">
    <slot />
    <section>
      <img
        src="@/assets/icons/calendar.png"
        title="По дате"
        alt=" По дате"
        @click="onFilter('id')"
        :class="{ active: currentFilter === 'id' }"
      />
      <img
        src="@/assets/icons/eye.png"
        title="По просмотрам"
        alt="По просмотрам"
        @click="onFilter('views')"
        :class="{ active: currentFilter === 'views' }"
      />
      <img
        src="@/assets/icons/up-down-arrow.png"
        title="Изменить порядок"
        alt="Изменить порядок"
        @click="emits('onInvert')"
      />
    </section>
  </div>
</template>
<script setup>
import { ref } from "vue";
const emits = defineEmits(["onFilterBy", "onInvert"]);
const currentFilter = ref("");

function onFilter(filter) {
  currentFilter.value = filter;
  emits("onFilterBy", filter);
}
</script>
<style scoped>
section {
  display: flex;
  align-items: center;
  border-left: 2px solid rgba(204, 204, 204, 0.272);
}
.filter {
  user-select: none;
  display: flex;
}
.filter img {
  user-select: none;
  width: 20px !important;
  height: 20px;
  margin: 0px 10px;
  filter: invert(0.5);
  cursor: pointer;
  transition: filter 0.2s ease-in-out;
}
.filter img:hover {
  filter: invert(1);
}
.active {
  filter: invert(1) !important;
}
</style>
