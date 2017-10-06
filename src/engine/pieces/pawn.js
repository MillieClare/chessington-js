import Piece from './piece';
import Player from '../player';
import Square from '../square';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let currentSquare = board.findPiece(this);
        let availableMoves =[];
        if (currentSquare.row === 1) {
            availableMoves.push(new Square(currentSquare.row+2, currentSquare.col));
            availableMoves.push(new Square(currentSquare.row+1, currentSquare.col));
        } else if (currentSquare.row === 6) {
            availableMoves.push(new Square(currentSquare.row-2, currentSquare.col));
            availableMoves.push(new Square(currentSquare.row-1, currentSquare.col));
        } else if (this.player === Player.WHITE) {
            availableMoves.push(new Square(currentSquare.row+1, currentSquare.col));
        } else (availableMoves.push(new Square(currentSquare.row-1, currentSquare.col)));


        //(this.player === Player.WHITE) ? currentSquare.row++ : currentSquare.row--; 
        return availableMoves;
    }
}
