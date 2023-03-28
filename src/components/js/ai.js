const Ai = {
  getBestMove(flatBoard) {
    const availableMoves = [];

    for (let i = 0; i < flatBoard.length; i++) {
      if (flatBoard[i] === '') {
        availableMoves.push(i);
      }
    }

    const randomIndex = Math.floor(Math.random() * availableMoves.length);
    return availableMoves[randomIndex];
  },
};

export default Ai;
