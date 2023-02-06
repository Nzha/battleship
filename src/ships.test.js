import Ship from './ship';

test('Ship length', () => {
  const ship = Ship(4);
  expect(ship.length).toBe(4);
});

test('Ship health', () => {
  const ship = Ship(2);
  expect(ship.health).toBe(2);
});

test('Ship hit', () => {
  const ship = Ship(2);
  ship.hit();
  expect(ship.health).toBe(1);
});

test('Ship sunk', () => {
  const ship = Ship(2);
  ship.hit();
  ship.hit();
  expect(ship.sunk).toBeTruthy();
});