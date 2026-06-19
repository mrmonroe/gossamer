import type { TileType } from "./TileDefs";

export class Tile {
  topColor: string;
  bottomColor: string;
  walkable: boolean;
  visited: boolean;
  character: string;
  type: TileType;
  bgColor: string;

  constructor(TileDefs: any) {
    this.type = TileDefs.type;
    this.topColor = TileDefs.topColor;
    this.bottomColor = TileDefs.bottomColor;
    this.bgColor = TileDefs.bgColor;
    this.walkable = TileDefs.walkable;
    this.visited = false;
    this.character = TileDefs.character;
  }
}
