<template>
  <VWrapperBlock>
    <template v-slot:title>Просмотры</template>
    <span> За сегодня - 12</span>
    <span> За месяц - 24</span>
    <span> За год - 100</span>
    <span class="total">Общее количество 200</span>
  </VWrapperBlock>
</template>
<script setup>
import VWrapperBlock from "@/components/statistics-block/v-wrapper-block.vue";
</script>
<style scoped>
.total {
  font-size: 1.2rem;
  font-weight: bold;
}
</style>
