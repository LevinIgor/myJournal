<template>
  <div class="main">
    <h1>Все публикации</h1>

    <div class="post" v-for="post in filterPosts" :key="post.id">
      <span class="post-title" @click="$router.push(`/post/${post.id}`)">
        {{ post.title }}</span
      >
      <div class="post-control">
        <VTips>
          <template v-slot:content>
            <img
              src="@/assets/icons/edit.png"
              alt="edit"
              class="icon"
              @click="$router.push('/admin/edit/' + post.id)"
          /></template>
          <template v-slot:tips>Редактировать пост</template>
        </VTips>

        <VTips>
          <template v-slot:content>
            <img
              src="@/assets/icons/delete.png"
              alt="delete"
              class="icon"
              @click="deletePost(post.id)"
          /></template>
          <template v-slot:tips>Удалить пост</template>
        </VTips>
      </div>
    </div>
  </div>
</template>
<script setup>
import getPosts from "@/firebase/getPosts";
import deletePostAPI from "@/firebase/deletePost";
import { onMounted, ref, computed } from "vue";
import VTips from "../../UI/v-tips.vue";

const props = defineProps(["search"]);
const posts = ref([]);

const deletePost = async (id) => {
  if (confirm("Delete post?")) {
    deletePostAPI(id);
    posts.value = posts.value.filter((post) => post.id !== id);
  }
};

const filterPosts = computed(() => {
  return posts.value.filter((post) => {
    return post.title.toLowerCase().includes(props.search.toLowerCase());
  });
});

onMounted(async () => {
  posts.value = await getPosts();
});
</script>
<style scoped>
h1 {
  margin-bottom: 80px;
}
.post {
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* width: 100%; */
  padding: 20px 40px;
  margin-top: 20px;
  border: 1px solid rgba(221, 221, 221, 0.671);
  border-radius: 2px;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.2);
  transition: background-color 0.2s ease;
}
.post:hover {
  background-color: rgba(221, 221, 221, 0.041);
}
.post-title {
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
  color: var(--main-font-color);
}
.post-control {
  display: flex;
  align-items: center;
}
.icon {
  cursor: pointer;
  box-sizing: content-box;
  width: 25px !important;
  height: 25px;
  padding: 10px 20px;
  filter: grayscale(100%);
}
.icon:hover {
  filter: grayscale(0%);
}

@media (max-width:600px){
h1{
  font-size: 26px;
}
.post{
  padding: 10px 15px;
}
.post-title{
  font-size: 10px;
}

.icon{
  width: 20px !important;
  height: 20px;
  padding: 0px;
}

}

</style>
