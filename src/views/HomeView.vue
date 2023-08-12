<template>
  <div class="about">
    <h1>This is an about page | currentMode: {{ mode }}</h1>
  </div>
</template>

<script setup>
import { useModeStore } from '../stores/modules/mode'
import { storeToRefs } from 'pinia';

const store = useModeStore();

const { mode } = storeToRefs(store)
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
