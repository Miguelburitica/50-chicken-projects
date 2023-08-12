<script setup>
import { BURI, CHICKEN } from '../constants/mode'
import { capitalize } from '../utils/texts'
import { useModeStore } from '../stores/modules/mode'
import { storeToRefs } from 'pinia';
import { watch } from 'vue';
const store = useModeStore();
const { mode, getMode } = storeToRefs(store)
const { switchMode } = store
let checked = mode === CHICKEN ? true : false

watch(() => mode.value, (newValue, oldValue) => {
  checked = newValue
})
</script>

<template>
  <div class="flex">
    <span class="mx-2">{{ capitalize(CHICKEN) }}</span>
    <label class="relative inline-flex items-center cursor-pointer">
      <input id="switch-mode-component" @change="switchMode" type="checkbox" :checked="checked" class="sr-only peer">
      <div
        class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
      </div>
    </label>
    <span class="mx-2">{{ capitalize(BURI) }}</span>
  </div>
</template>