<template>
    <div>
        <div v-show="!isLoading" class="grid grid-cols-12 w-full h-full max-h-screen overflow-hidden relative">
            <!-- render Imgage Product -->
            <div class="col-span-12 md:col-span-6 lg:col-span-9 h-full flex justify-center items-center">
                <div class="carousel w-full relative order-1 lg:order-2 h-full overflow-hidden">
                    <div v-for="(slide, index) in solution" :key="index"
                        class="relative carousel-item duration-500 ease-in-out translate-all w-full lg:max-h-screen overflow-hidden"
                        :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
                        <NuxtImg :src="slide.src" loading="eager" class="w-full h-full object-cover object-center" />
                        <div v-for="(item, index) in renderType" :key="index"
                            class="absolute inset-0 flex items-center justify-center"
                            :class="currentSlide === 0 ? 'block' : 'hidden'">
                            <NuxtImg v-if="item.src" :src="item.src" loading="eager" :class="[item.zIndex]"
                                class="w-full h-full object-cover object-center" />
                        </div>
                        <div v-for="(item, index) in renderLivingroom" :key="index"
                            class="absolute inset-0 flex items-center justify-center z-10"
                            :class="currentSlide === 1 ? 'block' : 'hidden'">
                            <NuxtImg v-if="item.src" :src="item.src" loading="eager" :class="[item.zIndex]"
                                class="w-full h-full object-cover object-center" />
                        </div>
                        <div v-if="renderLivingroom?.length > 0 && currentSlide === 1 && table"
                            class="absolute inset-0 flex items-center justify-center">
                            <NuxtImg :src="table.src" loading="eager"
                                class="w-full h-full object-cover object-center" />
                        </div>
                    </div>
                    <div class="absolute inset-y-1/2 left-5 flex items-center">
                        <button @click="prevSlide"
                            class="btn btn-circle bg-transparent border-none text-white text-2xl hover:bg-transparent">❮</button>
                    </div>
                    <div class="absolute inset-y-1/2 right-5 flex items-center">
                        <button @click="nextSlide"
                            class="btn btn-circle bg-transparent border-none text-white text-2xl hover:bg-transparent">❯</button>
                    </div>
                </div>
            </div>
            <!-- Option product -->
            <div class="col-span-12 md:col-span-6 lg:col-span-3 w-full h-screen flex flex-col">
                <!-- Main content area -->
                <div class=" overflow-y-auto px-3 py-2 scroll-smooth" :class="[isHeight]">
                    <!-- Header -->
                    <div class="pt-2 flex flex-col justify-center items-center gap-1">
                        <h1 class="text-3xl md:text-xl font-bold">Configure Your House</h1>
                        <div class="w-40 md:w-24 lg:w-20 bg-orange-900 text-center mx-auto mb-2" style="height: 1px">
                        </div>
                    </div>

                    <!-- Options container -->
                    <div class="flex flex-col justify-center items-center gap-2 p-2 w-full">
                        
                        <!-- Siding -->
                        <h2>Siding</h2>
                        <button @click="renderWallImg(0)"
                            class="flex flex-row justify-between items-center w-full h-12 px-3 lg:h-12 lg:p-3 border border-gray-400 rounded-3xl hover:border-2 hover:border-orange-900"
                            :class="activeWallIndex === 0 ? 'border-2 border-orange-900' : ''">
                            <p>Lap Siding White</p>
                            <p>${{ wall[0].price }}</p>
                        </button>
                        <button @click="renderWallImg(1)"
                            class="flex flex-row justify-between items-center w-full h-12 px-3 lg:h-12 lg:p-3 border border-gray-400 rounded-3xl hover:border-2 hover:border-orange-900"
                            :class="activeWallIndex === 1 ? 'border-2 border-orange-900' : ''">
                            <p>Lap Siding Black</p>
                            <p>${{ wall[1].price }}</p>
                        </button>
                        <button @click="renderWallImg(2)"
                            class="flex flex-row justify-between items-center w-full h-12 px-3 lg:h-12 lg:p-3 border border-gray-400 rounded-3xl hover:border-2 hover:border-orange-900"
                            :class="activeWallIndex === 2 ? 'border-2 border-orange-900' : ''">
                            <p>Board & Batten White</p>
                            <p>${{ wall[2].price }}</p>
                        </button>
                        <button @click="renderWallImg(3)"
                            class="flex flex-row justify-between items-center w-full h-12 px-3 lg:h-12 lg:p-3 border border-gray-400 rounded-3xl hover:border-2 hover:border-orange-900"
                            :class="activeWallIndex === 3 ? 'border-2 border-orange-900' : ''">
                            <p>Board & Batten Black</p>
                            <p>${{ wall[3].price }}</p>
                        </button>
                    </div>
                    <!-- Stair -->
                    <div class="flex flex-col justify-center items-center gap-2 p-2 w-full">
                        <h2>Stair</h2>
                        <button @click="renderStairImg(0)"
                            class="flex flex-row justify-between items-center w-full h-12 px-3 lg:h-12 lg:p-3 border border-gray-400 rounded-3xl hover:border-2 hover:border-orange-900"
                            :class="activeStairIndex === 0 ? 'border-2 border-orange-900' : ''">
                            <p>Stair Default</p>
                            <p>${{ stair[0].price }}</p>
                        </button>
                        <button @click="renderStairImg(1)"
                            class="flex flex-row justify-between items-center w-full h-12 px-3 lg:h-12 lg:p-3 border border-gray-400 rounded-3xl hover:border-2 hover:border-orange-900"
                            :class="activeStairIndex === 1 ? 'border-2 border-orange-900' : ''">
                            <p>Stair 4x10</p>
                            <p>${{ stair[1].price }}</p>
                        </button>
                        <button @click="renderStairImg(2)"
                            class="flex flex-row justify-between items-center w-full h-12 px-3 lg:h-12 lg:p-3 border border-gray-400 rounded-3xl hover:border-2 hover:border-orange-900"
                            :class="activeStairIndex === 2 ? 'border-2 border-orange-900' : ''">
                            <div>Ramp</div>
                            <p>${{ stair[2].price }}</p>
                        </button>
                    </div>
                    <!-- Roof -->
                    <div class="flex flex-col justify-center items-center gap-2 p-2 w-full">
                        <h2>Roof</h2>
                        <button @click="renderRoofImg(0)"
                            class="flex flex-row justify-between items-center w-full h-12 px-3 lg:h-12 lg:p-3 border border-gray-400 rounded-3xl hover:border-2 hover:border-orange-900"
                            :class="activeRoofIndex === 0 ? 'border-2 border-orange-900' : ''">
                            <p>Composite Shingle</p>
                            <p>${{ roof[0].price }}</p>
                        </button>
                        <button @click="renderRoofImg(1)"
                            class="flex flex-row justify-between items-center w-full h-12 px-3 lg:h-12 lg:p-3 border border-gray-400 rounded-3xl hover:border-2 hover:border-orange-900"
                            :class="activeRoofIndex === 1 ? 'border-2 border-orange-900' : ''">
                            <p>Standing Seam Metal</p>
                            <p>${{ roof[1].price }}</p>
                        </button>
                    </div>
                    <div class="flex flex-col justify-center items-center gap-2 p-2 w-full">
                        <h2>Door</h2>
                        <button @click="renderDoorImg(0)"
                            class="flex flex-row justify-between items-center w-full h-12 px-3 lg:h-12 lg:p-3 border border-gray-400 rounded-3xl hover:border-2 hover:border-orange-900"
                            :class="activeDoorIndex === 0 ? 'border-2 border-orange-900' : ''">
                            <p>Glass Entry Door</p>
                            <p>${{ door[0].price }}</p>
                        </button>
                        <button @click="renderDoorImg(1)"
                            class="flex flex-row justify-between items-center w-full h-12 px-3 lg:h-12 lg:p-3 border border-gray-400 rounded-3xl hover:border-2 hover:border-orange-900"
                            :class="activeDoorIndex === 1 ? 'border-2 border-orange-900' : ''">
                            <p>Folding Door</p>
                            <p>${{ door[1].price }}</p>
                        </button>
                    </div>
                    <!-- Addon -->
                    <div class="flex flex-col justify-center items-center gap-2 p-2 w-full">
                        <h2>Add-Ons</h2>
                        <button @click="renderAddonImg(0)"
                            class="flex flex-row justify-between items-center w-full h-12 px-3 lg:h-12 lg:p-3 border border-gray-400 rounded-3xl hover:border-2 hover:border-orange-900"
                            :class="activeAddonIndex === 0 ? 'border-2 border-orange-900' : ''">
                            <p class="flex items-center justify-center gap-1"><input type="checkbox"
                                    :checked="checkAddon" class="checkbox rounded-full" />Gutters</p>
                            <p>${{ addon[0].price }}</p>
                        </button>
                    </div>
                    <div class="p-2 flex flex-col justify-center items-center gap-2">
                        <h2>Living Room</h2>
                        <div class="w-40 md:w-24 lg:w-20 bg-orange-900 text-center mx-auto mb-2" style="height: 1px">
                        </div>
                    </div>
                    <div class="flex flex-col justify-center items-center gap-2 p-2 w-full">
                        <h2>Floor</h2>
                        <button @click="renderFloorImg(0)"
                            class="flex flex-row justify-between items-center w-full h-12 px-3 lg:h-12 lg:p-3 border border-gray-400 rounded-3xl hover:border-2 hover:border-orange-900"
                            :class="activeFloorIndex === 0 ? 'border-2 border-orange-900' : ''">
                            <p>Light Oak</p>
                            <p>${{ floor[0].price }}</p>
                        </button>
                        <button @click="renderFloorImg(1)"
                            class="flex flex-row justify-between items-center w-full h-12 px-3 lg:h-12 lg:p-3 border border-gray-400 rounded-3xl hover:border-2 hover:border-orange-900"
                            :class="activeFloorIndex === 1 ? 'border-2 border-orange-900' : ''">
                            <p>Dark Oak</p>
                            <p>${{ floor[1].price }}</p>
                        </button>
                    </div>
                    <div class="flex flex-col justify-center items-center gap-2 p-2 w-full">
                        <h2>Sofa</h2>
                        <button @click="renderSofaImg(2)"
                            class="flex flex-row justify-between items-center w-full h-12 px-3 lg:h-12 lg:p-3 border border-gray-400 rounded-3xl hover:border-2 hover:border-orange-900"
                            :class="activeSofaIndex === 2 ? 'border-2 border-orange-900' : ''">
                            <p>Sofa Default</p>
                            <p>${{ sofa[2].price }}</p>
                        </button>
                        <button @click="renderSofaImg(0)"
                            class="flex flex-row justify-between items-center w-full h-12 px-3 lg:h-12 lg:p-3 border border-gray-400 rounded-3xl hover:border-2 hover:border-orange-900"
                            :class="activeSofaIndex === 0 ? 'border-2 border-orange-900' : ''">
                            <p>Storage Bench & Cushion</p>
                            <p>${{ sofa[0].price }}</p>
                        </button>
                    </div>
                </div>

                <!-- Fixed bottom bar -->
                <div class="w-full bg-white border-t border-gray-200 p-2 mt-auto lg:relative fixed bottom-0">
                    <div class="flex w-full justify-between items-center">
                        <div class="w-full text-start font-semibold">Total Price: ${{ totalPrice }}</div>
                        <div class="w-full text-end">
                            <button @click="reset()" class="btn">Reset Custom</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-show="isLoading"
            class="w-full h-full flex flex-col justify-center items-center bg-black absolute inset-0 gap-4">
            <NuxtImg src="/image/icon-green.svg" loading="eager" class="w-16 h-16 bg-transparent" />
            <progress class="progress progress-success w-56" style="height: 3px !important"></progress>
        </div>
    </div>
