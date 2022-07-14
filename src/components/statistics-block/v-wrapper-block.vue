<template>
  <div class="block">
    <h2><slot name="title" /></h2>
    <slot />
  </div>
</template>
<style scoped>
.block {
  min-width: 300px;
  min-height: 300px;
  border: 1px solid rgba(204, 204, 204, 0.274);
  border-radius: 5px;
  box-shadow: 1px 1px 10px rgba(204, 204, 204, 0.163);
  padding: 0px 20px 20px 20px;
  margin: 10px;
  display: flex;
  flex-direction: column;
}
</style>
