import Gameboard from './gameboard';
import Ship from './ship';

describe('Place ship', () => {
  const myFirstBoard = Gameboard(10);

  test('Place ship horizontally on board', () => {
    const ship = Ship('ship', 2);
    myFirstBoard.placeShip(ship, [0, 0]);
    expect(myFirstBoard.board[0][0]).toBe('ship');
    expect(myFirstBoard.board[0][1]).toBe('ship');
    expect(myFirstBoard.board[0][2]).toBeUndefined();
  });

  test('Place ship vertically on board', () => {
    const ship = Ship('ship', 2);
    myFirstBoard.placeShip(ship, [2, 0], 'vertical');
    expect(myFirstBoard.board[2][0]).toBe('ship');
    expect(myFirstBoard.board[3][0]).toBe('ship');
    expect(myFirstBoard.board[4][0]).toBeUndefined();
  });

  test('Prevent ship from being place out of bounds', () => {
    const notExpected = [1];
    const ship = Ship('ship', 4);
    myFirstBoard.placeShip(ship, [0, 7]);
    expect(myFirstBoard.board).toEqual(expect.not.arrayContaining(notExpected));
  });

  test('Prevent ship from being place on another ship', () => {
    const ship = Ship('ship', 4);
    const ship2 = Ship('ship2', 2);
    myFirstBoard.placeShip(ship, [0, 0]);
    expect(myFirstBoard.placeShip(ship2, [0, 0])).toBe(
      'There is already a ship in this location'
    );
  });
});

describe('Receive attack', () => {
  const myFirstBoard = Gameboard(10);
  const patrol1 = Ship('patrol1', 2);

  it('Prevent a position from being shot twice', () => {
    myFirstBoard.receiveAttack([0, 0]);
    expect(myFirstBoard.receiveAttack([0, 0])).toBe('Position already shot');
  });

  it.skip('Hit ship', () => {
    myFirstBoard.placeShip(patrol1, [6, 0]);
    expect(myFirstBoard.receiveAttack([6, 0])).toBe('patrol1 hit');
    expect(myFirstBoard.receiveAttack([6, 1])).toBe('patrol1 hit');
  });

  it('Hit miss', () => {
    expect(myFirstBoard.receiveAttack([1, 1])).toBe('missed shot');
  });
});

