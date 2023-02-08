import Ship from './ship';

test('Ship length', () => {
  const ship = Ship('ship', 4);
  expect(ship.length).toBe(4);
});

test('Ship health', () => {
  const ship = Ship('ship', 2);
  expect(ship.health).toBe(2);
});

test('Ship hit', () => {
  const ship = Ship('ship', 2);
  ship.hit();
  expect(ship.health).toBe(1);
});

test('Ship sunk', () => {
  const ship = Ship('ship', 2);
  ship.hit();
  ship.hit();
  expect(ship.sunk).toBeTruthy();
});