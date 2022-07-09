<template>
  <header>
    <RouterLink to="/"><span class="logo">Journal</span></RouterLink>
    <div class="right-block" v-if="props.mode != 'onlyLogo'">
      <input
        type="text"
        placeholder="Поиск"
        class="search"
        @input="emits('search', $event)"
      />
      <slot />
      <router-link to="/admin/posts">
        <img src="@/assets/icons/admin.png" alt="" class="admin-icon"
      /></router-link>
    </div>
  </header>
</template>
<script setup>
const props = defineProps(["mode"]);
const emits = defineEmits(["search"]);
</script>
<style scoped>
header {
  z-index: 100;
  box-sizing: border-box;
  width: 100%;
  padding: 1px 20px;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--main-bg-color);
  border-bottom: 4px solid var(--main-border-color);
}
a {
  text-decoration: none;
}
.header-content {
  box-sizing: border-box;
  width: var(--content-wrapper-width);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo {
  font-size: 30px;
  color: aliceblue;
  padding: 1px 20px;
}
.right-block {
  display: flex;
  align-items: center;
}
.search {
  border: 1px solid rgb(58, 58, 58);
  outline: none;
  font-size: 20px;
  padding: 5px 20px;
  background-color: rgba(0, 0, 0, 0.411);
  color: white;
}
.admin-icon {
  cursor: pointer;
  width: 30px !important;
  height: 30px;
  margin-left: 20px;
  filter: invert(70%);
  transition: filter 0.3s ease-in-out;
}
.admin-icon:hover {
  filter: invert(100%);
}
</style>
