<template>
    <div>
        <div class="grid lg:grid-cols-12 w-full h-full max-h-screen overflow-hidden">
            <!-- render Imgage Product -->
            <div class="w-full col-span-6 lg:col-span-9 h-full lg:h-full flex justify-center items-center">
                <div class="carousel w-full relative order-1 lg:order-2 h-full">
                    <div v-for="(slide, index) in solution" :key="index" class="relative carousel-item duration-500 ease-in-out translate-all w-full max-h-screen" 
                    :style="{ transform: `translateX(-${currentSlide * 100}%)` }" >
                    <NuxtImg :src="slide.src" loading="lazy" class="w-full h-full object-cover object-center" />
                    <div v-for="item in renderType" :key="item.src" class="absolute inset-0 flex items-center justify-center">
                        <NuxtImg v-if="item.src" :src="item.src" loading="lazy" :class="[item.zIndex]" class="w-full h-full object-cover object-center"/>
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
            <!-- Option product -->
            <div class="w-full col-span-6 lg:col-span-3 h-auto flex-grow max-h-screen overflow-auto">
                <div class="p-5 flex flex-col justify-center items-center gap-2">
                    <h1 class="text-3xl font-bold">Configure Your House</h1>
                    <div class="w-40 md:w-24 lg:w-20 bg-orange-900 text-center mx-auto mb-5" style="height: 1px"></div>
                    <p class="text-gray-500 text-sm text-justify">Use our configurator to run through all the options, upgrades, colors and customizations to truly make it yours.</p>
                </div>
                <div class=" flex flex-col justify-center items-center gap-5 p-5">
                <!-- Siding -->
                <h2>Siding</h2>
                <button @click="renderWallImg(0)"
                class="flex flex-row justify-between items-center w-full h-20 p-5 border border-gray-400 rounded-3xl hover:border-2 hover:border-orange-900"
                :class="activeWallIndex === 0 ? 'border-2 border-orange-900' : ''">
                    <div>Lap Siding White</div>
                    <div>${{ wall[0].price }}</div>
                </button>
                <button @click="renderWallImg(1)" 
                class="flex flex-row justify-between items-center w-full h-20 p-5 border border-gray-400 rounded-3xl hover:border-2 hover:border-orange-900"
                :class="activeWallIndex === 1 ? 'border-2 border-orange-900' : ''">
                    <div>Lap Siding Black</div>
                    <div>${{ wall[1].price }}</div>
                </button>
                <button @click="renderWallImg(2)" 
                class="flex flex-row justify-between items-center w-full h-20 p-5 border border-gray-400 rounded-3xl hover:border-2 hover:border-orange-900"
                :class="activeWallIndex === 2 ? 'border-2 border-orange-900' : ''">
                    <div>Board & Batten White</div>
                    <div>${{ wall[2].price }}</div>
                </button>
                <button @click="renderWallImg(3)" 
                class="flex flex-row justify-between items-center w-full h-20 p-5 border border-gray-400 rounded-3xl hover:border-2 hover:border-orange-900"
                :class="activeWallIndex === 3 ? 'border-2 border-orange-900' : ''">
                    <div>Board & Batten Black</div>
                    <div>${{ wall[3].price }}</div>
                </button>
                </div>
                <!-- Stair -->
                <div class="flex flex-col justify-center items-center gap-5 p-5">
                    <h2>Stair</h2>
                <button @click="renderStairImg(0)"
                class="flex flex-row justify-between items-center w-full h-20 p-5 border border-gray-400 rounded-3xl hover:border-2 hover:border-orange-900"
                :class="activeStairIndex === 0 ? 'border-2 border-orange-900' : ''">
                    <div>Stair Default</div>
                    <div>${{ stair[0].price }}</div>
                </button>
                <button @click="renderStairImg(1)"
                class="flex flex-row justify-between items-center w-full h-20 p-5 border border-gray-400 rounded-3xl hover:border-2 hover:border-orange-900"
                :class="activeStairIndex === 1 ? 'border-2 border-orange-900' : ''">
                    <div>Stair 4x10</div>
                    <div>${{ stair[1].price }}</div>
                </button>
                <button @click="renderStairImg(2)"
                class="flex flex-row justify-between items-center w-full h-20 p-5 border border-gray-400 rounded-3xl hover:border-2 hover:border-orange-900"
                :class="activeStairIndex === 2 ? 'border-2 border-orange-900' : ''">
                    <div>Ramp</div>
                    <div>${{ stair[2].price }}</div>
                </button>
                </div>
                <!-- Roof -->
                <div class="flex flex-col justify-center items-center gap-5 p-5">
                    <h2>Roof</h2>
                <button @click="renderRoofImg(0)"
                class="flex flex-row justify-between items-center w-full h-20 p-5 border border-gray-400 rounded-3xl hover:border-2 hover:border-orange-900"
                :class="activeRoofIndex === 0 ? 'border-2 border-orange-900' : ''">
                    <div>Composite Shingle</div>
                    <div>${{ roof[0].price }}</div>
                </button>
                <button @click="renderRoofImg(1)"
                class="flex flex-row justify-between items-center w-full h-20 p-5 border border-gray-400 rounded-3xl hover:border-2 hover:border-orange-900"
                :class="activeRoofIndex === 1 ? 'border-2 border-orange-900' : ''">
                    <div>Standing Seam Metal</div>
                    <div>${{ roof[1].price }}</div>
                </button>
                <h2>Door</h2>
                <button @click="renderDoorImg(0)"
                class="flex flex-row justify-between items-center w-full h-20 p-5 border border-gray-400 rounded-3xl hover:border-2 hover:border-orange-900"
                :class="activeDoorIndex === 0 ? 'border-2 border-orange-900' : ''">
                    <div>Glass Entry Door</div>
                    <div>${{ door[0].price }}</div>
                </button>
                <button @click="renderDoorImg(1)"
                class="flex flex-row justify-between items-center w-full h-20 p-5 border border-gray-400 rounded-3xl hover:border-2 hover:border-orange-900"
                :class="activeDoorIndex === 1 ? 'border-2 border-orange-900' : ''">
                    <div>Folding Door</div>
                    <div>${{ door[1].price }}</div>
                </button>
                </div>
                <!-- Addon -->
                <div class="flex flex-col justify-center items-center gap-5 p-5">
                    <h2>Add-Ons</h2>
                <button @click="renderAddonImg(0)"
                class="flex flex-row justify-between items-center w-full h-20 p-5 border border-gray-400 rounded-3xl hover:border-2 hover:border-orange-900"
                :class="activeAddonIndex === 0 ? 'border-2 border-orange-900' : ''">
                    <div class="flex items-center justify-center gap-1"><input type="checkbox" :checked="checkAddon" class="checkbox rounded-full" />Gutters</div>
                    <div>${{ addon[0].price }}</div>
                </button>
                </div>
                <div class="flex w-full p-5 gap-5 justify-between items-center fixed lg:sticky bottom-0 bg-white shadow-lg border-t border-gray-400">
                    <div class="w-full text-start">Total Price: ${{ totalPrice }}</div>
                    <div class="w-full text-end"><button @click="reset()" class="btn">Reset Custom</button></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';

