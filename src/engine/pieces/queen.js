import Piece from './piece';
import Square from '../square';
import Rook from './rook';
import Bishop from './bishop';

export default class Queen extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let currentSquare = board.findPiece(this);
        let availableMoves = [];
        Bishop.moveDiagonally(currentSquare, availableMoves);
        Rook.moveLaterally(currentSquare, availableMoves);
        
        return availableMoves;
    }
}

