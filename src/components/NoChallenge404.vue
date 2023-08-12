<script>
import { storeToRefs } from 'pinia';
import { useModeStore } from '../stores/modules/mode';
import { capitalize } from '../utils/texts';
export default {
  computed: {
    day() {
      return this.$route.params.day || '0'
    },
    mode() {
      const store = useModeStore();
      const { mode } = storeToRefs(store);
      return capitalize(mode.value) || 'Buri'
    },
  }
}
</script>

<template>
  <main>
    <h1 class="text-3xl">
      404
    </h1>
    <h1>
      Oouh, seems like this challenge number {{ day }} is not available yet from {{ mode }}
    </h1>
  </main>
</template>