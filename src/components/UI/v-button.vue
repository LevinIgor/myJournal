<template>
  <button class="v-btn">
    <slot></slot>
  </button>
</template>
<style scoped>
.v-btn {
  user-select: none;
  padding: 10px 18px;
  border-radius: 5px;
  background-color: transparent;
  color: var(--main-font-color);
  font-size: 16px;
  cursor: pointer;
  outline: none;
  transition: all .3s ease-in-out;
}

</style>
