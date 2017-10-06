import Piece from './piece';
import Square from '../square';


export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let currentSquare = board.findPiece(this);
        let availableMoves = [];
        Bishop.moveDiagonally(currentSquare, availableMoves)
        return availableMoves;
    }



    static moveDiagonally(currentSquare, availableMoves) {
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                let rowDifference = Math.abs(i - currentSquare.row);
                let colDifference = Math.abs(j - currentSquare.col)
                if (currentSquare.row === i && currentSquare.col === j) {
                    continue;
                } else if (rowDifference === colDifference) {
                    availableMoves.push(new Square(i, j));
                    console.log(availableMoves);
                }
            }
        }
    }
}