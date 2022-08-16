<template>
  <VHeader :mode="'onlyLogo'" />
  <VProgressBar />
  <div class="container">
    <div class="note">
      <div class="line" v-for="(line, index) in note" :key="index">
        <div class="line-title" @click="showContent(index)">
          {{ line.title }}
        </div>
        <div class="line-content" :class="{ hide: line.hide }">
          {{ line.content }}
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import VHeader from "@/components/main/header/v-header.vue";
import VProgressBar from "@/components/UI/v-progress-bar.vue";
import { ref } from "vue";

const note = ref([
  {
    title:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic,recusandae.",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. In
          repudiandae ad iusto deleniti ut dicta officia similique rerum, id
          eaque aspernatur assumenda eos voluptatem at corporis nobis deserunt
          omnis laborum. Vel, non molestiae nesciunt tempora eum cumque quam
          expedita, quia in, esse fugit quae cum tenetur fugiat accusantium odio
          incidunt porro reprehenderit debitis saepe at optio assumenda? Vel
          vero delectus, nostrum labore odit, nam eum consequatur incidunt
          mollitia fugit veniam eveniet quod soluta, perspiciatis ab aspernatur!
          Ipsa numquam sed ullam vero, quam rerum debitis iure similique
          tempora. Mollitia ratione hic debitis nihil incidunt ad, repellat, id
          deserunt numquam corrupti eaque.`,
    hide: true,
  },
  {
    title:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic,recusandae.",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. In
          repudiandae ad iusto deleniti ut dicta officia similique rerum, id
          eaque aspernatur assumenda eos voluptatem at corporis nobis deserunt
          omnis laborum. Vel, non molestiae nesciunt tempora eum cumque quam
          expedita, quia in, esse fugit quae cum tenetur fugiat accusantium odio
          incidunt porro reprehenderit debitis saepe at optio assumenda? Vel
          vero delectus, nostrum labore odit, nam eum consequatur incidunt
          mollitia fugit veniam eveniet quod soluta, perspiciatis ab aspernatur!
          Ipsa numquam sed ullam vero, quam rerum debitis iure similique
          tempora. Mollitia ratione hic debitis nihil incidunt ad, repellat, id
          deserunt numquam corrupti eaque.`,
    hide: true,
  },
  {
    title:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic,recusandae.",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. In
          repudiandae ad iusto deleniti ut dicta officia similique rerum, id
          eaque aspernatur assumenda eos voluptatem at corporis nobis deserunt
          omnis laborum. Vel, non molestiae nesciunt tempora eum cumque quam
          expedita, quia in, esse fugit quae cum tenetur fugiat accusantium odio
          incidunt porro reprehenderit debitis saepe at optio assumenda? Vel
          vero delectus, nostrum labore odit, nam eum consequatur incidunt
          mollitia fugit veniam eveniet quod soluta, perspiciatis ab aspernatur!
          Ipsa numquam sed ullam vero, quam rerum debitis iure similique
          tempora. Mollitia ratione hic debitis nihil incidunt ad, repellat, id
          deserunt numquam corrupti eaque.`,
    hide: true,
  },
  {
    title:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic,recusandae.",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. In
          repudiandae ad iusto deleniti ut dicta officia similique rerum, id
          eaque aspernatur assumenda eos voluptatem at corporis nobis deserunt
          omnis laborum. Vel, non molestiae nesciunt tempora eum cumque quam
          expedita, quia in, esse fugit quae cum tenetur fugiat accusantium odio
          incidunt porro reprehenderit debitis saepe at optio assumenda? Vel
          vero delectus, nostrum labore odit, nam eum consequatur incidunt
          mollitia fugit veniam eveniet quod soluta, perspiciatis ab aspernatur!
          Ipsa numquam sed ullam vero, quam rerum debitis iure similique
          tempora. Mollitia ratione hic debitis nihil incidunt ad, repellat, id
          deserunt numquam corrupti eaque.`,
    hide: true,
  },
  {
    title:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic,recusandae.",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. In
          repudiandae ad iusto deleniti ut dicta officia similique rerum, id
          eaque aspernatur assumenda eos voluptatem at corporis nobis deserunt
          omnis laborum. Vel, non molestiae nesciunt tempora eum cumque quam
          expedita, quia in, esse fugit quae cum tenetur fugiat accusantium odio
          incidunt porro reprehenderit debitis saepe at optio assumenda? Vel
          vero delectus, nostrum labore odit, nam eum consequatur incidunt
          mollitia fugit veniam eveniet quod soluta, perspiciatis ab aspernatur!
          Ipsa numquam sed ullam vero, quam rerum debitis iure similique
          tempora. Mollitia ratione hic debitis nihil incidunt ad, repellat, id
          deserunt numquam corrupti eaque.`,
    hide: true,
  },
  {
    title:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic,recusandae.",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. In
          repudiandae ad iusto deleniti ut dicta officia similique rerum, id
          eaque aspernatur assumenda eos voluptatem at corporis nobis deserunt
          omnis laborum. Vel, non molestiae nesciunt tempora eum cumque quam
          expedita, quia in, esse fugit quae cum tenetur fugiat accusantium odio
          incidunt porro reprehenderit debitis saepe at optio assumenda? Vel
          vero delectus, nostrum labore odit, nam eum consequatur incidunt
          mollitia fugit veniam eveniet quod soluta, perspiciatis ab aspernatur!
          Ipsa numquam sed ullam vero, quam rerum debitis iure similique
          tempora. Mollitia ratione hic debitis nihil incidunt ad, repellat, id
          deserunt numquam corrupti eaque.`,
    hide: true,
  },
]);

function showContent(index){
    note.value[index].hide = !note.value[index].hide;
}
</script>
<style scoped>
.container {
  display: flex;
  justify-content: center;
  margin-top: var(--header-height);
}
.note {
  width: var(--content-wrapper-width);
}
.line {
  margin-top: 10px;
  user-select: none;
}
.line-title {
  font-size: x-large;
  cursor: pointer;    
}
.line-content {
  font-size: var(--content-font-size);
  margin-top: 10px;
  padding: 0 0 20px 20px;
}
.hide {
    display: none;
}
</style>
