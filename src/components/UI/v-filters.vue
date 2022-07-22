<template>
  <div class="filters">
    <div class="current-filter">
      <span>{{ filter.name }}</span>
      <img
        src="@/assets/icons/up-down-arrow.png"
        alt="invert filters"
        @click="invert()"
      />
    </div>
    <div class="filter" @click="setFilter('id', 'По дате')">
      <img src="@/assets/icons/calendar.png" alt="filter by date" />
    </div>
    <div class="filter" @click="setFilter('title', 'По алфавиту')">
      <img src="@/assets/icons/alphabetic.png" alt="filter by alphabets" />
    </div>
    <div class="filter" @click="setFilter('views', 'По просмотрам')">
      <img src="@/assets/icons/eye.png" alt="filter by views" />
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

const emits = defineEmits(["changeFilter", "changeOrder"]);
const filter = ref({ name: "По дате", value: "date", order: "desc" });

const setFilter = (value, name) => {
  const currentFilterValue = filter.value.value;
  filter.value = { name, value, order: "desc" };

  if (currentFilterValue == value) {
    emits("changeOrder");
  } else {
    emits("changeFilter", value);
  }
};

const invert = () => {
  filter.order = filter.order === "desc" ? "asc" : "desc";
  emits("changeOrder", filter.order);
};
</script>
<style scoped>
.filters {
  background-color: var(--main-block-color);
  padding: 10px 10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.filter {
  display: flex;
  align-items: center;
  padding: 0px 10px;
  margin-left: 10px;
}
img {
  width: 25px !important;
  height: 25px;
  cursor: pointer;
  filter: invert(70%);
  transition: filter 0.3s ease-in-out;
}
img:hover {
  filter: invert(100%);
}
.current-filter {
  display: flex;
  align-items: center;
  margin-right: auto;
}
.current-filter img {
  margin-left: 20px;
}
</style>