</template>

<script setup>
const { $util } = useNuxtApp();

const mediaBreakpoint = computed(() => {
  return $util.media();
});
const isHeight = computed(() => {
  switch (mediaBreakpoint.value) {
    case "xxl":
    case "xl":
    case "lg":
      return 'h-full pb-2';
    case "md":
      return 'h-full pb-16';
    case "sm":
      return 'h-1/2';
    case "mbl":
      return 'h-2/5 pb-6 mbl';
    case "mbm":
      return 'h-1/2 pb-12 mbm';
    case "xs":
      return 'h-1/2 xs';
  }
});
const positionStore = usePositionStore();

//#region QuyenNc( khởi tạo các mảng hình ảnh )
const solution = [
    { src: "cdn/aboduone/abozu1.png" },
    { src: "cdn/aboduone/abozu2.jpeg" },
    //   { src: "cdn/aboduone/abozu3.jpeg" },
    //   { src: "cdn/aboduone/abozu4.jpeg" },
    //   { src: "cdn/aboduone/abozu5.png" },
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
    { src: "cdn/aboduone/house/Stair/stair3.png", price: 27000, zIndex: 'z-40' },
];
const roof = [
    { src: "", price: 5700 },
    { src: "cdn/aboduone/house/roof/roof-standing.png", price: 6000 }
]
const door = [
    { src: "", price: 20000 },
    { src: "cdn/aboduone/house/Door/door2.png", price: 25000, zIndex: 'z-30' }
]
const addon = [
    { src: "cdn/aboduone/house/add-on/add-on.png", price: 2000 }
]

