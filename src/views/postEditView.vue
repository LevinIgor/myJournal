<template>
  <div class="wrapper">
    <VHeader mode="onlyLogo" />
    <div class="edit">
      <div class="header">Edit post</div>
      <input
        type="text"
        class="title input"
        v-model="post.title"
        placeholder="Title"
      />
      <input
        type="text"
        class="tags input"
        v-model="post.tags"
        placeholder="Tags"
      />
      <input
        type="text"
        class="img input"
        v-model="post.img"
        placeholder="Img"
      />

      <v-md-editor v-model="post.text" height="900px" />
      <button class="btn-save" @click="save()">Save</button>
    </div>
  </div>
</template>
<script setup>
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";
import getPost from "../firebase/getPost";
import VHeader from "../components/v-header.vue";
import createPost from "../firebase/createPost";

const post = ref({});

const save = async () => {
  await createPost(post.value).then(() => {
    console.log("post saved");
  });
};

onMounted(async () => {
  const route = useRoute();
  const id = route.params.id;
  await getPost(id).then((_post) => {
    post.value = _post;
  });
});
</script>
<style scoped>
.wrapper {
  width: 100%;
  min-height: 100vh;
}
.edit {
  box-sizing: border-box;
  width: var(--content-wrapper-width);
  background-color: aliceblue;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  padding: 20px;
}
.header {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
}
.input {
  font-size: 28px;
  margin-bottom: 20px;
}
.content {
  font-size: 20px;
  width: 100%;
  min-height: 600px;
  box-sizing: border-box;
  padding: 20px 10px;
  resize: vertical;
}

.btn-save {
  cursor: pointer;
  margin-top: 40px;
  border: 1px solid rgb(12, 127, 43);
  padding: 10px 30px;
  font-size: 20px;
  color: rgb(19, 170, 120);
  transition: all 0.3s ease-in-out;
}

.btn-save:hover {
  background-color: rgb(8, 84, 59);
  color: white;
}
</style>
