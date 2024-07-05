import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChessBoard } from '../../logic/chess-board';
import { FENChar, Color, pieceImagePaths } from '../../logic/model';

@Component({
  selector: 'app-chess-board',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chess-board.component.html',
  styleUrls: ['./chess-board.component.css']
})
export class ChessBoardComponent {
  public pieceImagePaths = pieceImagePaths;
  
  private chessBoard = new ChessBoard();
  public chessBoardView : (FENChar | null)[][] = this.chessBoard.chessBoardView;
  public get playerColor(): Color{ return this.chessBoard.playerColor; };

  public isSqaureDark(x: number, y: number): boolean{
    return ChessBoard.isSquareDark(x, y);
  }
}