const floor = [
    { src: "", price: 1000 },
    { src: "cdn/aboduone/livingroom/floor/foor2.png", price: 1000 }
]
const sofa = [
    { src: "cdn/aboduone/livingroom/sofa/50year.png", price: 3800, zIndex: 'z-10' },
    { src: "cdn/aboduone/livingroom/sofa/50year2.png", price: 1900 },
    { src: "cdn/aboduone/livingroom/sofa/sofa1.png", price: 1900 }
]
//#endregion

//#region QuyenNc ( khởi tạo các biến dữ liệu )
const renderType = ref([]);
const renderLivingroom = ref([]);
const table = ref(null);
const totalPrice = ref(0);
const checkAddon = ref(false);
const isLoading = ref(true);

const currentSlide = ref(0);
const renderWall = ref(null);
const renderStair = ref(null);
const renderRoof = ref(null);
const renderDoor = ref(null);
const renderAddon = ref(null);
const renderFloor = ref(null);
const renderSofa = ref(null);

const activeWallIndex = ref(null);
const activeStairIndex = ref(null);
const activeRoofIndex = ref(null);
const activeDoorIndex = ref(null);
const activeAddonIndex = ref(null);
const activeFloorIndex = ref(null);
const activeSofaIndex = ref(null);
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
    checkAddon.value = false;

    renderFloor.value = { src: "", price: 1000 };
    activeFloorIndex.value = 0;
    renderSofa.value = { src: "cdn/aboduone/livingroom/sofa/sofa1.png", price: 1900 };
    activeSofaIndex.value = 2;
}

