export class Tile {
  topColor: string;
  bottomColor: string;
  walkable: boolean;
  visited: boolean;
  character: string;

  constructor(TileDefs: any) {
    this.topColor = TileDefs.topColor;
    this.bottomColor = TileDefs.bottomColor;
    this.walkable = TileDefs.walkable;
    this.visited = false;
    this.character = TileDefs.character;
  }
}
