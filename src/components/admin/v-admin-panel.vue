<template>
  <div class="admin-panel">
    <div
      class="admin-panel-item"
      @click="$router.push('/admin/list')"
      :class="{ active: $route.params.tab == 'list' }"
    >
      <img src="@/assets/icons/list.png" alt="list" />
      <span>Список</span>
    </div>
    <div
      class="admin-panel-item"
      @click="$router.push('/admin/create')"
      :class="{ active: $route.params.tab == 'create' }"
    >
      <img src="@/assets/icons/create.png" alt="create" />
      <span>Создать</span>
    </div>
    <div
      class="admin-panel-item"
      @click="$router.push('/admin/statistics')"
      :class="{ active: $route.params.tab == 'statistics' }"
    >
      <img src="@/assets/icons/statistic.png" alt="statistics" />
      <span>Статистика</span>
    </div>
  </div>
</template>
<script setup>
const props = defineProps(["mode"]);
</script>
<style scoped>
.admin-panel {
  background-color: var(--fixed-bg-color);
  user-select: none;
  position: fixed;
  box-sizing: border-box;
  padding-top: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.admin-panel-item {
  position: relative;
  cursor: pointer;
  box-sizing: border-box;
  width: 100%;
  padding: 10px 20px;
  font-size: var(--secondary-font-size);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.admin-panel-item img {
  filter: invert(100%);
  margin-bottom: 5px;
  width: 20px !important;
}
.admin-panel-item:hover {
  background-color: var(--main-block-color-hover);
}
.active {
  background-color: rgba(238, 238, 238, 0.089);
}
.active::after {
  content: "";
  position: absolute;
  top: 50%;
  right: -5px;
  transform: translate(0%, -50%);
  box-sizing: border-box;
  border-top: 10px solid transparent;
  border-left: 5px solid rgba(238, 238, 238, 0.089);
  border-bottom: 10px solid transparent;
}
</style>
