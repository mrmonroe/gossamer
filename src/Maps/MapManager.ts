import { Tile } from "../Tiles/Tile";
import { TileDefs } from "../Tiles/TileDefs";
import { NoiseGenerator } from "./NoiseGenerator";
import { Settings } from "../Settings";
import { ActorMap } from "./ActorMap";

export class MapManager {
  tileMap: any;
  actorMap: any;
  width: number;
  height: number;
  noiseGenerator: NoiseGenerator;
  constructor() {
    this.tileMap = {};
    this.actorMap = new ActorMap();
    this.width = Settings.mapCols;
    this.height = Settings.mapRows;
    this.noiseGenerator = new NoiseGenerator();
  }
  generateMap() {
    // TODO: Implement random map generation
    for (let x = 0; x < this.width; x++) {
      for (let y = 0; y < this.height; y++) {
        // TODO: Generate a random tile and add it to the map
        let { elev, temp, moisture } = this.noiseGenerator.generateNoise(x, y);

        const tileType = this.noiseGenerator.determineTileType(
          elev,
          temp,
          moisture,
        );

        this.tileMap[`${x},${y}`] = new Tile(TileDefs[tileType]);
      }
    }
  }
  getTile(x: number, y: number): Tile | undefined {
    return this.tileMap[`${x},${y}`];
  }
  getFirstWalkableTile(): { x: number; y: number } | undefined {
    for (let i = 0; i < this.width; i++) {
      for (let j = 0; j < this.height; j++) {
        const tile = this.getTile(i, j);
        if (tile && tile.walkable) {
          return { x: i, y: j };
        }
      }
    }
    return undefined;
  }
}
