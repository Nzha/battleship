import Gameboard from './gameboard';
import Ship from './ship';

test('Place ship horizontally on board', () => {
  const myFirstBoard = Gameboard(10);
  const ship = Ship('ship', 2);
  myFirstBoard.placeShip(ship, [0, 0]);
  expect(myFirstBoard.board[0][0]).toBe('ship');
  expect(myFirstBoard.board[0][1]).toBe('ship');
  expect(myFirstBoard.board[0][2]).toBeUndefined();
});

test('Place ship vertically on board', () => {
  const myFirstBoard = Gameboard(10);
  const ship = Ship('ship', 2);
  myFirstBoard.placeShip(ship, [0, 0], 'vertical');
  expect(myFirstBoard.board[0][0]).toBe('ship');
  expect(myFirstBoard.board[1][0]).toBe('ship');
  expect(myFirstBoard.board[2][0]).toBeUndefined();
});

test('Prevent ship from being place out of bounds', () => {
  const notExpected = [1];
  const myFirstBoard = Gameboard(10);
  const ship = Ship('ship', 4);
  myFirstBoard.placeShip(ship, [0, 7]);
  expect(myFirstBoard.board).toEqual(expect.not.arrayContaining(notExpected));
});

test('Prevent ship from being place on another ship', () => {
  const myFirstBoard = Gameboard(10);
  const ship = Ship('ship', 4);
  const ship2 = Ship('ship2', 2);
  myFirstBoard.placeShip(ship, [0, 0]);
  expect(myFirstBoard.placeShip(ship2, [0, 0])).toBe(
    'There is already a ship in this location'
  );
});

test('Hit ship', () => {
  const myFirstBoard = Gameboard(10);
  const patrol1 = Ship('patrol1', 2);
  myFirstBoard.placeShip(patrol1, [6, 0]);
  expect(myFirstBoard.receiveAttack([6, 0])).toBe('patrol1 hit');
  expect(myFirstBoard.receiveAttack([6, 1])).toBe('patrol1 hit');
});

test('Hit miss', () => {
  const myFirstBoard = Gameboard(10);
  expect(myFirstBoard.receiveAttack([6, 1])).toBe('missed shot');
});

test('Prevent a position from being shot twice', () => {
  const myFirstBoard = Gameboard(10);
  const patrol1 = Ship('patrol1', 2);
  myFirstBoard.placeShip(patrol1, [6, 0]);
  myFirstBoard.receiveAttack([6, 0]);
  expect(myFirstBoard.receiveAttack([6, 0])).toBe('Position already shot');
});
