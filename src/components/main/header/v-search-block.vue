<template>
  <div
    class="search-block"
    @click="showInput()"
    :class="{ 'search-active': isSearch }"
  >
    <input
      v-if="isSearch"
      type="text"
      placeholder="Поиск"
      class="search-input"
      ref="inputRef"
      v-model="searchValue"
      @blur="searchValue === '' ? hideInput() : null"
      @keypress.enter="inputRef.blur()"
      @keydown.esc="hideInput()"
    />
    <span class="search-span" v-if="!isSearch">Ctrl K</span>
    <img
      src="@/assets/icons/close.png"
      alt="close"
      class="search-img close-icon"
      @click="searchValue = ''"
      v-if="isSearch"
    />
    <img
      src="@/assets/icons/search.png"
      alt="search"
      class="search-img"
      v-if="!isSearch"
    />
  </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted, nextTick, watch } from "vue";

const emit = defineEmits(["search"]);

const isSearch = ref(false);
const inputRef = ref(null);
const searchValue = ref("");

watch(searchValue, () => {
  emit("search", searchValue.value);
});

const showInput = () => {
  isSearch.value = true;
  inputFocus();
};

const hideInput = () => {
  searchValue.value = "";
  isSearch.value = false;
};

const inputFocus = () => {
  nextTick(() => {
    inputRef.value.focus();
  });
};

onMounted(() => {
  const handleSearchHotKey = (e) => {
    if ((e.key === "k" || e.key === "л") && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      showInput();
    }
  };

  window.addEventListener("keydown", handleSearchHotKey);

  const remove = () => {
    window.removeEventListener("keydown", handleSearchHotKey);
  };

  onUnmounted(remove);
});
</script>
<style scoped>
.search-block {
  position: relative;
  box-sizing: content-box;
  cursor: pointer;
  display: flex;
  align-items: center;
  overflow: hidden;
  border: 1px solid transparent;
}
.search-active {
  border: 1px solid var(--main-border-color);
}
.search-span {
  margin-right: 10px;
  padding: 5px 10px;
  color: var(--second-text-color);
  border: 1px solid var(--main-border-color);
}
.search-img {
  width: 30px !important;
  height: 30px;
  filter: invert(40%);
  margin-right: 10px;
  transition: all 0.3s;
}
.search-img:hover {
  filter: invert(80%);
}
.search-input {
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: inherit;
  font-size: 20px;
  color: var(--main-font-color);
  padding: 5px 20px;
  transition: all 1s ease-in-out;
}
.close-icon {
  width: 20px !important;
  height: 20px;
}

@media (max-width: 768px) {
  .search-span {
    display: none;
  }
}
</style>
