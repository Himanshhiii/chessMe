import {Piece} from "./piece";
import { FENChar, Coords, Color} from "../model";

export class King extends Piece{
    private _hasMoved: boolean = false;
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

    constructor(private peiceColor: Color){
        super(peiceColor);
        this._FENChar = peiceColor === Color.White? FENChar.WhiteKing : FENChar.BlackKing;
    }

    public get hasMoved(): boolean{
        return this._hasMoved;
    }

    public set hasMoved(_){
        this._hasMoved = true;
    }
}