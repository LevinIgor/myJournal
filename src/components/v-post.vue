<template>
  <div class="post">
    <div class="post-date">{{ date }}</div>
    <router-link :to="postUrl">
      <div class="post-title">{{ post.title }}</div></router-link
    >
    <div class="post-tags">Vue3 JavaScript</div>
    <img :src="post.img" alt="" class="img-post" v-if="post.img.length != 0" />
    <div class="post-description" v-html="post.text" />

    <router-link :to="postUrl"
      ><button class="btn-more">Читать далее</button>
    </router-link>
  </div>
</template>
<script setup>
import { useDateFormat } from "@vueuse/core";
const props = defineProps(["post"]);
const date = useDateFormat(props.post.id, "YYYY-MM-DD HH:mm");
const postUrl = `/post/${props.post.id}`;
</script>
<style scoped>
a {
  text-decoration: none;
  color: var(--main-font-color);
  font-size: 2rem;
}
.post {
  box-sizing: border-box;
  width: 100%;
  margin: 20px 0;
  padding: 1rem 1rem 2rem 2rem ;
  border: 1px solid #6e7a97ab;
  background-color: var(--main-block-color);
  /* box-shadow: 1px 2px 10px rgba(255, 255, 255, 0.2); */
}
.post-date {
  text-align: right;
  font-size: 0.8rem;
}
.img-post {
  margin: 40px 0;
  width: 100%;
  max-height: 450px;
  object-fit: cover;
}
.post-title {
  cursor: pointer;
  font-weight: bold;
}

.post-tags {
  font-size: 12px;
  color: var(--second-font-color);
  padding: 5px 0;
}
.post-description {
  font-size: 16px;
  line-height: 1.5rem;
  margin-top: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
}
.btn-more {
  cursor: pointer;
  color: var(--main-font-color);
  font-weight: bold;
  border: 1px solid rgba(38, 38, 242, 0.628);
  border-radius: 5px;
  padding: 10px 20px;
  background-color: transparent;
  margin-top: 30px;
  transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;
}

.btn-more:hover {
  background-color: rgba(38, 38, 242, 0.628);
  color: rgb(255, 255, 255);
}
</style>
