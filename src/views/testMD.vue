<template>
  <div class="editor">
    <v-md-editor v-model="source" height="900px" class="editor" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      source: ``,
    };
  },
};
</script>
<style scoped>
.editor {
  width: 800px;
}
</style>
