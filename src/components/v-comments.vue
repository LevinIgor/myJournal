<template>
  <div class="comments">
    <h2 class="comments-title">Комментарии</h2>
    <div class="comments-list">
      <div class="comment">
        <div class="comment-header">
          <div class="author">Levin Ihor</div>
          <div class="number">#1222</div>
          <div class="date">12.12.2020</div>
        </div>
        <div class="comment-content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque euismod, nisi eu consectetur euismod, nisl nisi
            consectetur nisi, eu consectetur nisi nisi euismod nisi.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style scoped>
.comments{
    margin-top: 100px;
}
.comment{
    padding: 20px 40px;
    margin-left: 20px;
    border: 1px solid var(--main-border-color);
}
.comment-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
}
</style>
