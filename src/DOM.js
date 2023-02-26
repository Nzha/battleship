import { game, ships } from './game';

let shipIndex = 0;

const displayFlow = () => {
  const player1BoardDiv = document.querySelector('.player1-board');
  const player2BoardDiv = document.querySelector('.player2-board');

  showPlacingBoard();
  showPlacingShips();
  showGameboard(game.playerBoard.board, player1BoardDiv, true);
  showGameboard(game.computerBoard.board, player2BoardDiv);
  createEventListeners();
};

const showPlacingBoard = () => {
  const modal = document.querySelector('.modal-place-ships');
  const placeShipText = document.querySelector('.modal-place-ships-txt');
  const rotateBtn = document.querySelector('.modal-place-ships-axis-btn');
  const randBtn = document.querySelector('.modal-place-ships-random-btn');
  const clearBtn = document.querySelector('.modal-place-ships-clear-btn');
  const modalBoard = document.querySelector('.modal-place-ships-board');
  const playBtn = document.querySelector('.modal-place-ships-play-btn');

  const rotateHandler = () => {
    const axis = rotateBtn.classList.contains('horizontal')
      ? 'vertical'
      : 'horizontal';
    rotateBtn.classList.remove('horizontal', 'vertical');
    rotateBtn.classList.add(axis);
  };

  const randomHandler = () => {
    game.playerBoard.resetBoard(game.playerBoard.board);
    game.randPlayerShips();
    updatePlayerDisplayBoards();
    placeShipText.textContent = 'All ships placed';
  };

  const clearHandler = () => {
    game.playerBoard.resetBoard(game.playerBoard.board);
    updatePlayerDisplayBoards();
    shipIndex = 0;
    placeShipText.textContent = 'Place your Carrier';
    showPlacingShips();
  };

  const playHandler = () => {
    if (game.playerBoard.allShipsPlaced(game.playerBoard.board)) modal.remove();
  };

  rotateBtn.addEventListener('click', rotateHandler);
  randBtn.addEventListener('click', randomHandler);
  clearBtn.addEventListener('click', clearHandler);
  playBtn.addEventListener('click', playHandler);

  modal.style.display = 'block';
  showGameboard(game.playerBoard.board, modalBoard, true);
};

const showPlacingShips = (ship = ships[0]) => {
  const modalBoardPositions = document.querySelectorAll(
    '.modal-place-ships-board.pos'
  );
  const rotateBtn = document.querySelector('.modal-place-ships-axis-btn');
  const nextPositions = [];
  const length = ship.length;

  const highlightPositions = (e) => {
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
  };

  const resetHighlight = (e) => {
    if (e.target.classList.contains('occupied')) return;
    e.target.style.backgroundColor = '#269ad7';
    nextPositions.forEach((nextPos) => {
      if (nextPos.classList.contains('occupied')) return;
      nextPos.style.backgroundColor = '#269ad7';
    });
    nextPositions.length = 0;
  };

  modalBoardPositions.forEach((position) => {
    position.addEventListener('mouseover', highlightPositions);
    position.addEventListener('mouseout', resetHighlight);
    position.addEventListener('click', placeShipOnClick);
  });
};

const placeShipOnClick = (e) => {
  const modal = document.querySelector('.modal-place-ships');
  const placeShipText = document.querySelector('.modal-place-ships-txt');
  const rotateBtn = document.querySelector('.modal-place-ships-axis-btn');
  const coordsStr = e.target.dataset.coords;
  const coords = JSON.parse(coordsStr);
  const axis = rotateBtn.classList.contains('horizontal')
    ? 'horizontal'
    : 'vertical';
  const shipPlaced = game.playerBoard.placeShip(ships[shipIndex], coords, axis);
  const shipName = ships[shipIndex + 1].name;

  if (shipPlaced !== 'Placement successful') return;

  placeShipText.textContent = `Place your ${
    shipName.charAt(0).toUpperCase() + shipName.slice(1, -1)
  }`;

  updatePlayerDisplayBoards();

  if (shipIndex === 4) {
    modal.remove();
    return;
  }

  shipIndex += 1;
  showPlacingShips(ships[shipIndex]);
  console.log(game.playerBoard.board);
};

const updatePlayerDisplayBoards = () => {
  const playerModalBoard = document.querySelector('.modal-place-ships-board');
  const playerBoardDiv = document.querySelector('.player1-board');
  showGameboard(game.playerBoard.board, playerModalBoard, true);
  showGameboard(game.playerBoard.board, playerBoardDiv, true);
};

const showGameboard = (board, boardDiv, shipsVisible) => {
  // Reset board if one exists already
  if (boardDiv.hasChildNodes()) boardDiv.innerHTML = '';

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const pos = document.createElement('div');
      pos.classList.add(`${boardDiv.className}`, `pos`);
      pos.setAttribute('data-coords', `[${i},${j}]`);
      if (shipsVisible && board[i][j]) {
        pos.style.backgroundColor = '#935620';
        pos.classList.add('occupied');
      }
      boardDiv.appendChild(pos);
    }
  }
};

const showPlayerNames = ((player1 = 'Player', player2 = 'Computer') => {
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
    showGameOver('Player');
    return;
  }

  const computerAttack = game.computer.attack();
  displayAttack(null, computerAttack);

  if (computerAttack.includes('Game Over')) {
    removeAttackEvents();
    showGameOver('Computer');
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

const showGameOver = (winner) => {
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
