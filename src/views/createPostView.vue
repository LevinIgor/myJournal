<template>
  <div class="wrapper">
    <div class="block-btn" v-if="blocks.length == 0">
      <img
        src="../../public/icons/add.png"
        @click="addBlock(0)"
        alt="add block"
        class="block-btn"
      />
    </div>
    <div class="block" v-for="(block, index) in blocks">
      <div class="block-control">
        <img
          src="../../public/icons/remove.png"
          @click="deleteBlock(index)"
          class="block-btn"
        />
        <img
          src="../../public/icons/text.png"
          @click="changeType(index, 'img')"
          v-if="block.type == 'text'"
          class="block-btn"
        />
        <img
          src="../../public/icons/img.png"
          v-if="block.type == 'img'"
          @click="changeType(index, 'title')"
          class="block-btn"
        />
        <img
          src="../../public/icons/title.png"
          v-if="block.type == 'title'"
          @click="changeType(index, 'text')"
          class="block-btn"
        />
        <img
          src="../../public/icons/add.png"
          @click="addBlock(index)"
          class="block-btn"
        />
      </div>
      <div class="text-type" v-if="block.type == 'text'">
        <textarea
          cols="30"
          rows="10"
          v-model="block.text"
          placeholder="Enter text"
        />
      </div>

      <div class="img-type" v-if="block.type == 'img'">
        <img :src="block.imgUrl" alt="" />
        <div class="block-img-control" v-if="block.imgUrl.length == ''">
          <input type="text" v-model="imgUrl" />
          <button @click="setImgUrl(index)">Ok</button>
        </div>
      </div>
      <div class="title-type" v-if="block.type == 'title'">
        <input type="text" v-model="block.text" />
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive, ref } from "vue";
const getDefaultBlock = () => {
  return {
    text: "",
    type: "text",
    imgUrl: "",
  };
};
const imgUrl = ref("");
const blocks = reactive([
  {
    text: "",
    type: "text",
    imgUrl: "",
  },
]);
const addBlock = (index) => {
  blocks.splice(index + 1, 0, getDefaultBlock());
};
const deleteBlock = (index) => {
  blocks.splice(index, 1);
};
const changeType = (index, type) => {
  blocks[index].type = type;
};
const setImgUrl = (index) => {
  blocks[index].imgUrl = imgUrl.value;
  imgUrl.value = "";
};
</script>
<style scoped>
.wrapper {
  box-sizing: border-box;
  width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 100px;
}
textarea {
  width: 100%;
  box-sizing: border-box;
}

.text-type {
  width: 100%;
}
.text-type textarea{
  border: none;
  font-size: 18px;
}
.img-type {
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.img-type img{
  width: 100%;
  object-fit: cover;
}
.block {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  background-color: white;
  min-height: 150px;
  padding: 10px;
}
.block-control {
  position: absolute;
  right: -80px;
  display: flex;
  flex-direction: column;
  opacity: 0;
  padding: 10px 40px;
}
.block:hover .block-control{
  opacity: 1;
}
.title-type {
  width: 100%;
  display: flex;
  align-items: flex-end;
  padding-bottom: 20px;
}
.title-type input {
  box-sizing: border-box;
  width: 100%;
  font-size: 28px;
  text-align: center;
}

.block-btn {
  cursor: pointer;
  margin-bottom: 5px;
  padding: 5px 0;
  transition: filter 0.3s ease-in-out;
  filter: invert(40%);
}
.block-btn:hover {
  filter: invert(0%);
}
</style>
