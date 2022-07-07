<template>
  <div class="main">
    <div class="header"></div>
    <div class="posts">
      <VPost v-for="post in posts" :post="post" />
    </div>
  </div>
</template>
<script setup>
import VPost from "@/components/v-post.vue";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase";
import { onMounted, reactive } from "vue";

const posts = reactive([]);

onMounted(async () => {
  const querySnapshot = await getDocs(collection(db, "posts"));
  querySnapshot.forEach((doc) => {
    posts.push(doc.data());
  });
});
</script>
<style scoped>
.posts {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
}
</style>
