<template>
  <CenteredContainer :style="imageAppear" class="main-container" />
  <CenteredContainer class="absolute">
    <h1 :style="textDisappear" class="text-6xl font-extrabold">{{ progress }}%</h1>
  </CenteredContainer>
</template>

<script>
import CenteredContainer from '../../CenteredContainer.vue';

export default {
  components: {
    CenteredContainer
  },
  data() {
    return {
      progress: 0
    }
  },
  mounted() {
    this.loadAnimate()
  },
  computed: {
    textDisappear() {
      return {
        opacity: `${100 - this.progress}%`
      }
    },
    imageAppear() {
      return {
        filter: `blur(${50 - (this.progress / 2)}px)`
      }
    },
  },
  methods: {
    loadAnimate() {
      const interval = setInterval(() => {
        this.progress++;
        if (this.progress >= 100) {
          clearInterval(interval)
        }
      }, 35)
    }
  }
}
</script>

<style scoped>
.main-container {
  background-image: url('../../../assets/challenges/chicken/day1/bojack.webp');
  background-size: 100% 100%;
  position: absolute;
}
</style>