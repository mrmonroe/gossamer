export class Player {
  position: { x: number; y: number };
  stats: { [key: string]: number };
  character: string;
  topColor: string;
  bottomColor: string;

  constructor() {
    this.position = { x: 0, y: 0 };
    this.stats = { health: 100 };
    this.character = "@";
    this.topColor = "white";
    this.bottomColor = "yellow";
  }
  updatePosition(x: number, y: number) {
    this.position = { x, y };
  }
}
