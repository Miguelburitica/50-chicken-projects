<script setup>
import { RouterLink } from 'vue-router'
import SwitchMode from './SwitchMode.vue';
</script>

<template>
  <nav class="flex py-2 justify-between px-2 bg-slate-900">
    <div>
      <RouterLink class="px-2" to="/">Home</RouterLink> |
      <RouterLink class="px-2" to="/challenge">Challenge</RouterLink>
    </div>
    <div>
      <SwitchMode />
    </div>
  </nav>
</template>

<style scoped></style>
