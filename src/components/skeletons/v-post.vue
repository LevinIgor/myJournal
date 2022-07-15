<template>
  <div class="post skeleton-anim">
    <div class="post-header">
      <span class="post-date skeleton-anim">12.12.12 12:12:12</span>
      <span class="post-views skeleton-anim">Ghjcvjhjd 12</span>
    </div>
    <h2 class="post-title skeleton-anim">Title skeleton post </h2>
    <div class="post-tags">
      <span class="post-tag skeleton-anim">tag1 j j</span>
      <span class="post-tag skeleton-anim">tag2 j j</span>
    </div>
    <div class="img-post skeleton-anim"  />
    <div class="post-description skeleton-anim"  />
    <button class="btn-post skeleton-anim">Читать далее</button>
  </div>
</template>
<script setup></script>
<style scoped>
.skeleton-post {
  height: 600px;
  width: var(--content-wrapper-width);
  background-color: rgba(240, 248, 255, 0.469);
}
span{
  background-color: #6e7a97ab;
  border-radius: 10px;
  color: transparent;
}
h2 {
  text-decoration: none;
  border-radius: 10px;
  color: transparent;
  background-color: aliceblue;
  font-size: 2rem;
  margin: 0;
}
.post {
  box-sizing: border-box;
  width: 100%;
  margin: 30px 0;
  padding: 1rem 1rem 2rem 2rem;
  border-radius: 10px;
  background-color: grey;
  width: var(--content-wrapper-width);
  /* box-shadow: 1px 2px 10px rgba(255, 255, 255, 0.2); */
}
.post-header {
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;

}

.img-post {
  margin: 40px 0;
  width: 100%;
  height: 500px;
  background-color: aliceblue;
  border-radius: 10px;
  object-fit: cover;
}
.post-title {
  cursor: pointer;
  margin-top: 10px;
  font-weight: bold;
}

.post-tags {
  display: flex;
  font-size: 12px;
  color: var(--second-font-color);
  padding: 5px 0;
}
.post-tag {
  margin: 0 5px;
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
  border-color:transparent ;
  color: transparent;
  border-radius: 10px;
  margin-top: 30px;
}

.btn-post:hover {
  background-color: rgba(38, 38, 242, 0.628);
  color: rgb(255, 255, 255);
}

.skeleton-anim{
  animation: skeleton-anim 2s infinite;
}
@keyframes skeleton-anim{
  0%{
    background-color: rgba(128, 128, 128, 0.768);
  }
  50%{
    background-color: rgba(128, 128, 128, 0.547);
  }
  100%{
    background-color: rgba(128, 128, 128, 0.716);
  }
}
</style>
