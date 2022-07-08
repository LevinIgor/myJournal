<template>
  <div class="wrapper">
    <div class="admin">
      <div class="header">
        <input type="text" class="search" v-model="search" />
        <img
          src="@/assets/icons/create.png"
          alt="create post"
          class="create-icon"
          @click="goToPostCreate()"
        />
      </div>
      <div class="content">
        <TransitionGroup name="list">
          <div class="post" v-for="post in filterPosts">
            <div class="post-title">{{ post.title }}</div>
            <div class="post-id">{{ post.id }}</div>
            <div class="post-control">
              <img
                src="@/assets/icons/edit.png"
                alt="edit"
                class="icon"
                @click="goToPostEdit(post.id)"
              />
              <img
                src="@/assets/icons/delete.png"
                alt="delete"
                class="icon"
                @click="deletePost(post.id)"
              />
            </div>
          </div>
        </TransitionGroup>
      </div>
    </div>
  </div>
</template>
<script setup>
import getPosts from "../firebase/getPosts";
import deletePostBD from "../firebase/deletePost";
import { onMounted, ref, computed } from "vue";
import { useRouter } from "vue-router";

let search = ref("");
const posts = ref([]);
const router = useRouter();

const goToPostEdit = (id) => {
  router.push("/post/edit/" + id);
};
const goToPostCreate = () => {
  router.push("/post/create");
};

const deletePost = async (id) => {
  if (confirm("Delete post?")) {
    deletePostBD(id);
    posts.value = posts.value.filter((post) => post.id !== id);
  }
};

const filterPosts = computed(() => {
  return posts.value.filter((post) => {
    return post.title.toLowerCase().includes(search.value.toLowerCase());
  });
});

onMounted(async () => {
  posts.value = await getPosts();
});
</script>
<style scoped>
.wrapper {
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
}
.admin {
  box-sizing: border-box;
  width: var(--content-wrapper-width);
  padding: 20px;
  background-color: rgb(255, 255, 255);
}
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.create-icon {
  cursor: pointer;
  width: 30px !important;
  height: 30px;
  filter: invert(50%);
  transition: filter 0.3s ease-in-out;
}
.create-icon:hover {
  filter: invert(0%);
}

.post {
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  margin-top: 20px;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 2px;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.2);
  transition: background-color 0.2s ease;
}
.post:hover {
  background-color: rgb(221, 221, 221);
}
.post-title {
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
}
.post-control {
  display: flex;
  align-items: center;
}
.icon {
  cursor: pointer;
  padding: 10px 20px;
  filter: grayscale(100%);
}
.icon:hover {
  filter: grayscale(0%);
}

.popup-title {
  font-size: 33px;
}
.popup-control {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 100px;
  height: 100px;
}
.btn {
  cursor: pointer;
  padding: 10px 40px;
  font-size: 20px;
  border: none;
  border-radius: 5px;
  background-color: transparent;
  transition: background-color 0.2s ease;
}
.yes {
  border: 1px solid rgb(20, 176, 33);
}
.no {
  border: 1px solid rgb(177, 33, 33);
}

.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
}
</style>
