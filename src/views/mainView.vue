<template>
  <div class="main">
    <div class="posts">
      <transition-group name="list">
        <VPost v-for="post in posts" :post="post" :key="post.id" />
      </transition-group>
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
.main {
  width: 100%;
  min-height: 100vh;
}
.posts {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
