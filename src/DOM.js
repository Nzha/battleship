import { game } from './game';

const displayFlow = () => {
  const player1BoardDiv = document.querySelector('.player1-board');
  const player2BoardDiv = document.querySelector('.player2-board');

  displayPlacingBoard();
  displayPlacingShips();
  displayGameboard(game.playerBoard.board, player1BoardDiv, true);
  displayGameboard(game.computerBoard.board, player2BoardDiv);
  createEventListeners();
};

const displayPlacingBoard = () => {
  const modal = document.querySelector('.modal-place-ships');
  const modalBoard = document.querySelector('.modal-place-ships-board');
  const rotateBtn = document.querySelector('.modal-place-ships-axis-btn');
  const randBtn = document.querySelector('.modal-place-ships-random-btn');
  const clearBtn = document.querySelector('.modal-place-ships-clear-btn');
  const playBtn = document.querySelector('.modal-place-ships-play-btn');
  modal.style.display = 'block';

  rotateBtn.addEventListener('click', () => {
    const axis = rotateBtn.classList.contains('horizontal')
      ? 'vertical'
      : 'horizontal';
    rotateBtn.classList.remove('horizontal', 'vertical');
    rotateBtn.classList.add(axis);
  });

  randBtn.addEventListener('click', () => {
    game.playerBoard.resetBoard(game.playerBoard.board);
    game.randPlayerShips();
    updatePlayerDisplayBoards();
  });

  clearBtn.addEventListener('click', () => {
    game.playerBoard.resetBoard(game.playerBoard.board);
    updatePlayerDisplayBoards();
  });

  playBtn.addEventListener('click', () => {
    if (game.playerBoard.allShipsPlaced(game.playerBoard.board)) modal.remove();
  });

  displayGameboard(game.playerBoard.board, modalBoard, true);
};

const displayPlacingShips = () => {
  const modalPositions = document.querySelectorAll(
    '.modal-place-ships-board.pos'
  );
  const rotateBtn = document.querySelector('.modal-place-ships-axis-btn');
  const nextPositions = []

  let length = 5;

  modalPositions.forEach((modalPosition) => {
    modalPosition.addEventListener('mouseover', (e) => {
      const x = Number(e.target.dataset.coords[1]);
      const y = Number(e.target.dataset.coords[3]);
      const target = document.querySelector(
        `[data-coords="${e.target.dataset.coords}"]`
      );

      target.style.backgroundColor = '#935620';

      for (let i = 1; i < length; i++) {
        const nextX = rotateBtn.classList.contains('horizontal') ? x : x + i;
        const nextY = rotateBtn.classList.contains('vertical') ? y : y + i;
        const coords = JSON.stringify([nextX, nextY]);
        const nextPos = document.querySelector(`[data-coords="${coords}"]`);
        if (nextPos) {
          nextPositions.push(nextPos);
          nextPos.style.backgroundColor = '#935620';
        }
      }

    });
  });

  modalPositions.forEach((modalPosition) => {
    modalPosition.addEventListener('mouseout', (e) => {
      e.target.style.backgroundColor = '#269ad7';
      nextPositions.forEach((nextPos) => {
        nextPos.style.backgroundColor = '#269ad7';
      })
    });
    nextPositions.length = 0;
  });
};

const updatePlayerDisplayBoards = () => {
  const playerModalBoard = document.querySelector('.modal-place-ships-board');
  const playerBoardDiv = document.querySelector('.player1-board');
  displayGameboard(game.playerBoard.board, playerModalBoard, true);
  displayGameboard(game.playerBoard.board, playerBoardDiv, true);
};

const displayGameboard = (board, boardDiv, shipsVisible) => {
  // Reset board if one exists already
  if (boardDiv.hasChildNodes()) boardDiv.innerHTML = '';

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const pos = document.createElement('div');
      pos.classList.add(`${boardDiv.className}`, `pos`);
      pos.setAttribute('data-coords', `[${i},${j}]`);
      if (shipsVisible && board[i][j]) pos.style.backgroundColor = '#935620';
      boardDiv.appendChild(pos);
    }
  }
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
  const modal = document.querySelector('.modal-game-over');
  const modalTxt = document.querySelector('.modal-game-over-content-txt');
  const modalResetBtn = document.querySelector(
    '.modal-game-over-content-reset-btn'
  );
  modal.style.display = 'block';
  modalTxt.textContent = `${winner} wins!`;
  modalResetBtn.addEventListener('click', () => window.location.reload());
};

export default displayFlow;