//#region QuyenNc ( khởi tạo hàm sự kiện slide )
function nextSlide() {
    isLoading.value = true;
    currentSlide.value = (currentSlide.value + 1) % solution.length;
    if (currentSlide.value === 0) {
        renderType.value.push(positionStore.arrayHouse)
    }
    if (currentSlide.value === 1) {
        renderLivingroom.value.push(positionStore.arrayLivingroom)
    }
    setTimeout(() => {
        isLoading.value = false;
    }, 1000);
}
function prevSlide() {
    isLoading.value = true;
    currentSlide.value = (currentSlide.value - 1 + solution.length) % solution.length;
    if (currentSlide.value === 0) {
        renderType.value.push(positionStore.arrayHouse)
    }
    if (currentSlide.value === 1) {
        renderLivingroom.value.push(positionStore.arrayLivingroom)
    }
    setTimeout(() => {
        isLoading.value = false;
    }, 1000);
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

function renderFloorImg(index) {
    renderFloor.value = floor[index];
    activeFloorIndex.value = index;
}

function renderSofaImg(index) {
    renderSofa.value = sofa[index];
    activeSofaIndex.value = index;
    if (index === 0) {
        table.value = { src: "cdn/aboduone/livingroom/sofa/50year2.png", price: 1900 }
    } else {
        table.value = null;
    }
}

function getRenderObjects() {
    return {
        wall: renderWall.value,
        stair: renderStair.value,
        roof: renderRoof.value,
        door: renderDoor.value,
        addon: renderAddon.value,
    };
}

function getRenderLivingroomObjects() {
    return {
        floor: renderFloor.value,
        sofa: renderSofa.value,
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
    renderAddon.value = null;
    activeAddonIndex.value = null;
    checkAddon.value = false;

    renderFloor.value = { src: "", price: 1000 };
    activeFloorIndex.value = 0;
    renderSofa.value = { src: "cdn/aboduone/livingroom/sofa/sofa1.png", price: 1900 };
    activeSofaIndex.value = 2;

    setTimeout(() => {
        isLoading.value = false;
    }, 1200);
})

// Theo dõi sự thay đổi của renderWall, renderStair, renderRoof, renderDoor, và renderAddon
watch([renderWall, renderStair, renderRoof, renderDoor, renderAddon], () => {
    const renderObjects = getRenderObjects();
    renderType.value = Object.values(renderObjects).filter(item => item !== null).map(item => item);
    totalPrice.value = renderType.value.reduce((acc, item) => acc + item.price, 0) +
        renderLivingroom.value.reduce((acc, item) => acc + item.price, 0);
    positionStore.setArrayHouse(renderType.value)
});

watch([renderFloor, renderSofa], () => {
    const renderLivingroomObjects = getRenderLivingroomObjects();
    renderLivingroom.value = Object.values(renderLivingroomObjects).filter(item => item !== null).map(item => item);
    totalPrice.value = renderType.value.reduce((acc, item) => acc + item.price, 0) +
        renderLivingroom.value.reduce((acc, item) => acc + item.price, 0);
    positionStore.setArrayLivingroom(renderLivingroom.value);
});
</script>

<style scoped>

</style>