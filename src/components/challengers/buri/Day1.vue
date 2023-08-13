<template>
  <main class="cards-container">
    <template v-for="card of cards">
      <div :class="card.cardClass" @click="selectCard(card)">
        <h3>{{ card.title }}</h3>
      </div>
    </template>
  </main>
</template>

<script>
export default {
  name: 'Day1',
  data () {
    return {
      currentCard: 'tatacoa',
      cards: [
        {
          title: 'Desierto de la Tatacoa',
          image: 'tatacoa',
          cardClass: {
            'bg-tatacoa': true,
            card: true
          }
        },
        {
          title: 'Pico Cristobal Cólon',
          image: 'colon',
          cardClass: {
            'bg-colon': true,
            card: true
          }
        },
        {
          title: 'Sierra de la Macarena, Caño cristales',
          image: 'cristales',
          cardClass: {
            'bg-cristales': true,
            card: true
          }
        },
        {
          title: 'Piedra del Peñol',
          image: 'peñol',
          cardClass: {
            'bg-peñol': true,
            card: true
          }
        },
        {
          title: 'Isla de San Andrés',
          image: 'isla',
          cardClass: {
            'bg-isla': true,
            card: true
          }
        }
      ]
    }
  },
  mounted() {
    this.selectCard(this.cards[0]);
  },
  methods: {
    async selectCard(card) {
      const currentCard = this.cards.find(cardItem => cardItem.image === this.currentCard);
      await delete currentCard.cardClass['selected'];
      this.currentCard = card.image;
      card.cardClass['selected'] = true;
    }
  }
}
</script>

<style scoped>
.cards-container {
  display: flex;
  height: 100%;
  width: 90vw;
  padding: 40px 10px 0;
  gap: 20px;
  margin: 0 auto;

  transition: all .3s ease-in-out;
}

.card {
  background-size: cover;
  background-position: center;
  height: 80vh;
  border-radius: 50px;
  flex: 0.5;
  position: relative;

  cursor: pointer;
  -webkit-transition: all .5s ease-in;
  transition: all .5s ease-in;
}

.card h3 {
  position: absolute;
  bottom: 15px;
  left: 20px;

  color: white;
  font-size: 1.5rem;
  font-weight: 700;
  text-align: left;
  
  background-color: rgba(0, 0, 0, .5);
  padding: 0 20px;
  border-radius: 10px;
  opacity: 0;
}

.card.selected {
  flex: 5;
  cursor: default;
}

.card.selected h3{
  transition: opacity 0.3s ease-in 0.4s;
  opacity: 1;
}
</style>
