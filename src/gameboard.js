// import Ship from "./ship";

const ships = [];

const Ship = (length, name) => {
  let health = length;
  let sunk = false;
  const hit = function () {
    this.health -= 1;
    if (this.health <= 0) this.sunk = true;
  };
  return { length, name, health, sunk, hit };
};

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
    if (board[coords[0]][coords[1]].includes('X'))
      return 'Position already shot';
    if (board[coords[0]][coords[1]] !== undefined) {
      const ship = ships.find((el) => el.name === board[coords[0]][coords[1]]);
      ship.hit();
      board[coords[0]][coords[1]] = `${ship.name}X`;
      return `${ship.name} hit`;
    } else {
      board[coords[0]][coords[1]] = 'X';
      return 'missed shot';
    }
  };

  return { board, placeShip, receiveAttack };
};

const myFirstBoard = Gameboard(10);
const battleship1 = Ship(4, 'battleship1');
const patrol1 = Ship(2, 'patrol1');
ships.push(battleship1, patrol1);
myFirstBoard.placeShip(battleship1, [5, 0]);
myFirstBoard.placeShip(patrol1, [6, 0]);
console.log(myFirstBoard.receiveAttack([6, 0]));
console.log(myFirstBoard.receiveAttack([6, 1]));
patrol1;

console.log(myFirstBoard.board);

export default Gameboard;
