<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav class="">
    <RouterLink to="/">Home</RouterLink> |
    <RouterLink to="/challenge">Challenge</RouterLink>
  </nav>
  <RouterView />
</template>

<style scoped>
</style>
