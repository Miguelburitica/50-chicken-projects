<script>
import { capitalize, defineAsyncComponent } from 'vue';
import { useModeStore } from '../stores/modules/mode';
import { storeToRefs } from 'pinia';
import NoChallenge404 from '../components/NoChallenge404.vue'

export default {
  computed: {
    day() {
      return this.$route.params.day || '1'
    },
    mode() {
      const store = useModeStore();
      const { mode } = storeToRefs(store);
      return capitalize(mode.value) || 'Buri'
    },
    currentComponent() {
      const mode = this.mode;
      const day = this.day;
      const componentPath = `./${mode}/Day${day}.vue`
      // this dynamically import handle the error/success case for challenges
      // we need to keep our guidelines clean
      return defineAsyncComponent({
        loader: () => import(componentPath),
        errorComponent: NoChallenge404,
        timeout: 30
      })

    },
  },
  data() {
    return {
      loaded: false,
    };
  },
  mounted() {
    this.loaded = true;
  },
};
</script>

<template>
  <main>
    <div v-if="loaded">
      <h3>
        {{ day }}
        {{ mode }}
        <component :is="currentComponent" />
      </h3>
    </div>
    <div v-else>
      <h3>loading..</h3>
    </div>
  </main>
</template>
