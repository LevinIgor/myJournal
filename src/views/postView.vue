<template>
  <div class="wrapper">
    <div class="post">
      <div class="post-title">Test post title</div>
      <div class="blocks">
          <div class="block" v-html="test">
          </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const test = `<h1>Test</h1>
                <img src="https://www.middlewareinventory.com/blog/v-html-vue-js/#Example1" alt="">
                <textarea name="" id="" cols="30" rows="10">Test</textarea>`
</script>
<style scoped></style>
