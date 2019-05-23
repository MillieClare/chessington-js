import Piece from './piece';
import Square from '../square';

export default class Knight extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let currentSquare = board.findPiece(this);
        let availableMoves = [];
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                let rowDifference = Math.abs(i - currentSquare.row);
                let colDifference = Math.abs(j - currentSquare.col)
                if (currentSquare.row === i && currentSquare.col === j) {
                    continue;
                } else if (rowDifference ===  1 && colDifference === 2 || rowDifference ===  2 && colDifference === 1) {
                    availableMoves.push(new Square(i, j));
                    console.log(availableMoves);
                }
            }
        }
        return availableMoves;
    }
}
