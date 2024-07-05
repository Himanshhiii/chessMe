import {Piece} from "./piece";
import { FENChar, Coords, Color} from "../model";

export class Pawn extends Piece{
    private _hasMoved: boolean = false;
    protected override _FENChar: FENChar;
    protected override _direction: Coords[]=[
       {x: 1, y: 0},
       {x: 1, y: 1}, 
       {x: 1, y: -1}, 
       {x: 2, y: 0}, 

    ];

    constructor(private pieceColor : Color){
        super(pieceColor);
        if(pieceColor===Color.Black){
            this.setBlackPawnDirection();
        }
        this._FENChar= pieceColor===Color.White? FENChar.WhitePawn: FENChar.BlackPawn;
    }

    private setBlackPawnDirection(): void{
        this._direction= this._direction.map(({x,y})=>({x: -1*x,y}));
    }

    public get hasMoved(): boolean{
        return this._hasMoved;
    }

    public set hasMoved(_){
        this._hasMoved = true;
        this._direction = [
            {x: 1, y: 0},
            {x: 1, y: 1}, 
            {x: 1, y: -1}, 
        ];

        if(this.pieceColor === Color.Black ) this.setBlackPawnDirection();
    }
}