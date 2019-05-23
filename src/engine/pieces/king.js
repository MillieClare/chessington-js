import Piece from './piece';
import Square from '../square';

export default class King extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let currentSquare = board.findPiece(this);
        let availableMoves = [];
        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                if (0 === i && 0 === j) {
                    continue;
                } else {
                availableMoves.push(new Square(currentSquare.row + i, currentSquare.col +j));
                }
            }
        }
        console.log(availableMoves);
        return availableMoves
    }
}
