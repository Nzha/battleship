import { randNewPos } from "./gameboard";

const Player = (name, ennemyGameboard) => {
  const attack = (coords = randNewPos(ennemyGameboard.board)) => {
    return `${name}: ${ennemyGameboard.receiveAttack(coords)} at [${coords}]`;
  };
  return { name, ennemyGameboard, attack };
};

export default Player;