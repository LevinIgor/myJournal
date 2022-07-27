<template>
  <div class="test">
    <main>
      <VButton :style="{ color: 'white' }">
       <img src="../assets/icons/calendar.png" alt="" title="test">
      </VButton>
    </main>
  </div>
</template>
<script setup>
import VButton from "../components/UI/v-button.vue";

function funcDeclaration() {
  const name = 'John';
  return this;
}
const funcExpression = function () {
  const name = "John";
  return this;
};

const funcArrow = () => {
  const name = "John";
  return this;
};

console.log(funcDeclaration());
console.log(funcExpression());
console.log(funcArrow());

</script>
<style scoped>
.test {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
img{
  width: 100px;
  height: 100px;
  filter: invert(100%);
}
</style>
