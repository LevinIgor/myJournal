<template>
  <div class="path">
    <div class="block" @click="$router.push('/')">
      <img src="@/assets/icons/home.png" class="home" alt="home" />
      <span>Главная</span>
    </div>

    <img src="@/assets/icons/arrow-right.png" class="arrow" alt="arrow" />

    <div class="block">
      <span>{{ props.title }}</span>
    </div>
  </div>
</template>
<script setup>
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
  display: flex;
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
