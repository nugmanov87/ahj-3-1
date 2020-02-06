import board from "./board";
import play from "./play";

const gamesBoard = new board(4);
gamesBoard.createBoard();
const game = new play(gamesBoard);
game.init();
