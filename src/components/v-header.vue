<template>
  <header>
    <div class="header-content">
      <RouterLink to="/"><span class="logo">Journal</span></RouterLink>
      <div class="right-block">
        <input type="text" placeholder="Search" class="search" />
        <router-link to="/admin">
          <img src="@/assets/icons/admin.png" alt="" class="admin-icon"
        /></router-link>
      </div>
    </div>
  </header>
</template>
<script setup></script>
<style scoped>
header {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(79, 79, 79);
  position: sticky;
  padding: 1px 0;
  top: 0;
}
a {
  text-decoration: none;
}
.header-content {
  box-sizing: border-box;
  width: 800px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo {
  font-size: 30px;
  color: aliceblue;
  background-color: rgba(0, 0, 0, 0.411);
  padding: 1px 20px;
}
.right-block {
  display: flex;
  align-items: center;
}
.search {
  border: 1px solid rgb(58, 58, 58);
  outline: none;
  font-size: 20px;
  padding: 5px 20px;
  background-color: rgba(0, 0, 0, 0.411);
  color: white;
}
.admin-icon {
  cursor: pointer;
  width: 30px !important;
  height: 30px;
  margin-left: 30px;
  filter: invert(70%);
  transition: filter 0.3s ease-in-out;
}
.admin-icon:hover {
  filter: invert(100%);
}
</style>
