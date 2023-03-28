<template>
  <div id="app">
    <router-link class="acceuil" v-if="$route.name !== 'homePage'" to="/"
      >Accueil</router-link
    >
    <component v-if="$route.name === 'homePage'" :is="'homePage'"></component>
    <component
      v-if="$route.name === 'unContreUn'"
      :is="'unContreUn'"
    ></component>
    <component
      v-if="$route.name === 'contreOrdinateur'"
      :is="'contreOrdinateur'"
    ></component>
    <router-view :name="$route.name"></router-view>
  </div>
</template>

<script>
import Ai from './components/js/ai';

import homePage from './components/homePage/homePage.vue';
import unContreUn from './components/unContreUn/unContreUn.vue';
import contreOrdinateur from './components/contreOrdinateur/contreOrdinateur.vue';
export default {
  name: 'App',
  components: {
    homePage,
    unContreUn,
    contreOrdinateur,
  },
  methods: {
    startGameAgainstComputer() {
      this.initBoard();
      this.currentPlayer = 'X'; // Par
      if (this.currentPlayer === 'O') {
        this.computerMove();
      }
    },
    computerMove() {
      const move = Ai.getBestMove(this.board);
      this.board[move.row][move.col] = this.currentPlayer;
      this.checkGameState();
    },
    cellClicked(row, col) {
      if (this.board[row][col] !== null) return;
      this.board[row][col] = this.currentPlayer;

      // Vérifiez l'état du jeu après le coup du joueur
      this.checkGameState();

      // Si le jeu n'est pas terminé, c'est au tour de l'ordinateur de jouer
      if (!this.gameOver) {
        this.computerMove();
      }
    },
  },
};
</script>

<style lang="scss">
@import '../src/components/scss/variables.scss';
body {
  padding: 0;
}
*,
::before,
::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
#app {
  font-family: $font-family;
  background: $gradient-color;
  padding: clamp(10px, 5vw, 10px) 10px 10px;
  .acceuil {
    background-color: $secondary-color;
    border: 1px solid $white-color;
    color: $white-color;

    padding: 1rem;
  }
}
</style>
