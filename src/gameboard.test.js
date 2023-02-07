import Gameboard from "./gameboard";
import Ship from './ship';

test('Place ship horizontally on board', () => {
  const myFirstBoard = Gameboard(10);
  const ship = Ship(2);
  myFirstBoard.placeShip(ship, [0, 0]);
  expect(myFirstBoard.board[0][0]).toBe(1);
  expect(myFirstBoard.board[0][1]).toBe(1);
  expect(myFirstBoard.board[0][2]).toBeUndefined();
});

test('Place ship vertically on board', () => {
  const myFirstBoard = Gameboard(10);
  const ship = Ship(2);
  myFirstBoard.placeShip(ship, [0, 0], 'vertical');
  expect(myFirstBoard.board[0][0]).toBe(1);
  expect(myFirstBoard.board[1][0]).toBe(1);
  expect(myFirstBoard.board[2][0]).toBeUndefined();
});

test('Prevent ship from being place out of bounds', () => {
  const notExpected = [1];
  const myFirstBoard = Gameboard(10);
  const ship = Ship(4);
  myFirstBoard.placeShip(ship, [0, 7]);
  expect(myFirstBoard.board).toEqual(
    expect.not.arrayContaining(notExpected),
  );
});

test('Prevent ship from being place on another ship', () => {
  const myFirstBoard = Gameboard(10);
  const ship = Ship(4);
  const ship2 = Ship(2);
  myFirstBoard.placeShip(ship, [0, 0]);
  expect(myFirstBoard.placeShip(ship2, [0, 0])).toBe('There is already a ship in this location')
});