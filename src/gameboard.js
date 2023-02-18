import { ships } from './game';

const Gameboard = (size = 10) => {
  const board = Array.from(Array(size), () => new Array(size));

  const placeShip = (ship, coords, axis = 'horizontal') => {
    // Place ship in random position if no coords
    if (!coords) {
      randPlaceShip(ship, randNewPos(board), randAxis());
    } else {
      if (
        coords[0] < 0 ||
        coords[0] > size ||
        coords[1] < 0 ||
        coords[1] > size
      )
        return 'Move out of bounds';
      if (axis === 'horizontal') {
        for (let i = coords[1]; i < coords[1] + ship.length; i++) {
          if (coords[1] + ship.length > size) return;
          if (board[coords[0]][i] !== undefined)
            return 'There is already a ship in this location';
          board[coords[0]][i] = ship.name;
        }
      } else if (axis === 'vertical') {
        for (let j = coords[0]; j < coords[0] + ship.length; j++) {
          if (coords[0] + ship.length > size) return;
          if (board[j][coords[1]] !== undefined)
            return 'There is already a ship in this location';
          board[j][coords[1]] = ship.name;
        }
      }
      return 'Placement successful';
    }
  };

  const randPlaceShip = (ship, coords, axis) => {
    let placementSuccessful = false;
    while (!placementSuccessful) {
      const result = placeShip(ship, coords, axis);
      if (result === 'Placement successful') {
        placementSuccessful = true;
      } else {
        coords = randNewPos(board);
      }
    }
  };

  const receiveAttack = (coords) => {
    const [x, y] = coords;
    const pos = board[x][y];

    if (pos && pos.includes('X')) return 'Position already shot';

    // Add 'X' to all positions shot
    if (pos) {
      const ship = ships.find((el) => el.name === pos);
      ship.hit();
      board[x][y] = `${ship.name}X`;
      if (gameOver()) return `${ship.name} hit. ${gameOver()}`;
      return `${ship.name} hit`;
    } else {
      board[x][y] = 'X';
      return 'missed shot';
    }
  };

  const gameOver = () => {
    const player1SunkCount = ships.filter(
      (el) => el.player === 'Player1' && el.sunk === true
    ).length;
    const player2SunkCount = ships.filter(
      (el) => el.player === 'Player2' && el.sunk === true
    ).length;
    const totalShips = ships.length;

    if (
      player1SunkCount === totalShips / 2 ||
      player2SunkCount === totalShips / 2
    ) {
      return 'Game Over';
    }
  };

  return { board, placeShip, receiveAttack, gameOver };
};

const randNewPos = (board) => {
  // Save all positions not already attacked
  if (!board) return 'no board found';
  let posNotShot = [];
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      let pos = board[i][j];
      if (!pos || (pos && !pos.includes('X'))) {
        posNotShot.push([i, j]);
      }
    }
  }
  // Randomly pick one and attack
  let randomIndex = Math.floor(Math.random() * posNotShot.length);
  let randomPosNotShot = posNotShot[randomIndex];
  return randomPosNotShot;
};

const randAxis = () => {
  const axis = ['horizontal', 'vertical'];
  let randomIndex = Math.floor(Math.random() * axis.length);
  return axis[randomIndex];
};

export { Gameboard as default, randNewPos };
