<template>
  <main class="py-10">
    <div class="flex items-center justify-center">
      <h1 class="text-8xl font-extrabold text-center py-10">Scroll</h1>
      <IconArrowDown size="100" class="scroll-animate" />
    </div>
    <p class="text-center text-2xl">infinite scroll!</p>
    <section class="flex flex-col justify-center items-center">
      <div class="text-3xl font-extrabold container rounded-lg p-4 flex items-center justify-center my-4"
        v-for="(_item, index) in containers" :key="index" :class="index % 2 ? 'left' : 'right'">
        <h1>Item number {{ index + 1 }}!</h1>
        <br>
        <p>{{ index % 30 === 0 && index !== 0 ? 'Please, stop :(' : '' }}</p>
      </div>
    </section>
  </main>
</template>

<script>
import { IconArrowDown } from '@tabler/icons-vue';
export default {
  data() {
    return {
      containers: [0, 1, 2],
      viewportHeight: window.innerHeight,
      bottomThreshold: 100,
    };
  },
  components: {
    IconArrowDown,
  },
  mounted() {
    this.generateContainers();
    window.addEventListener('scroll', this.generateContainers);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.generateContainers);
  },
  methods: {
    generateContainers() {
      const distanceToBottom = document.documentElement.scrollHeight - window.scrollY - window.innerHeight;
      const generateContainer = distanceToBottom < this.bottomThreshold
      if (generateContainer) {
        this.containers.push(this.containers.length);
      }
    },
  },
};
</script>

<style scoped>
main {
  background: cadetblue;
}

.container {
  background-color: rgb(131, 9, 34);
  height: 30vh;
  width: 30rem;
}

@keyframes container-left-animation {
  0% {
    transform: translateX(-20%);
    opacity: 0;
  }

  100% {
    transform: translateX(0%);
    opacity: 1;
  }
}

@keyframes container-right-animation {
  0% {
    transform: translateX(20%);
    opacity: 0;
  }

  100% {
    transform: translateX(0%);
    opacity: 1;
  }
}

@keyframes scroll-animation {
  0% {
    transform: translateY(-5px);
  }

  50% {
    transform: translateY(10px);
  }

  100% {
    transform: translateY(-5px);
  }
}

.scroll-animate {
  animation: scroll-animation 2s linear infinite;
}

.left {
  animation: container-left-animation 0.5s linear;
}

.right {
  animation: container-right-animation 0.5s linear;
}
</style>
