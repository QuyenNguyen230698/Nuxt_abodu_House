<template>
    <div>
        <div class="flex flex-row">
            <div class="w-2/3">
                <div class="carousel w-full relative overflow-hidden order-1 lg:order-2">
                    <div v-for="(slide, index) in solution" :key="index" class="relative carousel-item w-full transition-transform duration-700" 
                    :style="{ transform: `translateX(-${currentSlide * 100}%)` }" style="height: 100vh;">
                    <NuxtImg :src="slide.src" loading="lazy" class="w-full" />
                    <div v-for="item in renderPrice" :key="item.src" class="absolute inset-0 flex items-center justify-center">
                        <NuxtImg :src="item.src" loading="lazy" :class="[item.zindex]" class="w-full h-full" style="height: 100vh;"/>
                    </div>
                    </div>
                    <div class="absolute inset-y-1/2 left-5 flex items-center">
                    <button @click="prevSlide" class="btn btn-circle bg-transparent border-none text-white text-2xl hover:bg-transparent">❮</button>
                    </div>
                    <div class="absolute inset-y-1/2 right-5 flex items-center">
                    <button @click="nextSlide" class="btn btn-circle bg-transparent border-none text-white text-2xl hover:bg-transparent">❯</button>
                    </div>
                </div>
            </div>
            <div class="w-1/3">
                <h2>wall</h2>
                <button @click="renderWallImg(0)">lap-white</button>
                <br>
                <button @click="renderWallImg(1)">lap-black</button>
                <br>
                <button @click="renderWallImg(2)">board-white</button>
                <br>
                <button @click="renderWallImg(3)">board-black</button>
                <br>
                <h2>stair</h2>
                <button @click="renderStairImg(0)">stair</button>
                <br>
                <button @click="renderStairImg(1)">stair2</button>
                <br>
                <button @click="renderStairImg(2)">stair3</button>
                <br>
                <h2>roof</h2>
                <button @click="renderRoofImg(0)">roof-single</button>
                <br>
                <button @click="renderRoofImg(1)">roof-standing</button>
                <br>
                <h2>door</h2>
                <button @click="renderDoorImg(0)">door</button>
                <br>
                <button @click="renderDoorImg(1)">door2</button>
                <br>
                <h2>addon</h2>
                <button @click="renderAddonImg(0)">addon</button>
                <br>
                {{ renderPrice }}
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const solution = [
  { src: "cdn/aboduone/abozu1.png" },
  { src: "cdn/aboduone/abozu2.jpeg" },
  { src: "cdn/aboduone/abozu3.jpeg" },
  { src: "cdn/aboduone/abozu4.jpeg" },
  { src: "cdn/aboduone/abozu5.png" },
];

const wall = [
    { src: "cdn/aboduone/house/wall/lap-white.png", price: 7500 },
    { src: "cdn/aboduone/house/wall/lap-black.png", price: 7600 },
    { src: "cdn/aboduone/house/wall/boad-white.png", price: 7700 },
    { src: "cdn/aboduone/house/wall/boad-black.png", price: 7800 }
];
const stair = [
  { src: "cdn/aboduone/house/Stair/stair.png", price: 20000 },
  { src: "cdn/aboduone/house/Stair/stair2.png", price: 21000 },
  { src: "cdn/aboduone/house/Stair/stair3.png", price: 27000, zindex:'z-40' },
];
const roof = [
    { src: "", price: 5700 },
    { src: "cdn/aboduone/house/roof/roof-standing.png", price: 6000 }
]
const door = [
    { src: "", price: 23000 },
    { src: "cdn/aboduone/house/Door/door2.png", price: 25000, zindex:'z-30' }
]
const addon = [
    { src: "cdn/aboduone/house/add-on/add-on.png", price: 2000 }
]
const renderPrice = ref([]);

const currentSlide = ref(0);
const renderWall = ref(null);
const renderStair = ref(null);
const renderRoof = ref(null);
const renderDoor = ref(null);
const renderAddon = ref(null);

const reset = () => {
    renderRoof.value = null;
    renderWall.value = null;
    renderDoor.value = null;
    renderAddon.value = null;
    renderStair.value = null;
}

function nextSlide() {
    reset()
  currentSlide.value = (currentSlide.value + 1) % solution.length;
}

function prevSlide() {
    reset()
  currentSlide.value = (currentSlide.value - 1 + solution.length) % solution.length;
}

function renderWallImg(index) {
    renderWall.value = wall[index];
}

function renderStairImg(index) {
  renderStair.value = stair[index];
}

function renderRoofImg(index) {
    renderRoof.value = roof[index];
}

function renderDoorImg(index) {
    renderDoor.value = door[index];
}

function renderAddonImg(index) {
    renderAddon.value = addon[index];
}

function getRenderObjects() {
    return {
        wall: renderWall.value,
        stair: renderStair.value,
        roof: renderRoof.value,
        door: renderDoor.value,
        addon: renderAddon.value
    };
}

// Watch for changes in renderWall, renderStair, renderRoof, renderDoor, and renderAddon
watch([renderWall, renderStair, renderRoof, renderDoor, renderAddon], () => {
    const renderObjects = getRenderObjects();
    renderPrice.value = Object.values(renderObjects).filter(item => item !== null).map(item => item);
});
</script>

<style scoped>
h2 {
    font-size: 1.5rem;
    font-weight: bold;
}
</style>