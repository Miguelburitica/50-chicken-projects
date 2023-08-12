import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('mode', () => {
  const mode = 'chicken';
  function changeMode() {
    mode = mode === 'chicken' ? 'buri' : 'chicken'
  }

  return { changeMode, mode }
})