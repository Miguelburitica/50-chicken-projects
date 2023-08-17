<template>
<main class="bg-green-700 w-screen h-screen flex justify-center items-center">
  <div class="flex items-center relative max-w-[90%]">
    <input
      type="text"
      placeholder="Search..."
      :class="inputClasses"
    >
    <button
      @click="showBar = !showBar"
      class="bg-slate-50 text-black px-4 py-2 focus:outline-none"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    </button>
  </div>
</main>
</template>

<script>

export default {
  name: 'Day4',
  data() {
    return {
      showBar: false,
    }
  },
  computed: {
    inputClasses () {
      const classes = {
        'input-transition': true,
        'bg-slate-50': true,
        'text-black': true,
        'focus:outline-none': true,
        'transition-all': true,
        'duration-500': true,
        'w-0': !this.showBar,
        'p-0': !this.showBar,
        'max-w-full': this.showBar,
        'w-64': this.showBar,
        'px-4': this.showBar,
        'py-2': true,
      }
      return classes
    },
  }
}
</script>
