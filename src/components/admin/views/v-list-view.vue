<template>
  <VNoteList v-if="mode == 'note'" />
  <VPostList v-if="mode == 'post'" />
</template>
<script setup>
import VNoteList from "@/components/admin/note/v-note-list.vue";
import VPostList from "@/components/admin/post/v-post-list.vue";
import { inject } from "vue";

const mode = inject("mode");
</script>
<style scoped></style>
