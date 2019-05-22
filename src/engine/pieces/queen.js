import Piece from './piece';

export default class Queen extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let currentSquare = board.findPiece(this);
        let availableMoves = [];
        for(let i = 0; i < 8; i++){
            for(let j = 0; j < 8; j++){
                if(currentSquare.row === i && currentSquare.col === j){
                    continue;
                }
                if (i === currentSquare.row || j === currentSquare.col){
                    availableMoves.push(new Square (i, j))
                } 
            }
        }
        return availableMoves;
    }
    }
}