//#region QuyenNc( khởi tạo các mảng hình ảnh )
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
  { src: "cdn/aboduone/house/Stair/stair.png", price: 8000 },
  { src: "cdn/aboduone/house/Stair/stair2.png", price: 10000 },
  { src: "cdn/aboduone/house/Stair/stair3.png", price: 27000, zIndex:'z-40' },
];
const roof = [
    { src: "", price: 5700 },
    { src: "cdn/aboduone/house/roof/roof-standing.png", price: 6000 }
]
const door = [
    { src: "", price: 20000 },
    { src: "cdn/aboduone/house/Door/door2.png", price: 25000, zIndex:'z-30' }
]
const addon = [
    { src: "cdn/aboduone/house/add-on/add-on.png", price: 2000 }
]
//#endregion

//#region QuyenNc ( khởi tạo các biến dữ liệu )
const renderType = ref([]);
const totalPrice = ref(0);
const checkAddon = ref(false);

const currentSlide = ref(0);
const renderWall = ref(null);
const renderStair = ref(null);
const renderRoof = ref(null);
const renderDoor = ref(null);
const renderAddon = ref(null);

const activeWallIndex = ref(null);
const activeStairIndex = ref(null);
const activeRoofIndex = ref(null);
const activeDoorIndex = ref(null);
const activeAddonIndex = ref(null);
//#region

