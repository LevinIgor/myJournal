<template>
  <div class="post">
    <div class="post-header">
      <span class="post-date">{{ date }}</span>
      <span class="post-views">Просмотров: {{ post.views }}</span>
    </div>
    <h2 class="post-title" @click="openPost()">{{ post.title }}</h2>
    <VTags :tags="post.tags" />
    <img
      :src="post.img"
      @click="openPost()"
      alt="post img"
      class="img-post"
      v-if="post.img.length != 0"
    />
    <div class="post-description" v-html="post.text" />
    <VButton class="btn-post" @click="openPost()">Читать далее</VButton>
  </div>
</template>
<script setup>
import { useDateFormat } from "@vueuse/core";
import { useRouter } from "vue-router";
import incrementView from "@/firebase/incrementView";
import VButton from "@/components/UI/v-button.vue";
import VTags from "../../v-tags.vue";

const props = defineProps(["post"]);
const router = useRouter();
const date = useDateFormat(props.post.id, "YYYY-MM-DD HH:mm");

const openPost = async () => {
  localStorage.setItem("post", JSON.stringify(props.post));
  incrementView(props.post.id, props.post.views);
  router.push(`/post/${props.post.id}`);
};
</script>
<style scoped>
h2 {
  text-decoration: none;
  color: var(--main-font-color);
  font-size: 2rem;
  margin: 0;
}
.post {
  box-sizing: border-box;
  margin: 30px 0;
  padding: 1rem 1rem 2rem 2rem;
  border: 1px solid var(--main-border-color);
background-color: var(--main-block-color);
}

.post-header {
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
}

.img-post {
  cursor: pointer;
  box-sizing: border-box;
  margin: 40px 0;
  width: 100%;
  max-height: 450px;
  object-fit: cover;
}
.post-title {
  cursor: pointer;
  font-weight: bold;
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
.btn-post {
  border: 1px solid rgba(96, 96, 215, 0.678);
  color: rgba(91, 130, 238, 0.854);
  margin-top: 30px;
}

.btn-post:hover {
  background-color: rgba(38, 38, 242, 0.628);
  color: rgb(255, 255, 255);
}

@media (max-width: 768px) {
  .post {
    padding: 0.7rem;
  }
  .img-post {
    margin: 20px 0;
  }
  .post-description{
    margin-top: 10px;
  }
}
</style>
