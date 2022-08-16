<template>
  <VHeader :mode="'onlyLogo'" />
  <VProgressBar />
  <div class="note-page">
    <div class="note">
      <h1>Note title</h1>
      <div class="line" v-for="(line, index) in note" :key="index">
        <div class="line-title" @click="showContent(index)">
          {{ line.title }}
        </div>
        <div class="line-content" :class="{ hide: line.hide }">
          {{ line.content }}
        </div>
      </div>
    </div>
    <section class="right-section">
      <h2 class="section-title">Оглавление</h2>
      <div class="section-content">
        <span class="section-item section-item-active"
          ># title 1 sdd d;lfds;lk l;k;l k ;l</span
        >
        <span class="section-item">title 1</span>
        <span class="section-item">title 1</span>
        <span class="section-item">title 1</span>
        <span class="section-item">title 1</span>
      </div>
    </section>
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

function showContent(index) {
  note.value[index].hide = !note.value[index].hide;
}
</script>
<style scoped>
.note-page {
  display: flex;
  justify-content: space-between;
  padding-left: 5vw;
  margin-top: var(--header-height);
}
.note {
  box-sizing: border-box;
  width: var(--content-wrapper-width);
  padding: 10px;
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

.right-section {
  position: sticky;
  box-sizing: border-box;
  top: 50px;
  width: 100%;
  max-width: 200px;
  height: 100%;
  background-color: var(--fixed-bg-color);
  padding: 10px;
}
.section-title {
  font-size: large;
  margin-top: 10px;
}
.section-content {
  display: flex;
  flex-direction: column;
}
.section-item {
  cursor: pointer;
  margin-top: 20px;
  color: rgba(240, 248, 255, 0.651);
}
.section-item-active {
  color: white;
  transform: scale(1.1);
}
</style>
