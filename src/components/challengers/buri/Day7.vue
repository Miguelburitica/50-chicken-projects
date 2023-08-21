<template>
<main class="flex items-center w-screen h-screen">
  <article class="h-full flex flex-col justify-center gap-24 items-center flex-1 bg-slate-200 transition-all duration-700 opacity-60 bg-cover hover:opacity-100 hover:flex-[2] overly-green">
    <h2 class=" font-bold text-8xl">Piratería</h2>
    <button class="px-12 py-4 bg-transparent border-gray-200 border-solid border-[2px] rounded-md font-bold text-lg transition-all duration-200 hover:border-transparent hover:bg-lime-500" >Comprar piratería</button>
  </article>
  <article class="flex-1 flex flex-col justify-center gap-24 items-center h-full transition-all duration-500 opacity-60 relative hover:opacity-100 hover:flex-[2] overly-red">
    <img class="absolute left-0 top-11 max-w-sm w-full" src="../../../assets/challenges/buri/anti_piracy.webp" alt="" srcset="">
    <h2 class=" font-bold text-8xl">No Piratería</h2>
    <button class="px-12 py-4 bg-transparent border-gray-200 border-solid border-[2px] rounded-md font-bold text-lg transition-all duration-200 hover:border-transparent hover:bg-red-600" >Comprar Original</button>
  </article>
</main>
</template>

<style scoped>

/* create an color filter over the bg-image */
article.overly-green {
  background: linear-gradient(rgba(0, 255, 0, 0.5), rgba(0, 255, 0, 0.5)), url('../../../assets/challenges/buri/piracy_flag.webp');
  background-size: cover;
}

article.overly-red {
  background: linear-gradient(rgba(255, 0, 0, 0.5), rgba(255, 0, 0, 0.5)), url('../../../assets/challenges/buri/original.webp');
}

</style>