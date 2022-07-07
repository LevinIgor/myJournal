<template>
  <div class="wrapper">
    <div class="post">
      <div class="post-title">Test post title</div>
      <div class="post-content" v-html="content"></div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase/";

const content = ref("");

onMounted(async () => {
  const route = useRoute();
  const postId = route.params.id;
  const docRef = doc(db, "posts", postId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    content.value = docSnap.data().text;
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
});
</script>
<style scoped></style>
