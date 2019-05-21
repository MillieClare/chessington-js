import Piece from './piece';
import Player from '../player';
import Square from '../square';
import { runInNewContext } from 'vm';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let currentSquare = board.findPiece(this);
        let availableMoves =[];

        let nextSquare = (this.player === Player.WHITE) ? new Square(currentSquare.row + 1, currentSquare.col) : new Square (currentSquare.row - 1 , currentSquare.col); 
        availableMoves.push(nextSquare)
        if (currentSquare.row === 1) {
            availableMoves.push(new Square(currentSquare.row+2, currentSquare.col));
        } else if (currentSquare.row === 6) {
            availableMoves.push(new Square(currentSquare.row-2, currentSquare.col));
        }

    
        return availableMoves;
    }
}
