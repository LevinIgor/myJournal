<template>
  <div class="wrapper">
    <div class="post" v-if="!notFound">
      <div class="post-title">{{post.title}}</div>
      <div class="post-content" v-html="post.text"></div>
    </div>
    <div class="not-found" v-if="notFound">
      <h1>Post of that index is not found</h1>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase/";

const post = ref("");
const notFound = ref(false);

onMounted(async () => {
  const route = useRoute();
  const postId = route.params.id;
  const docRef = doc(db, "posts", postId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    post.value = docSnap.data();
  } else {
    notFound.value = true;
  }
});
</script>
<style scoped>
.wrapper{
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding: 20px 0;
}
.post{
  box-sizing: border-box;
  width: 1000px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
}
.post-title{
  margin-top: 40px;
  font-size: 44px;
}
</style>
