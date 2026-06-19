export class Building {
  x: number;
  y: number;
  width: number;
  height: number;

  constructor(x: number, y: number, width: number, height: number) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
  setToPath(pathTilePosition: { x: number; y: number }) {
    pathTilePosition.x = this.x - 1;
    pathTilePosition.y = this.y - 1;
  }
  updatePosition(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}
