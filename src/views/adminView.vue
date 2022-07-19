<template>
  <div class="wrapper">
    <VHeader @search="search = $event" />
    <main>
      <VAdminPanel />
      <div class="content">
        <VPosts v-if="$route.params.tab == 'posts'" :search="search" />
        <VPostCreate v-if="$route.params.tab == 'create'" />
        <VPostEdit v-if="$route.params.tab == 'edit'" />
        <VStatistics v-if="$route.params.tab == 'statistics'" />
      </div>
    </main>
  </div>
</template>
<script setup>
import { ref } from "vue";
import VAdminPanel from "@/components/UI/v-admin-panel.vue";
import VHeader from "@/components/main/header/v-header.vue";
import VPosts from "@/components/main/post/v-posts.vue";
import VPostCreate from "@/components/main/post/v-postCreate.vue";
import VPostEdit from "@/components/main/post/v-postEdit.vue";
import VStatistics from "@/components/v-statistics.vue";

let search = ref("");
</script>
<style scoped>
.wrapper {
  width: 100%;
  min-height: 100vh;
  display: flex;
}
main {
  width: 100%;
  min-height: 100vh;
  margin-top: 50px;
}
.content {
  width: var(--content-wrapper-width);
  margin: 0 0 0 350px;
}

.create-icon {
  cursor: pointer;
  width: 30px !important;
  height: 30px;
  filter: invert(70%);
  margin-left: 10px;
  transition: filter 0.3s ease-in-out;
}
.create-icon:hover {
  filter: invert(100%);
}
</style>
