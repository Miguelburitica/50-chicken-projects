<template>
<main class="blurBackground bg-mononoke w-screen h-screen bg-cover flex items-center justify-center">
</main>
<h1 class="percentage text-6xl font-bold" >{{ percentage }}%</h1>
</template>

<script>
export default {
  name: 'Day5',
  data() {
    return {
      percentage: 100,
    }
  },
  mounted() {
    this.startCountdown()
  },
  methods: {
    startCountdown() {
      const interval = setInterval(() => {
        this.percentage -= 1
        if (this.percentage === 0) {
          clearInterval(interval)
        }
      }, 20);
    }
  }
}
</script>

<style scoped>
.blurBackground {
  animation: blurBackground 2s ease-in-out forwards;
}

.percentage {
  animation: percentage 2s ease-in-out forwards;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

@keyframes blurBackground {
  0% {
    filter: blur(20px);
  }
  100% {
    filter: blur(0px);
  }
}

@keyframes percentage {
  0% {
    opacity: 1;
  }
  95% {
    opacity: 0.2;
  }
  100% {
    opacity: 0;
  }
}
</style>
