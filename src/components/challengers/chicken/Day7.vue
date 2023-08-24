<template>
  <main class="h-screen w-full py-10 bg-gray-300">
    <h1 class="text-goat text-shadow">The GOATs!</h1>
    <section class="flex items-center justify-center">
      <div :class="expandMessi" class="text-shadow image-container cr7-image flex flex-col">
        <h1 class="text-7xl font-extrabold text-shadow">Cristiano Ronaldo</h1>
        <button @click="showInfo('cristiano+ronaldo')" class="custom-button">Show Information</button>
      </div>
      <div :class="expandCr7" class="image-container messi-image text-shadow flex flex-col">
        <h1 class="text-7xl font-extrabold">Lionel Messi</h1>
        <button @click="showInfo('lionel+messi')" class="custom-button">Show Information</button>
      </div>
    </section>
  </main>
</template>

<script>
import messiImage from '../../../assets/challenges/chicken/day7/messi.webp';
import cr7Image from '../../../assets/challenges/chicken/day7/cr7.webp';
export default {
  data() {
    return {
      images: {
        messi: messiImage,
        cr7: cr7Image
      },
    }
  },
  methods: {
    showInfo(player) {
      window.open(`https://www.google.com/search?&q=${player}`, '_blank')
    }
  }
}
</script>

<style scoped>
* {
  transition: .75s all;
  overflow-y: hidden;
}

.text-goat {
  z-index: 50;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 2.5rem;
  font-size: 5rem;
  font-weight: 900;
}

.text-shadow {
  text-shadow: 0 3px 6px rgba(50, 50, 50, .5);
}

.image-container {
  height: 96vh;
  min-height: 768px;
  object-fit: cover;
  width: 50%;
  filter: blur(.75px);
  display: flex;
  align-items: center;
  justify-content: center;
}

.cr7-image {
  background-image: url('../../../assets/challenges/chicken/day7/cr7.webp');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.messi-image {
  background-image: url('../../../assets/challenges/chicken/day7/messi.webp');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.custom-button {
  margin: 2rem;
  background-color: #7F1D1D;
  font-weight: 900;
  font-size: 2rem;
  padding: 1rem;
  border-radius: .5rem;
}

.custom-button:hover {
  background-color: rgba(50, 50, 50, .5);
  border: 1px solid white;
  color: white;
  text-shadow: 0 3px 6px rgba(50, 50, 50, .5);
}

.image-container:hover {
  width: 75%;
  background-color: rgba(168, 32, 32, 0.5);
  filter: blur(0) opacity(.9)
}
</style>