<template>
  <div class="path">
    <VTips>
      <template v-slot:content>
        <div class="block" @click="$router.push('/')">
          <img src="@/assets/icons/home.png" class="home" alt="home" />
          <span>Главная</span>
        </div>
      </template>
      <template v-slot:tips>Назад на главную</template>
    </VTips>

    <img src="@/assets/icons/arrow-right.png" class="arrow" alt="arrow" />

    <div class="block">
      <span>{{ props.title }}</span>
    </div>
  </div>
</template>
<script setup>
import VTips from "./v-tips.vue";
const props = defineProps(["title"]);
</script>
<style scoped>
img {
  width: 20px !important;
  height: 20px;
  filter: invert(70%);
}
span {
  font-size: 14px;
  text-decoration: underline;
}
.path {
  user-select: none;
  display: flex;
  width: var(--content-wrapper-width);
}
.home {
  margin-right: 10px;
}
.arrow {
  margin: 0 20px;
}
.block {
  display: flex;
  align-items: center;
  cursor: pointer;
}
</style>
