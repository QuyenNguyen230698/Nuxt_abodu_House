<template>
    <div class="grid grid-cols-12 w-full h-full max-h-screen overflow-hidden relative">
        <div class="col-span-12 lg:col-span-9 h-full flex justify-center items-center"></div>
        <div class="col-span-12 lg:col-span-3 h-auto lg:max-h-screen overflow-y-auto pb-12 lg:pb-0"></div>
    </div>
</template>

<script setup>
const positionStore = usePositionStore();
console.log("arrayHouse:", positionStore.arrayHouse)
console.log("arrayLivingroom:", positionStore.arrayLivingroom)
</script>

<style scoped>

</style>