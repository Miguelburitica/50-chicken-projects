<script setup>
import { storeToRefs } from 'pinia';
import { useModeStore } from '../stores/modules/mode'
import CurrentChallenge from '../challengers/CurrentChallenge.vue';
const store = useModeStore();
const { mode } = storeToRefs(store)
</script>

<template>
  <main>
    <CurrentChallenge/>
  </main>
</template>
