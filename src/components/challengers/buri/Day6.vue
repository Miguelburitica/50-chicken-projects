<template>
<main class="scroll-box flex flex-col items-center pt-16 gap-6 bg-blue-300 w-screen">
  <h1 class="title text-8xl font-extrabold mb-6" >Scroll baby</h1>
  <article
    class="card w-full max-w-md h-60 bg-white shadow-lg rounded-md overflow-hidden text-fuchsia-600 p-4 flex items-center justify-center font-mono font-bold text-5xl"
    v-for="index in 18"
  >
    index: {{ index }}
  </article>
</main>
</template>

<script>
export default {
  name: "Day6",
  data() {
    return {};
  },
  methods: {
    appearedCards(event) {
      const cards = document.querySelectorAll(".card")
      const title = document.querySelector(".title")
      // if im in the top of the page show the title
      if (window.scrollY === 0) {
        title.classList.add("show")
      } else {
        title.classList.remove("show")
      }
      
      const windowHeight = window.innerHeight
      cards.forEach((card) => {
        const cardTop = card.getBoundingClientRect().top
        const cardBottom = card.getBoundingClientRect().bottom
        if (cardTop < windowHeight && cardBottom > 0) {
          card.classList.add("show")
        } else {
          card.classList.remove("show")
        }
      });
    }
  },
  computed: {},
  watch: {},
  mounted() {
    document.addEventListener("scroll", this.appearedCards)
    this.appearedCards()
  },
  created() {},
  destroyed() {},
  updated() {},
};

</script>

<style scoped>
.scroll-box .card:nth-child(even) {
  transform: translateX(400%);
  transition: transform 0.3s ease-in-out;
}

.scroll-box .card:nth-child(odd) {
  transform: translateX(-400%);
  transition: transform 0.3s ease-in-out;
}

.scroll-box .card.show {
  transform: translateX(0);
  transition: transform 0.3s ease-in-out;
}

.scroll-box .title {
  transform: translateY(-400%);
  transition: transform 0.3s ease-in-out;
}

.scroll-box .title.show {
  transform: translateY(0);
  transition: transform 0.3s ease-in-out;
}

</style>
