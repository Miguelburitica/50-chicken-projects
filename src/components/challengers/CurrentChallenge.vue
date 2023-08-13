<script>
import { defineAsyncComponent } from 'vue';
import { useModeStore } from '@/stores/modules/mode';
import { storeToRefs } from 'pinia';
import NoChallenge404 from '@/components/NoChallenge404.vue'

export default {
  data() {
    return {
      loaded: false,
    };
  },
  computed: {
    day() {
      return this.$route.params.day || '1'
    },
    mode() {
      const store = useModeStore();
      const { mode } = storeToRefs(store);
      return mode.value || 'buri'
    },
    currentComponent() {
      const mode = this.mode;
      const day = this.day;
      const componentPath = `./${mode}/Day${day}.vue`
      // this dynamically import handle the error/success case for challenges
      // we need to keep our guidelines clean
      return defineAsyncComponent({
        loader: () => import(componentPath)
          .then((module) => module.default)
          .catch(() => NoChallenge404),
        errorComponent: NoChallenge404,
        timeout: 1000
      })
    },
  },
  mounted() {
    this.loaded = true
  }
};
</script>

<template>
  <component v-if="loaded" :is="currentComponent" />
  <h3 v-else>loading..</h3>
</template>
