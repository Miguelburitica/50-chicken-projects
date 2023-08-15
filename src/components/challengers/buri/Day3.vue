<template>
<div class="bg-cyan-950 w-screen h-screen absolute top-0 overflow-y-auto overflow-x-hidden">
  <div :class="menuRouletteClasses">
    <svg @click="open = false" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="4" stroke="currentColor" class="w-8 h-8 absolute exit">
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>
    <svg @click="open = true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-10 h-10 absolute options">
      <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
  </div>
  <nav :class="lateralMenuClasses">
    <li class="flex gap-3 items-center">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8">
        <path d="M19.006 3.705a.75.75 0 00-.512-1.41L6 6.838V3a.75.75 0 00-.75-.75h-1.5A.75.75 0 003 3v4.93l-1.006.365a.75.75 0 00.512 1.41l16.5-6z" />
        <path fill-rule="evenodd" d="M3.019 11.115L18 5.667V9.09l4.006 1.456a.75.75 0 11-.512 1.41l-.494-.18v8.475h.75a.75.75 0 010 1.5H2.25a.75.75 0 010-1.5H3v-9.129l.019-.006zM18 20.25v-9.565l1.5.545v9.02H18zm-9-6a.75.75 0 00-.75.75v4.5c0 .414.336.75.75.75h3a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75H9z" clip-rule="evenodd" />
      </svg>
      HOME
    </li>
    <li class="flex gap-3 items-center">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8">
        <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd" />
      </svg>
      ABOUT
    </li>
    <li class="flex gap-3 items-center">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8">
        <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
        <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
      </svg>
      CONTACT
    </li>
  </nav>
  <main :class="contentClasses">
    <article class="mx-auto flex flex-col">
      <h3 class="text-3xl font-semibold mb-2 font-serif">Capítulo LVI</h3>
      <small class=" text-gray-400 italic mb-4">
        <time datetime="1851-11-19">19/11/1851</time>
        <span> - </span>
        <span>3 min read</span>
      </small>
      <p class="mb-4 font-sans">Pero tomadas en su conjunto, las mejores representaciones de ballenas y escenas de balleneras que puedan encontrarse, aunque no sean muy correctas en ciertos pormenores, son de lejos dos grabados franceses, grandes y bien cuidados, extraídos de pinturas de un tal Garnery. Representan, respectivamente, ataques contra el cachalote y la ballena franca.<br> En el primer grabado, se ve a un noble cachalote con toda la majestad y poderío, que acaba de salir debajo de la lancha desde las profundidades del océano, y que lanza al aire sobre su lomo el terrible naufragio de las planchas destrozadas. La proa de la lancha aparece parcialmente intacta, y se representa balanceándose sobre el espinazo del monstruo; y de pie en esa proa, durante aquel único instante aislado e imponderable, se ve a un remero, medio envuelto por el chorro hirviente e indignado de la ballena, en ademán de saltar, como si lo hiciera desde un precipicio.</p>
      <img class="mb-4" src="../../../assets/challenges/whale_garnery.webp" alt="Garnery whale painting">
      <p class="font-sans">La acción de todo el asunto es maravillosamente buena y verdadera. El cubo de línea medio vaciado flota en el mar blanqueado; los postes de madera de los arpones derramados se balancean oblicuamente en él; las cabezas de la tripulación nadadora están esparcidas alrededor de la ballena con expresiones contrastantes de miedo; mientras que en la negra y tormentosa distancia, el barco se acerca a la escena. Se podría encontrar una seria falta con los detalles anatómicos de esta ballena, pero dejémoslas pasar, ya que ni siquiera por mi vida podría hacer un dibujo tan bueno.</p>
    </article>
  </main>
</div>
</template>

<script>

export default {
  name: 'Day3',
  data() {
    return {
      open: false,
    }
  },
  computed: {
    menuRouletteClasses () {
      const classes = {
        'menu-roulette': true,
        'bg-cyan-900': true,
        'rounded-full': true,
        'fixed': true,
        'z-10': true,
        'open-animation': this.open,
        'close-state': !this.open,
      }
      return classes
    },
    lateralMenuClasses () {
      const classes = {
        'lateral-menu': true,
        'absolute': true,
        'bottom-24': true,
        'flex': true,
        'flex-col': true,
        'gap-8': true,
        'open-animation': this.open,
        'close-state': !this.open,
      }
      return classes
    },
    contentClasses () {
      const classes = {
        'content': true,
        'w-full': true,
        'bg-gray-950': true,
        'open-animation': this.open,
        'close-state': !this.open,
      }
      return classes
    }
  },
  mounted() {
    //
  }
}
</script>

<style scoped>

.menu-roulette {
  top: 0px;
  left: 0px;
  padding: 100px;
}

.menu-roulette svg {
  cursor: pointer;
}

.menu-roulette svg.exit {
  bottom: 30px;
  left: 65px;
}

.menu-roulette svg.options {
  right: 25px;
  transform: rotate(-45deg);
}

.menu-roulette.close-state {
  transition: transform 1s;
  transform: translate(-50%, -35%) rotate(45deg);
}

.menu-roulette.open-animation {
  transition: transform 1.6s;
  transform: translate(-50%, -35%) rotate(-45deg);
}

.lateral-menu.close-state {
  transition: transform 1s;
  transform: translate(-100%, 0);
}

.lateral-menu.open-animation {
  transition: transform 1.6s;
  transform: translate(30%, 0);
}

.lateral-menu.open-animation > li:last-child {
  transition: transform 1.6s;
  transform: translate(30%, 0);
}

.lateral-menu.open-animation > li:nth-child(2) {
  transition: transform 1.6s;
  transform: translate(15%, 0);
}

.lateral-menu.close-state > li:last-child {
  transition: transform 1s;
  transform: translate(0, 0);
}

.lateral-menu.close-state > li:nth-child(2) {
  transition: transform 1s;
  transform: translate(0, 0);
}

.content.close-state {
  transition: transform 1s;
  transform-origin: left top;
  transform: rotate(0, 0);
}

.content.open-animation {
  transition: transform 1.6s;
  transform-origin: left top;
  transform: rotate(-15deg);
}

.content {
  padding: 60px 0 40px;
}

@media (max-width: 768px) {
  .content {
    padding: 160px 0 40px;
  }    
}

.content > article {
  max-width: 80ch;
  width: 90%;
}

</style>
