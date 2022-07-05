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
    <div class="text-type" v-if="block.type=='text'">
         <textarea
        cols="30"
        rows="10"
        v-model="block.text"
        placeholder="Enter text"
      />
    </div>
     
      <div class="img-type" v-if="block.type=='img'">
        <input type="file" name="" id="">
      </div>
      <div class="block-control">
        <img
          src="../../public/icons/remove.png"
          @click="deleteBlock(index)"
          alt="remove block"
          class="block-btn"
        />
        <img
          src="../../public/icons/text.png"
          @click="changeType(index, 'img')"
          v-if="block.type == 'text'"
          alt=""
          class="block-btn"
        />
        <img
          src="../../public/icons/img.png"
          v-if="block.type == 'img'"
           @click="changeType(index, 'text')"
          alt=""
          class="block-btn"
        />
        <img
          src="../../public/icons/add.png"
          @click="addBlock(index)"
          alt="add block"
          class="block-btn"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive } from "vue";
const getDefaultBlock = () => {
  return {
    text: "",
    type: "text",
  };
};
const blocks = reactive([
  {
    text: "",
    type: "text",
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
const uploadImg = async (e) => {
      var id = Date.now()
      var photo = e.target.files[0];
      if (photo) {
        await this.$fire.storage
          .ref(this.person.id + '/' + id.toString())
          .put(photo)
          .then(() =>
            this.$fire.storage
              .ref(this.person.id + '/' + id.toString())
              .getDownloadURL()
              .then((url) => {
                this.person.avatar = url;
              })
          )
      }
    }

</script>
<style scoped>
.wrapper {
  box-sizing: border-box;
  width: 1200px;
  height: 100vh;
  margin: 0 auto;
  padding-top: 100px;
}
textarea {
  width: 100%;
  box-sizing: border-box;
}
.block {
  display: flex;
  
}
.text-type{
    width: 100%;
}
.img-type{
    width: 100%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
}
.block-control {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.block-btn {
  cursor: pointer;
  padding: 10px;
  transition: filter 0.3s ease-in-out;
  filter: invert(40%);
}
.block-btn:hover {
  filter: invert(0%);
}
</style>
