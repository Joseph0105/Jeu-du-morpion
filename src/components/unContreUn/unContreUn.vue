<template>
  <div class="global-container">
    <h1>Le <span>MORPION</span></h1>

    <table>
      <tr v-for="(row, rowIndex) in 3" :key="'row-' + rowIndex">
        <td
          v-for="(col, colIndex) in 3"
          :class="cellClasses[`${rowIndex * 3 + colIndex}`]"
          @click="cellClicked(rowIndex * 3 + colIndex)"
          :key="'cell-' + (rowIndex * 3 + colIndex)"
        >
          {{ currentGame[rowIndex * 3 + colIndex] }}
        </td>
      </tr>
    </table>

    <p class="consigne">{{ consigne }}</p>
    <button class="reset" v-if="gameOver" @click="resetGame">Rejouer</button>
  </div>
</template>

<script>
export default {
  name: 'unContreUn',
  data() {
    return {
      currentGame: Array(9).fill(''),
      winningCombinations: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ],
      currentPlayer: 'X',
      player: 'X',
      consigne: 'Au tour de X',
      gameOver: false,
      resetBtn: null,
    };
  },
  methods: {
    cellClicked(cellIndex) {
      if (this.currentGame[cellIndex] === '' && !this.gameOver) {
        this.currentGame[cellIndex] = this.currentPlayer;
        const winner = this.checkWinner();
        if (winner !== null) {
          this.consigne = `Le joueur ${winner} a gagné`;
          this.gameOver = true;
        } else if (!this.currentGame.includes('')) {
          this.consigne = 'Match nul !';
          this.gameOver = true;
        } else {
          this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
          this.player = this.currentPlayer;
          this.consigne = `Au tour de ${this.currentPlayer}`;
        }
      }
    },

    checkWinner() {
      let winner = null;
      this.winningCombinations.forEach((combination) => {
        if (
          this.currentGame[combination[0]] !== '' &&
          this.currentGame[combination[0]] ===
            this.currentGame[combination[1]] &&
          this.currentGame[combination[1]] === this.currentGame[combination[2]]
        ) {
          winner = this.currentGame[combination[0]];
        }
      });
      return winner;
    },
    resetGame() {
      this.currentGame.fill('');
      this.gameOver = false;
      this.player = this.currentPlayer;
      this.consigne = `Au tour de ${this.player}`;
    },
  },
  computed: {
    cellClasses() {
      return this.currentGame.map((value) => (value !== '' ? value : ''));
    },
  },
};
</script>

<style lang="scss">
@import './style.scss';
</style>
