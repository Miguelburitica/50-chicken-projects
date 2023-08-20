<template>
  <CenteredContainer>
    <main class="flex flex-col">
      <div class="flex items-center justify-center gap-11">
        <div class="flex items-center cursor-pointer" @click="setCurrentStep(item)" v-for="(item, index) in steps"
          :key="index">
          <div class="step-counter" :class="stepsDone.includes(item.id) ? 'step-complete' : ''">
            <div v-if="stepsDone.includes(item.id)">
              <IconCheck color="#2FC2A9" />
            </div>
            <div v-else>
              {{ item.id }}
            </div>
          </div>
          <div class="ml-3 flex items-center">
            <div>
              <h3>{{ item.title }}</h3>
              <span class="text-sm text-gray-400">{{ item.content }}</span>
            </div>
            <IconChevronsRight class="ml-4" :color="stepsDone.includes(item.id) ? '#2FC2A9' : 'white'"
              :style="item.id === steps.length ? 'visibility: hidden' : ''" />
          </div>
        </div>
      </div>
      <div class="flex justify-between my-4 items-center">
        <button @click="prevStep" class="btn-navigation rounded-md px-3">Previous</button>
        <button @click="nextStep" class="btn-navigation rounded-md px-3">Next</button>
      </div>
    </main>
  </CenteredContainer>
</template>

<script>
import CenteredContainer from '../../CenteredContainer.vue';
import { IconChevronsRight, IconCheck } from '@tabler/icons-vue'

export default {
  name: 'Day2',
  components: {
    CenteredContainer,
    IconChevronsRight,
    IconCheck
  },
  mounted() {
    console.log(this.steps);
  },
  data() {
    let steps = [
      {
        title: 'Step 1',
        content: 'Content for step'
      },
      {
        title: 'Step 2',
        content: 'Add more content'
      },
      {
        title: 'Step 3',
        content: 'Are you sure of this?'
      },
      {
        title: 'Step 4',
        content: 'More information'
      },
      {
        title: 'Step 5',
        content: 'add all the steppers you need'
      },

    ]
    steps = steps.map((step, i) => {
      return {
        ...step,
        id: i + 1
      }
    })
    return {
      steps,
      currentStep: steps[0],
      stepsDone: []
    }
  },
  methods: {
    setCurrentStep(newItem) {
      let newStepsDone = [];
      for (let i = 0; i < newItem.id; i++) {
        newStepsDone.push(i)
      }
      this.stepsDone = newStepsDone
      this.currentStep = newItem.id
    },
    prevStep() {
      this.stepsDone != [] ? this.stepsDone?.pop() : null
    },
    nextStep() {
      this.stepsDone.length !== this.steps.length
        ? this.stepsDone.push(this.stepsDone.length + 1)
        : null
    }
  }
}
</script>

<style scoped>
* {
  transition: .5s all;
}

h3 {
  font-size: clamp(.75rem, 1vw, 1.2vw);
}

.step-counter {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  outline: 2px solid #2FC2A9;
  width: clamp(15px, 25px, 30px);
  height: clamp(15px, 25px, 30px);
}

.step-complete {
  background-color: rgb(36, 84, 68);
}

.btn-navigation {
  background-color: rgb(36, 84, 68);
  font-size: clamp(1rem, 1.5vw, 1.7vw);
  font-weight: 900;
}

.btn-navigation:hover {
  background-color: #2FC2A9;
}
</style>
