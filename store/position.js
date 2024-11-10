// stores/usePositionStore.js
import { defineStore } from 'pinia';

export const usePositionStore = defineStore('position', () => {
  const isPositionFillter = ref(true);

  function setPositionFillter(value) {
    isPositionFillter.value = value;
  }

  const arrayHouse = ref(null);

  function setArrayHouse(value) {
    arrayHouse.value = value;
  }

  const arrayLivingroom = ref(null);

  function setArrayLivingroom(value) {
    arrayLivingroom.value = value;
  }

  return { isPositionFillter, setPositionFillter, arrayHouse, setArrayHouse, arrayLivingroom, setArrayLivingroom };
});
