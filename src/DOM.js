import { game } from '.';

const displayGameboard = () => {
  const player1Board = game.playerBoard.board;
  const player2Board = game.computerBoard.board;
  const player1BoardDiv = document.querySelector('.player1-board');
  const player2BoardDiv = document.querySelector('.player2-board');

  function createPos(board, boardDiv, visible) {
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        const pos = document.createElement('div');
        pos.classList.add(`${boardDiv.className}`, `pos`);
        pos.setAttribute('data-coords', `[${i},${j}]`);
        if (visible && board[i][j]) pos.style.backgroundColor = '#935620';
        boardDiv.appendChild(pos);
      }
    }
  }

  createPos(player1Board, player1BoardDiv, true);
  createPos(player2Board, player2BoardDiv);
  playerAttacks();
};

const displayPlayerNames = ((player1 = 'Player', player2 = 'Computer') => {
  const player1Name = document.querySelector('.player1-name');
  const player2Name = document.querySelector('.player2-name');
  player1Name.textContent = player1;
  player2Name.textContent = player2;
})();

const playerAttacks = () => {
  const computerPos = document.querySelectorAll('.player2-board.pos');
  computerPos.forEach((computerPos) =>
    computerPos.addEventListener('click', playerRound)
  );

  function playerRound(e) {
    // Use JSON.parse to convert '[x, y]' from string to array
    let coords = JSON.parse(e.target.dataset.coords);
    let playerAttack = game.player.attack(coords);
    displayAttack(e, playerAttack);

    let computerAttack = game.computer.attack();
    displayAttack(e, computerAttack);
  }
};

const displayAttack = (e, attack) => {
  let coords = attack.slice(-5);
  let target = attack.includes('Player1')
    ? e.target
    : document.querySelector(`[data-coords="${coords}"]`);
  let color = attack.includes('hit') ? '#bc1f2a' : '#a8d9fa';
  target.style.backgroundColor = color;
};

export default displayGameboard;