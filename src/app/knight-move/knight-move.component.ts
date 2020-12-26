import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'knight-move',
  templateUrl: './knight-move.component.html',
  styleUrls: ['./knight-move.component.css']
})
export class KnightMoveComponent implements OnInit {

  public size: number = 0;
  public xCoord: number = 0;
  public yCoord: number = 0;
  public chessBoard = [[]];

  constructor() { }

  ngOnInit(): void {
  }

  public isValidSize(size: any): boolean {
    return !isNaN(size) && typeof size === 'number' && size > 0;
  }

  public onSizeChange(value: string) {
    let val = parseInt(value);
    if(this.isValidSize(val) && val !== this.size) {
      this.size = val;
      this.createChess();
    } else {
      this.size = -1;
    }
  }

  public setCoordinates(value: string , coord: string): void{
    let val = parseInt(value);
    if (coord === 'X') this.xCoord = val;
    else if (coord === 'Y') this.yCoord = val;
    else return;

    if (this.isBothCoordinatesInvalid()) return;
    else {
      this.createChess();
      this.chessBoard[this.xCoord-1][this.yCoord-1] = 1;
      this.getPossibleMoves();
    }
  }

  public getPossibleMoves() {
    let knightMoves = [
        {x:2, y:-1},{x:2, y:1},{x:1, y:-2},{x:1, y:2},
        {x:-2, y:-1},{x:-2, y:1},{x:-1, y:-2},{x:-1, y:2}
    ]
    for(let m of knightMoves) {
        let row = this.xCoord + m.x;
        let col = this.yCoord + m.y;

        if (row > this.size || col > this.size || row < 1 || col < 1) continue;
        this.chessBoard[row-1][col-1] = 2;
    }
  }

  private createChess(): void {
    this.chessBoard = [[]];
    this.chessBoard = new Array(this.size).fill(0).map(() => new Array(this.size).fill(0));
    console.log(this.chessBoard);
  }

  private isBothCoordinatesInvalid(): boolean {
    return !this.isValidSize(this.xCoord) || !this.isValidSize(this.yCoord)
    || this.xCoord > this.size || this.yCoord > this.size;
  }

  private replaceAll(searchString, replaceString, str) {
    return str.split(searchString).join(replaceString);
  }
}
