<template>
<div class="wrapper" @click.self="emits('hide')">
    <div class="popup">
        <slot />
    </div>
</div>
</template>
<script setup>
const emits = defineEmits(['hide']);
</script>
<style scoped>
.wrapper{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    z-index: 9999;
}
.popup{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    padding: 20px 40px;
}
</style>