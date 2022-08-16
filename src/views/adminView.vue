p
<template>
  <div class="wrapper">
    <VHeader @search="search = $event">
      <div class="switch-mode">
        <span class="switch-span">Посты</span>
        <VToggle @onSwitch="switchMode()" />
        <span class="switch-span">Записки</span>
      </div>
    </VHeader>
    <main>
      <VAdminPanel :mode="mode" />
      <div class="content">
        <VListView v-if="$route.params.tab == 'list'" />
        <VEditorView v-if="$route.params.tab == 'editor'" />
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
import VEditorView from "@/components/admin/views/v-editor-view.vue";
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
}
.switch-span {
  color: rgba(240, 248, 255, 0.607);
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
