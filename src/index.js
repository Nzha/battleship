import './style.css';
import Player from './player';
import Gameboard from './gameboard';
import Ship, { ships } from './ship';

const gameLoop = () => {
  const player = Player('Player1');
  const computer = Player('Player2');

  const playerBoard = Gameboard();
  const computerBoard = Gameboard();

  const carrier1 = Ship('carrier1', 5);
  const battleship1 = Ship('battleship1', 4);
  const destroyer1 = Ship('destroyer1', 3);
  const submarine1 = Ship('submarine1', 3);
  const patrol1 = Ship('patrol1', 2);

  const carrier2 = Ship('carrier2', 5);
  const battleship2 = Ship('battleship2', 4);
  const destroyer2 = Ship('destroyer2', 3);
  const submarine2 = Ship('submarine2', 3);
  const patrol2 = Ship('patrol2', 2);

  ships.push(
    carrier1,
    battleship1,
    destroyer1,
    submarine1,
    patrol1,
    carrier2,
    battleship2,
    destroyer2,
    submarine2,
    patrol2
  );

  const playerShips = ships.filter((ship) => ship.player === 'Player1');
  playerShips.forEach((ship) => {
    playerBoard.placeShip(ship);
  });

  const computerShips = ships.filter((ship) => ship.player === 'Player2');
  computerShips.forEach((ship) => {
    computerBoard.placeShip(ship);
  });

  console.log(playerBoard.board);
  console.log(computerBoard.board);
}

gameLoop();