const reset = () => {
    renderWall.value = { src: "cdn/aboduone/house/wall/lap-white.png", price: 7500 }
    activeWallIndex.value = 0;
    renderStair.value = { src: "cdn/aboduone/house/Stair/stair.png", price: 8000 }
    activeStairIndex.value = 0;
    renderRoof.value = { src: "", price: 5700 }
    activeRoofIndex.value = 0;
    renderDoor.value = { src: "", price: 20000 }
    activeDoorIndex.value = 0;
    renderAddon.value = null;
    activeAddonIndex.value = null;
}
const resetSlide = () => {
    renderWall.value = null;
    activeWallIndex.value = null;
    renderStair.value = null;
    activeStairIndex.value = null;
    renderRoof.value = null;
    activeRoofIndex.value = null;
    renderDoor.value = null;
    activeDoorIndex.value = null;
    renderAddon.value = null;
}

//#region QuyenNc ( khởi tạo hàm sự kiện slide )
function nextSlide() {
    resetSlide()
  currentSlide.value = (currentSlide.value + 1) % solution.length;
}
function prevSlide() {
    resetSlide()
  currentSlide.value = (currentSlide.value - 1 + solution.length) % solution.length;
}
//#endregion

//#region QuyenNc ( khởi tạo hàm render hình ảnh product )
function renderWallImg(index) {
    renderWall.value = wall[index];
    activeWallIndex.value = index;
}

function renderStairImg(index) {
  renderStair.value = stair[index];
  activeStairIndex.value = index;
}

function renderRoofImg(index) {
    renderRoof.value = roof[index];
    activeRoofIndex.value = index;
}

function renderDoorImg(index) {
    renderDoor.value = door[index];
    activeDoorIndex.value = index;
}

function renderAddonImg(index) {
    const isActive = activeAddonIndex.value === index;
    renderAddon.value = isActive ? null : addon[index];
    activeAddonIndex.value = isActive ? null : index;
    checkAddon.value = !isActive;
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
//#endregion
// Khởi tao giá trị mặc định
onMounted(() => {
    renderWall.value = { src: "cdn/aboduone/house/wall/lap-white.png", price: 7500 }
    activeWallIndex.value = 0;
    renderStair.value = { src: "cdn/aboduone/house/Stair/stair.png", price: 8000 }
    activeStairIndex.value = 0;
    renderRoof.value = { src: "", price: 5700 }
    activeRoofIndex.value = 0;
    renderDoor.value = { src: "", price: 20000 }
    activeDoorIndex.value = 0;
})

// Theo dõi sự thay đổi của renderWall, renderStair, renderRoof, renderDoor, và renderAddon
watch([renderWall, renderStair, renderRoof, renderDoor, renderAddon], () => {
    const renderObjects = getRenderObjects();
    renderType.value = Object.values(renderObjects).filter(item => item !== null).map(item => item);
    totalPrice.value = renderType.value.reduce((acc, item) => acc + item.price, 0);
});
</script>

<style scoped>
h2 {
    font-size: 2rem;
    font-weight: bold;
}
</style>