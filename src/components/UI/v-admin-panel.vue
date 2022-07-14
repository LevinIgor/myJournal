<template>
  <div class="admin-panel">
    <div class="admin-panel-title">Панель администратора</div>
    <div
      class="admin-panel-item"
      @click="$router.push('/admin/posts')"
      :class="{ active: $route.params.tab == 'posts' }"
    >
      <img src="@/assets/icons/list.png" alt="list" />
      <span>Список постов</span>
    </div>
    <div
      class="admin-panel-item"
      @click="$router.push('/admin/create')"
      :class="{ active: $route.params.tab == 'create' }"
    >
      <img src="@/assets/icons/create.png" alt="create" />
      <span>Создать пост</span>
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
<script setup></script>
<style scoped>
.admin-panel {
  user-select: none;
  position: fixed;
  top: 0;
  left: 0;
  padding: 80px 10px 0 10px;
  box-sizing: border-box;
  height: 100%;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--main-bg-color);
  border-right: 1px solid var(--main-border-color);
}
.admin-panel-title {
  margin-bottom: 40px;
  color: var(--second-text-color);
}
.admin-panel-item {
  cursor: pointer;
  box-sizing: border-box;
  width: 100%;
  margin: 10px 0;
  padding: 10px 10px;
  display: flex;
  align-items: center;
  background-color: var(--main-block-color);
}

.admin-panel-item img {
  filter: invert(100%);
  margin-right: 10px;
  width: 30px !important;
}
.admin-panel-item:hover {
  background-color: var(--main-block-color-hover);
}
.active {
  background-color: rgba(238, 238, 238, 0.398);
}
</style>
