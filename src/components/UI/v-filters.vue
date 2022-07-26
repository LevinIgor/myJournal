<template>
  <div class="filters">
    <div class="current-filter">
      <transition name="slide-fade" mode="out-in">
        <span class="current-span" :key="filter.name">{{ filter.name }}</span>
      </transition>

      <VTips>
        <template v-slot:content>
          <img
            src="@/assets/icons/up-down-arrow.png"
            alt="invert filters"
            @click="invert()"
          />
        </template>
        <template v-slot:tips>Изменить порядок</template>
      </VTips>
    </div>
    <div class="icons">
      <VTips>
        <template v-slot:content>
          <div
            class="filter"
            :class="{ active: filter.value == 'id' }"
            @click="setFilter('id', 'По дате')"
          >
            <img src="@/assets/icons/calendar.png" alt="filter by date" />
          </div>
        </template>
        <template v-slot:tips>По дате</template>
      </VTips>

      <VTips>
        <template v-slot:content>
          <div
            class="filter"
            :class="{ active: filter.value == 'title' }"
            @click="setFilter('title', 'По алфавиту')"
          >
            <img
              v-if="order == 'desc'"
              src="@/assets/icons/alphabetic.png"
              alt="filter by alphabets"
            />
            <img
              v-if="order == 'asc'"
              src="@/assets/icons/alphabetic-reverse.png"
              alt="filter by alphabets"
            /></div
        ></template>
        <template v-slot:tips>По алфавиту</template>
      </VTips>

      <VTips>
        <template v-slot:content>
          <div
            class="filter"
            :class="{ active: filter.value == 'views' }"
            @click="setFilter('views', 'По просмотрам')"
          >
            <img src="@/assets/icons/eye.png" alt="filter by views" /></div
        ></template>
        <template v-slot:tips>По просмотрам</template>
      </VTips>
    </div>
    <div class="icons-mobile">
      <div class="icon-mobile-menu-icon">
        <img src="../../assets/icons/filter.png" alt="" />
      </div>
      <div class="icons-mobile-content">
        <img
          src="@/assets/icons/calendar.png"
          alt="filter by date"
          @click="setFilter('id', 'По дате')"
        />
        <img
          src="@/assets/icons/eye.png"
          alt="filter by views"
          @click="setFilter('views', 'По просмотрам')"
        />
        <img
          @click="setFilter('title', 'По алфавиту')"
          src="@/assets/icons/alphabetic.png"
          alt="filter by alphabets"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import VTips from "@/components/UI/v-tips.vue";

const emits = defineEmits(["changeFilter", "changeOrder"]);
const filter = ref({ name: "По дате", value: "id", order: "desc" });
const order = ref("desc");

const setFilter = (value, name) => {
  const prevFilterValue = filter.value.value;
  filter.value = { name, value, order: "desc" };
  prevFilterValue == value ? invert() : emits("changeFilter", value);
};

const invert = () => {
  filter.order = filter.order === "desc" ? "asc" : "desc";
  order.value = filter.order;
  emits("changeOrder", filter.order);
};
</script>
<style scoped>
span {
  user-select: none;
}
.filters {
  box-sizing: border-box;
  background-color: var(--main-block-color);
  border: 1px solid var(--main-border-color);
  padding: 5px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.filter {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: 5px 10px;
  margin-left: 10px;
  cursor: pointer;
}
.active {
  box-sizing: border-box;
  background-color: rgba(99, 99, 99, 0.337);
  border: 1px solid rgba(0, 0, 0, 0.076);
  border-radius: 5px;
  transition: padding 0.1s;
}
.current-span {
  font-size: 16px;
  font-weight: bold;
  width: 150px;
  color: rgba(255, 255, 255, 0.624);
}
.icons {
  display: flex;
}
.icons-mobile {
  display: none;
}
.icons-mobile:hover .icons-mobile-content {
  display: flex;
}
.icons-mobile-content {
  box-sizing: border-box;
  position: fixed;
  padding: 20px 20px;
  left: 0;
  bottom: 0;
  width: 100%;
  display: none;
  justify-content: space-around;
  
}
.icons-mobile-content img{
  box-sizing: content-box;
  padding: 20px;
  border-radius: 10px;
  background-color: rgb(255, 255, 255);
  width: 30px !important;
  height: 30%;
}
img {
  width: 25px !important;
  height: 25px;
  user-select: none;
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
}
.current-filter img {
  margin-left: 20px;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: rotateX(180deg);
  opacity: 0;
}

@media (max-width: 600px) {
  .icons {
    display: none;
  }
  .icons-mobile {
    display: flex;
  }
}
</style>
