let currentGame = ['', '', '', '', '', '', '', '', ''];

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const cells = document.querySelectorAll('td');
let player = document.querySelector('.player');
let currentPlayer = 'X';
const consigne = document.querySelector('.consigne');
const resetBtn = document.querySelector('.reset');
let numberOfGamesPlayed = 0;
let gameOver = false;

cells.forEach((cell) => {
  cell.addEventListener('click', function () {
    if (cell.textContent === '') {
      cell.textContent = currentPlayer;
      if (currentPlayer === 'X') {
        cell.style.color = 'crimson';
      } else {
        cell.style.color = 'green';
      }
      const cellIndex = cell.getAttribute('data-cell-index');
      currentGame[cell.dataset.cellIndex] = currentPlayer;
      const winner = checkWinner();
      if (winner !== null) {
        consigne.textContent = `Le joueur ${winner} à gagné`;

        resetBtn.style.display = 'block';
        gameOver = true;
      } else if (!currentGame.includes('')) {
        consigne.textContent = 'Match nul !';

        resetBtn.style.display = 'block';
        gameOver = true;
      }
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      player.textContent = currentPlayer;
      if (!gameOver) {
        consigne.textContent = `Au tour de ${currentPlayer}`;
      }
    }
  });
});

resetBtn.addEventListener('click', function (e) {
  resetGame();
  resetBtn.style.display = 'none';
});

function checkWinner() {
  let winner = null;
  winningCombinations.forEach((combination) => {
    if (
      currentGame[combination[0]] !== '' &&
      currentGame[combination[0]] === currentGame[combination[1]] &&
      currentGame[combination[1]] === currentGame[combination[2]]
    ) {
      winner = currentGame[combination[0]];
    }
  });
  console.log(winner);
  return winner;
}

function resetGame() {
  currentGame = ['', '', '', '', '', '', '', '', ''];

  cells.forEach((cell) => {
    cell.textContent = '';
    cell.style.color = '';
  });

  gameOver = false;
  player.textContent = currentPlayer;
  consigne.textContent = `Au tour de ${player.textContent}`;
}
