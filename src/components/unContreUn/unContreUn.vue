<template>
  <div class="global-container">
    <h1>Le <span>MORPION</span></h1>

    <table>
      <tr>
        <td class="0" data-cell-index="0" @click="cellClicked"></td>
        <td class="1" data-cell-index="1" @click="cellClicked"></td>
        <td class="2" data-cell-index="2" @click="cellClicked"></td>
      </tr>
      <tr>
        <td class="3" data-cell-index="3" @click="cellClicked"></td>
        <td class="4" data-cell-index="4" @click="cellClicked"></td>
        <td class="5" data-cell-index="5" @click="cellClicked"></td>
      </tr>
      <tr>
        <td class="6" data-cell-index="6" @click="cellClicked"></td>
        <td class="7" data-cell-index="7" @click="cellClicked"></td>
        <td class="8" data-cell-index="8" @click="cellClicked"></td>
      </tr>
    </table>

    <p class="consigne">{{ consigne }}</p>
    <button class="reset" v-if="gameOver" @click="resetGame">Rejouer</button>
  </div>
</template>

<script>
export default {
  name: 'PageJeu',
  data() {
    return {
      currentGame: ['', '', '', '', '', '', '', '', ''],
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
    cellClicked(event) {
      const resetBtn = document.querySelector('.reset');
      const cellIndex = event.target.getAttribute('data-cell-index');
      const cellContent = this.currentGame[cellIndex];
      if (cellContent === '') {
        this.currentGame[cellIndex] = this.currentPlayer;
        event.target.textContent = this.currentPlayer;
        if (this.currentPlayer === 'X') {
          event.target.style.color = 'crimson';
        } else {
          event.target.style.color = 'green';
        }
        const winner = this.checkWinner();
        if (winner !== null) {
          this.consigne = `Le joueur ${winner} a gagné`;
          if (resetBtn) {
            resetBtn.style.display = 'block';
          }
          this.gameOver = true;
        } else if (!this.currentGame.includes('')) {
          this.consigne = 'Match nul !';
          if (resetBtn) {
            resetBtn.style.display = 'block';
          }
          this.gameOver = true;
        }

        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
        this.player = this.currentPlayer;
        if (!this.gameOver) {
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
      const cells = document.querySelectorAll('td');
      this.currentGame = ['', '', '', '', '', '', '', '', ''];

      cells.forEach((cell) => {
        cell.textContent = '';
        cell.style.color = '';
      });

      this.gameOver = false;
      this.player.textContent = this.currentPlayer;
      this.consigne.textContent = `Au tour de ${this.player.textContent}`;
      this.resetBtn.style.display = 'none';
    },
  },
  mounted() {
    this.resetBtn = this.$el.querySelector('.reset');
    this.player = this.$el.querySelector('.player');
    this.consigne = this.$el.querySelector('.consigne');
  },
};
</script>

<style lang="scss">
@import './style.scss';
</style>
