import { randNewPos } from "./gameboard";

const Player = (name) => {
  const attack = (coords = randNewPos()) => {
    let gameboard = name === 'Computer' ? playerBoard : computerBoard;
    return gameboard.receiveAttack(coords);
  };
  return { name, attack };
};

export default Player;