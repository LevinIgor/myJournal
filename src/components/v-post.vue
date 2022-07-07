<template>
  <div class="post">
    <div class="post-date">{{ date }}</div>
    <router-link :to="postUrl">
      <div class="post-title">{{ post.title }}</div></router-link
    >
    <div class="post-tags">Vue3 JavaScript</div>
    <img :src="post.img" alt="" class="post-img" v-if="post.img.length != 0" />
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
  color: Black;
  font-size: 2rem;
}
.post {
  box-sizing: border-box;
  width: 100%;
  background-color: rgb(255, 255, 255);
  margin-top: 20px;
  padding: 2rem;
}
.post-date {
  text-align: right;
  font-size: 0.8rem;
}
.post-img {
  width: 100%;
  max-height: 400px;
  height: auto;
  object-fit: cover;
  margin-top: 30px;
}
.post-title {
  cursor: pointer;
  font-weight: bold;
}

.post-tags {
  font-size: 12px;
  color: rgba(0, 0, 0, 0.894);
  padding: 5px 0;
}
.post-description {
  font-size: 16px;
  color: rgba(0, 0, 0, 0.822);
  line-height: 1.5rem;
  margin-top: 30px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
}
.btn-more {
  cursor: pointer;
  color: rgba(38, 38, 242, 0.628);
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
