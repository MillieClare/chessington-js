import Piece from './piece';
import Square from '../square';


export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let currentSquare = board.findPiece(this);
        let availableMoves = [];
        Rook.moveLaterally(currentSquare, availableMoves);

        return availableMoves;
    }


    static moveLaterally(currentSquare, availableMoves) {
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                if (currentSquare.row === i && currentSquare.col === j) {
                    continue;
                }
                if (i === currentSquare.row || j === currentSquare.col) {
                    availableMoves.push(new Square(i, j))
                }
            }
        }
    }
}
