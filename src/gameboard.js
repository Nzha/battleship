// import Ship from "./ship";

const ships = [];

const Ship = (name, length) => {
  let health = length;
  let sunk = false;
  let player = name.includes('1') ? 'Player1' : 'Player2';
  const hit = function () {
    this.health -= 1;
    if (this.health <= 0) this.sunk = true;
  };
  return { name, length, health, player, sunk, hit };
};

const Player = (name) => {
  return { name };
};

const computer = (() => {
  const attack = (gameboard = myFirstBoard) => {
    let board = gameboard.board;

    // Save all positions not already attacked
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
    return gameboard.receiveAttack(randomPosNotShot);
  };
  return { attack };
})();

const Gameboard = (size) => {
  const board = Array.from(Array(size), () => new Array(size));

  const placeShip = (ship, coords, axis = 'horizontal') => {
    if (coords[0] < 0 || coords[0] > size || coords[1] < 0 || coords[1] > size)
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

const myFirstBoard = Gameboard(10);
const battleship1 = Ship('battleship1', 4);
const patrol2 = Ship('patrol2', 2);
ships.push(battleship1, patrol2);
myFirstBoard.placeShip(battleship1, [5, 0]);
myFirstBoard.placeShip(patrol2, [6, 0]);
console.log(myFirstBoard.receiveAttack([6, 0]));
console.log(myFirstBoard.receiveAttack([6, 1]));
// patrol2;
// ships;
// console.log(myFirstBoard.gameOver());

console.log(myFirstBoard.board);

console.log(computer.attack());

export default Gameboard;
