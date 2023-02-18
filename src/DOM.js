import { game } from './game';

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
  createEventListeners();
};

const displayPlayerNames = ((player1 = 'Player', player2 = 'Computer') => {
  const player1Name = document.querySelector('.player1-name');
  const player2Name = document.querySelector('.player2-name');
  player1Name.textContent = player1;
  player2Name.textContent = player2;
})();

const createEventListeners = () => {
  const computerPos = document.querySelectorAll('.player2-board.pos');
  computerPos.forEach((computerPos) =>
    computerPos.addEventListener('click', handleAttacks)
  );
};

const handleAttacks = (e) => {
  // Use JSON.parse to convert '[x, y]' from string to array
  const coords = JSON.parse(e.target.dataset.coords);
  const playerAttack = game.player.attack(coords);
  displayAttack(e, playerAttack);

  if (playerAttack.includes('already shot')) return;
  if (playerAttack.includes('Game Over')) {
    removeAttackEvents();
    displayGameOver('Player');
    return;
  }

  const computerAttack = game.computer.attack();
  displayAttack(null, computerAttack);

  if (computerAttack.includes('Game Over')) {
    removeAttackEvents();
    displayGameOver('Computer');
    return;
  }
  console.log(game.computerBoard.board);
};

const displayAttack = (e, attack) => {
  console.log(attack);
  if (attack.includes('already shot')) return;
  const coords = attack.slice(-5);
  let target = attack.includes('Player1')
    ? e.target
    : document.querySelector(`[data-coords="${coords}"]`);
  let color = attack.includes('hit') ? '#bc1f2a' : '#a8d9fa';
  target.style.backgroundColor = color;
};

const removeAttackEvents = () => {
  const computerPositions = document.querySelectorAll('.player2-board.pos');
  computerPositions.forEach((computerPosition) =>
    computerPosition.removeEventListener('click', handleAttacks)
  );
};

const displayGameOver = (winner) => {
  const modal = document.querySelector('.modal');
  const modalContent = document.querySelector('.modal-content');
  modal.style.display = 'block';
  modalContent.textContent = `${winner} wins!`;
}

export default displayGameboard;
