<template>
  <div class="note">
    <div class="details">
      <span class="date">2022-08-22 22:22</span>
      <span class="lines">Линий: 1111</span>
    </div>
    <div class="title">Test title fro test note</div>
    <div class="content">
      Lzorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, autem
      tempore. Maiores rem quos molestiae amet incidunt aperiam, fugiat enim?
    </div>
    <VButton class="btn-open">Смотреть</VButton>
  </div>
</template>
<script setup>
import VButton from "../UI/v-button.vue";
</script>
<style scoped>

.details {
  user-select: none;
  display: flex;
  justify-content: space-between;
  font-size: var(--secondary-font-size);
  color: rgba(255, 255, 255, 0.742);
}
.title {
  cursor: pointer;
  margin-top: 10px;
  font-size: var(--title-font-size);
}
.content {
  margin-top: 30px;
  font-size: var(--content-font-size);
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
.btn-open {
  opacity: 0;
  border: 1px solid rgba(96, 96, 215, 0.678);
  color: rgba(91, 130, 238, 0.854);
  margin-top: 20px;
}
.note:hover .btn-open {
  opacity: 1;
}
.btn-open:hover {
  background-color: rgba(38, 38, 242, 0.628);
  color: rgb(255, 255, 255);
}
</style>
