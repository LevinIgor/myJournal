<template>
  <header>
    <span class="logo" @click="$router.push('/')">Journal</span>
    <div class="right-block" v-if="props.mode != 'onlyLogo'">
      <VSearchBlock @search="emit('search',$event)" />
      <slot />
      <img
        src="@/assets/icons/admin.png"
        alt=""
        class="admin-icon"
        @click="$router.push('/admin/posts')"
      />
    </div>
  </header>
</template>
<script setup>
import VSearchBlock from "./v-search-block.vue";
const props = defineProps(["mode"]);
const emit = defineEmits(['search'])

</script>
<style scoped>
header {
  z-index: 100;
  box-sizing: border-box;
  width: 100%;
  height: var(--header-height);
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
  cursor: pointer;
  user-select: none;
  font-size: 30px;
  color: aliceblue;
  padding: 1px 20px;
}
.right-block {
  display: flex;
  align-items: center;
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
