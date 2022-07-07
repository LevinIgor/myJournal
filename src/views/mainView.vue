<template>
  <div class="main">
    <div class="header"></div>
    <div class="posts">
      <VPost />
      <VPost />
      <VPost />
    </div>
  </div>
</template>
<script setup>
import { onMounted } from "vue";
import VPost from "@/components/v-post.vue";
import { db } from "@/firebase";
import { collection, getDocs } from "firebase/firestore";

onMounted(async () => {
  const querySnapshot = await getDocs(collection(db, "test"));
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
  });
});

</script>
<style scoped>
.posts {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
