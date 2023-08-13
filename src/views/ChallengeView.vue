<template>
  <main>
    <CurrentChallenge/>
  </main>
</template>

<script>
import CurrentChallenge from '../components/challengers/CurrentChallenge.vue';
import { useModeStore } from '../stores/modules/mode'

const $store = useModeStore();

export default {
  name: 'ChallengeView',
  components: {
    CurrentChallenge
  },
  mounted() {
    console.log({ lalala: $store.mode })
  }
}

</script>
