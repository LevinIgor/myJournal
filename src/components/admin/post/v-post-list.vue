<template>
  <div class="list">
    <section>
      <h1 class="title">Публикации</h1>
      
    </section>
    <div class="posts">
      <div class="post" v-for="post in posts" :key="post.id">
        <img :src="post.img" class="img" alt="" />
        <section>
          <div class="title" @click="$router.push('/post/' + post.id)">
            {{ post.title }}p
          </div>
          <div class="views">Просмотров: {{ post.views }}</div>
        </section>
        <div class="date">Индекс: {{ post.id }}</div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { getPosts } from "@/firebase/postAPI";
import { onMounted, ref } from "vue";

const posts = ref([]);

onMounted(async () => {
  posts.value = await getPosts();
});
</script>
<style scoped>
.post {
  position: relative;
  display: flex;
  align-items: flex-start;
  padding: 0.5rem;
  border-bottom: 1px solid rgba(240, 248, 255, 0.607);
  cursor: pointer;
  margin-top: 10px;
}
.img {
  width: 100px !important;
  height: 60px;
  object-fit: cover;
  margin-right: 40px;
}
.views {
  font-size: 0.8rem;
  color: rgba(240, 248, 255, 0.607);
  margin-top: 5px;
}
.date {
  position: absolute;
  top: 0;
  right: 0;
  color: rgba(240, 248, 255, 0.607);
  font-size: small;
}
</style>
