import{Piece} from "./piece";
import { FENChar, Coords, Color} from "../model";

export class Queen extends Piece{
    protected override _FENChar: FENChar;
    protected override _direction: Coords[]=[
        {x:0, y:1},
        {x:1, y:1},
        {x:1, y:0},
        {x:1, y:-1},
        {x:0, y:-1},
        {x:-1, y:-1},
        {x:-1, y:0},
        {x:-1, y:1}
    ];

    constructor(private pieceColor: Color){
        super(pieceColor);
        this._FENChar = pieceColor === Color.White ? FENChar.WhiteQueen : FENChar.BlackQueen;
    }
}