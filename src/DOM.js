import { game } from '.';

const gameboardDiv = () => {
  const player1Board = game.playerBoard.board;
  const player2Board = game.computerBoard.board;
  const player1BoardDiv = document.querySelector('.player1-board');
  const player2BoardDiv = document.querySelector('.player2-board');
  
  function createPos(board, boardDiv) {
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        const pos = document.createElement('div');
        pos.classList.add(`${boardDiv.className}`, `pos`);
        pos.setAttribute('data-coords', `[${i},${j}]`);
        boardDiv.appendChild(pos);
      }
    }
  }
  
  createPos(player1Board, player1BoardDiv);
  createPos(player2Board, player2BoardDiv);  
};

export default gameboardDiv;
