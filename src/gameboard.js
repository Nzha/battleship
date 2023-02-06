// import Ship from "./ship";
const Ship = (length) => {
  let health = length;
  let sunk = false;
  const hit = function () {
    this.health -= 1;
    if (this.health <= 0) this.sunk = true;
  };
  return { length, health, sunk, hit };
};

const Gameboard = (row, col) => {
  const board = Array.from(Array(row), () => new Array(col));

  const placeShip = (ship, x, y, axis = 'horizontal') => {
    if (x < 0 || x > 10 || y < 0 || y > 10) return 'Move out of bounds';
    if (axis === 'horizontal') {
      for (let i = y; i < y + ship.length; i++) {
        if (y + ship.length > 10) return;
        board[x][i] = 1;
      }
    } else if (axis === 'vertical') {
      for (let j = x; j < x + ship.length; j++) {
        if (x + ship.length > 10) return;
        board[j][y] = 1;
      }
    }
  };

  return { board, placeShip };
};

const board = Gameboard(10, 10);
const ship = Ship(4);
board.placeShip(ship, 0, 0, 'vertical');

console.log(board.board);

export default Gameboard;
