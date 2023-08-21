<template>
  <CenteredContainer color="cadetblue">
    <div class="flex">
      <input :class="inputClass" placeholder="Search..." class="w-0 bg-zinc-100 h-12 text-black outline-none rounded-l-lg"
        type="text">
      <button :class="searchClass" @click="toggleSearch" class="flex items-center justify-center h-12 bg-zinc-100 w-12">
        <IconSearch color="black" size="32" />
      </button>
    </div>
  </CenteredContainer>
</template>

<script>
import CenteredContainer from '../../CenteredContainer.vue';
import { IconSearch } from '@tabler/icons-vue'
export default {
  components: {
    CenteredContainer,
    IconSearch
  },
  data() {
    return {
      open: false
    }
  },
  methods: {
    toggleSearch() {
      this.open = !this.open
    }
  },
  computed: {
    inputClass() {
      return {
        'w-64': this.open,
        'px-4': this.open,
        'opacity-0': !this.open
      }
    },
    searchClass() {
      return {
        'rounded-r-lg': this.open,
        'rounded-lg': !this.open
      }
    }
  }
}
</script>

<style scoped>
* {
  transition: .5s all;
}
</style>