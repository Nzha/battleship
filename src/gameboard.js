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

const Gameboard = (size) => {
  const board = Array.from(Array(size), () => new Array(size));

  const placeShip = (ship, coords, axis = 'horizontal') => {
    if (coords[0] < 0 || coords[0] > size || coords[1] < 0 || coords[1] > size)
      return 'Move out of bounds';
    if (axis === 'horizontal') {
      for (let i = coords[1]; i < coords[1] + ship.length; i++) {
        if (coords[1] + ship.length > size) return;
        if (board[coords[0]][i] === 1)
          return 'There is already a ship in this location';
        board[coords[0]][i] = 1;
      }
    } else if (axis === 'vertical') {
      for (let j = coords[0]; j < coords[0] + ship.length; j++) {
        if (coords[0] + ship.length > size) return;
        if (board[j][coords[1]] === 1)
          return 'There is already a ship in this location';
        board[j][coords[1]] = 1;
      }
    }
  };

  const receiveAttack = () => {};

  return { board, placeShip, receiveAttack };
};

const myFirstBoard = Gameboard(10);
const ship = Ship(4);
const ship2 = Ship(2);
myFirstBoard.placeShip(ship, [5, 0]);
myFirstBoard.placeShip(ship2, [6, 0]);

console.log(myFirstBoard.board);

export default Gameboard;
