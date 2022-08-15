p<template>
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
