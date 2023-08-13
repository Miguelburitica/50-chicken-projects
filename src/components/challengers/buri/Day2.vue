<template>
<main class="flex flex-col items-center justify-center max-w-xl h-screen w-screen mx-auto">
  <nav class="flex items-center justify-between relative gap-4 w-full overflow-hidden">
    <div class="step" v-for="index in steps || 2">
      <div
        :class="{'step-circle': true, '--active': index === currentStep || index < currentStep}"
        @click="currentStep = index"
      ><span>{{ index }}</span></div>
    </div>
    <div :style="`--step-line-width: ${beforeStepBarWidth}%`" class="step-line"></div>
  </nav>
</main>
</template>

<script>
export default {
  name: 'Day2',
  data () {
    return {
      currentStep: 1,
      steps: 5
    }
  },
  computed: {
    beforeStepBarWidth () {
      return (this.currentStep - 1) * 115 / this.steps
    }
  }
}
</script>

<style scoped>
.step {
  display: flex;
  align-items: center;
}

.step-circle {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #e2e8f0;
  color: #2d3748;
  font-size: 1.5rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 2;

  position: relative;
  transition: .3s ease-in-out;
}

.step-circle span {
  z-index: 4;
  transition: all .3s ease-in-out;
}

.step-circle::before {
  content: '';
  position: absolute;
  z-index: 3;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: transparent;
  border: #2d77f7 4px solid;
  opacity: 0;
  transition: .3s ease-in-out;
}

.step-circle:not(:not(.--active))::before {
  opacity: 1;
}

.step-line {
  z-index: 0;
  width: 100%;
  height: 4px;
  background-color: #eee;
  margin: 0;
  position: absolute;
}

.step-line::before {
  z-index: 1;
  content: '';
  position: absolute;
  left: 0;
  height: 4px;
  width: var(--step-line-width);
  background-color: #2d77f7;
  transition: .3s ease-in-out;
}

@media (max-width: 768px) {
  .step {
    flex-direction: column;
  }

  .step-line {
    width: 10px;
    height: 100px;
  }
}
</style>
