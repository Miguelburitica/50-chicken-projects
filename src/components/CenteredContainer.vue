<template>
  <main class="h-screen w-full flex items-center justify-center" :style="color ? { backgroundColor: color } : {}">
    <slot></slot>
  </main>
</template>

<script>
export default {
  name: 'Container',
  props: {
    color: {
      type: String,
      default: ''
    }
  }
}
</script>