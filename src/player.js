import { randNewPos } from "./gameboard";

const Player = (name, ennemyGameboard) => {
  const attack = (coords = randNewPos(ennemyGameboard.board)) => {
    return ennemyGameboard.receiveAttack(coords);
  };
  return { name, ennemyGameboard, attack };
};

export default Player;