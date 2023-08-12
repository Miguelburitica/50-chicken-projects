<script setup>
import SwitchMode from '../components/SwitchMode.vue'
import { useModeStore } from '../stores/modules/mode'
const store = useModeStore();
const { switchMode } = store
</script>

<template>
  <main>

    <SwitchMode />
    <button @click="switchMode" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
      Change mode
    </button>


  </main>
</template>
