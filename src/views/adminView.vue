p
<template>
  <div class="wrapper">
    <VHeader @search="search = $event">
      <div class="switch-mode">
        <span
          class="switch-span"
          :class="{ 'switch-span-active': mode == 'post' }"
          >Посты</span
        >
        <VToggle @onSwitch="switchMode()" />
        <span
          class="switch-span"
          :class="{ 'switch-span-active': mode == 'note' }"
          >Записки</span
        >
      </div>
    </VHeader>
    <main>
      <VAdminPanel :mode="mode" />
      <div class="content">
        <VListView v-if="$route.params.tab == 'list'" />
        <VCreateView v-if="$route.params.tab == 'create'" />
        <VStatisticsView v-if="$route.params.tab == 'statistics'" />
      </div>
    </main>
  </div>
</template>
<script setup>
import { ref, provide } from "vue";
import VAdminPanel from "@/components/admin/v-admin-panel.vue";
import VHeader from "@/components/main/header/v-header.vue";
import VToggle from "@/components/UI/v-toggle.vue";
import VListView from "@/components/admin/views/v-list-view.vue";
import VCreateView from "@/components/admin/views/v-create-view.vue";
import VStatisticsView from "@/components/admin/views/v-statistics-view.vue";

const search = ref("");
const mode = ref("post");

function switchMode() {
  mode.value = mode.value == "post" ? "note" : "post";
}

provide("mode", mode);
provide("search", search);
</script>
<style scoped>
.switch-mode {
  display: flex;
  align-items: center;
  margin: 0px 20px;
}
.switch-span {
  user-select: none;
  color: rgba(240, 248, 255, 0.397);
  transition: color 0.2s ease-in-out;
}
.switch-span-active {
  color: rgba(46, 151, 77, 0.8);
}
.wrapper {
  width: 100%;
  min-height: 100vh;
}
main {
  width: 100%;
  min-height: 100vh;
  margin-top: var(--header-height);
  display: flex;
}
.content {
  box-sizing: border-box;
  width: var(--content-wrapper-width);
  margin-left: 150px;
  padding: 20px;
}
</style>
