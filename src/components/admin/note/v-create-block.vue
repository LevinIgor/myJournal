<template>
  <article class="create-block">
    <VInput :placeholder="'Title'" />
    <VBaseTextarea :placeholder="'Text'"/>
  </article>
</template>
<script setup>
import VInput from "../../UI/v-input.vue";
import VBaseTextarea from "../../UI/v-base-textarea.vue";
</script>
<style scoped>
article {
  display: flex;
  flex-direction: column;
  background-color: rgb(33, 33, 33);
  border-radius: 10px;
  overflow: hidden;
}
section {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
textarea,
input {
  width: 100%;
  border-color: rgba(250, 235, 215, 0.674);
}

</style>
