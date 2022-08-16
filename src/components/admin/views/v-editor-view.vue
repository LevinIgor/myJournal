<template>
  <VPostCreate v-if="mode == 'post'" />
  <VNoteCreate v-if="mode == 'note'" />
</template>
<script setup>
import VPostCreate from "@/components/admin/post/v-postCreate.vue";
import VNoteCreate from "@/components/admin/note/v-note-create.vue";
import { inject } from "vue";

const mode = inject("mode");
</script>
<style scoped></style>
