<template>
  <div class="post">
    <div class="post-date">12.12.2022 17:00</div>
    <div class="post-title">How to create new Vue3 project</div>
    <div class="post-tags">Vue3 JavaScript</div>
    <img src="../../public/img/test.png" alt="" class="post-img" />
    <div class="post-description">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, libero
      aperiam? At nulla natus reprehenderit voluptate labore culpa amet
      dignissimos accusantium reiciendis quidem, veritatis rem. Corrupti
      consectetur consequuntur inventore ipsa amet sed tempore sequi explicabo,
      nisi consequatur similique dolorem vel fugiat officia asperiores,
      laudantium voluptas libero iure quis. At voluptates maiores alias
      similique, voluptatum porro perferendis eligendi blanditiis hic nemo iusto
      quaerat dicta atque nostrum culpa omnis harum sed commodi assumenda minima
      tempore eos ea facere quibusdam. Error officiis modi aut exercitationem
      libero repellendus eligendi rerum, at tempore recusandae, corporis commodi
      quo dolorum! Voluptatum provident alias corporis, eligendi incidunt ex.
    </div>
    <button class="btn-more">Читать далее</button>
  </div>
</template>
<script setup></script>
<style scoped>
.post {
  box-sizing: border-box;
  width: 800px;
  background-color: rgb(255, 255, 255);
  margin-top: 40px;
  padding: 2rem;
}
.post-date {
  text-align: right;
  font-size: 0.8rem;
}
.post-img {
  width: 100%;
  height: auto;
  object-fit: cover;
  margin-top: 30px;
}
.post-title {
  cursor: pointer;
  font-size: 22px;
  font-weight: bold;
}

.post-tags {
  font-size: 12px;
  color: rgba(0, 0, 0, 0.894);
  padding: 5px 0;
}
.post-description{
    font-size: 16px;
    color: rgba(0, 0, 0, 0.822);
    line-height: 1.5rem;
    margin-top: 30px;
}
.btn-more {
  cursor: pointer;
  color: rgba(38, 38, 242, 0.628);
  font-weight: bold;
  border: 1px solid rgba(38, 38, 242, 0.628);
  border-radius: 5px;
  padding: 10px 20px;
  background-color: transparent;
  margin-top: 30px;
  transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;
}

.btn-more:hover{
    background-color: rgba(38, 38, 242, 0.628);
    color: rgb(255, 255, 255);
}
</style>
