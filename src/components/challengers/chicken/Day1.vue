<template>
  <main>
    <h1>
      <h1 class="w-full m-auto text-center font-bold text-2xl py-4">Collapsable Cards</h1>
      <div class="flex items-center justify-between gap-5 mx-3 overflow-x-auto">
        <div v-for="(item, index) in cities" :key="index">
          <img @click="setCurrentCity(item)" class="rounded-xl"
            :class="item.id === currentImage.id ? 'current-image-container' : 'image-container'" :src="item.image"
            :alt="item.name">
          <h4 :class="item.id === currentImage.id ? 'text-appear' : ''" class="custom-text">
            {{ item.name }}</h4>
        </div>
      </div>
    </h1>
  </main>
</template>

<script>
// Importa las imágenes
import barcelonaImage from '../../../assets/challenges/chicken/day1/barcelona.webp';
import medellinImage from '../../../assets/challenges/chicken/day1/medellin.webp';
import shangaiImage from '../../../assets/challenges/chicken/day1/shangai.webp';
import tokyoImage from '../../../assets/challenges/chicken/day1/tokyo.webp';
import utahImage from '../../../assets/challenges/chicken/day1/utah.webp';

export default {
  data() {
    let cities = [
      {
        id: 1,
        name: 'Barcelona',
        country: 'Spain',
        image: barcelonaImage
      },
      {
        id: 2,
        name: 'Medellín',
        country: 'Colombia',
        image: medellinImage
      },
      {
        id: 3,
        name: 'Shangai',
        country: 'China',
        image: shangaiImage
      },
      {
        id: 4,
        name: 'Tokyo',
        country: 'Japan',
        image: tokyoImage
      },
      {
        id: 5,
        name: 'Utah',
        country: 'United States',
        image: utahImage
      }
    ];
    return {
      cities,
      currentImage: cities[0]
    }
  },
  methods: {
    setCurrentCity(newCity) {
      this.currentImage = newCity
    },
  }
}
</script>

<style scoped>
* {
  transition: .5s all;
}

.image-container {
  width: 12vw;
  min-width: 100px;
  height: 70vh;
  object-fit: cover;
  cursor: pointer;
}

.current-image-container {
  width: 40vw;
  min-width: 300px;
  height: 70vh;
  object-fit: cover;
  border: 1px solid rgb(172, 167, 167);
  box-shadow: 0 3px 10px #1e1d1d;
}

.custom-text {
  position: relative;
  top: -3rem;
  padding-left: 2vw;
  font-size: clamp(.9rem, 1.5vw, 1.5vw);
  font-weight: 900;
  text-shadow: 4px 5px 8px rgba(50, 50, 50, .5);
  opacity: 0;
}

.text-appear {
  opacity: 1 !important;
}
</style>
