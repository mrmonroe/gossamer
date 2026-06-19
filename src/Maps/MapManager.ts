import { Tile } from "../Tiles/Tile";
import { TileDefs, TileType } from "../Tiles/TileDefs";
import { NoiseGenerator } from "./NoiseGenerator";
import { Settings } from "../Settings";
import { ActorMap } from "./ActorMap";
import { Path } from "./Path";
import type { Building } from "../Entities/Building";

export class MapManager {
  tileMap: any;
  actorMap: any;
  width: number;
  height: number;
  noiseGenerator: NoiseGenerator;
  roadTiles: { x: number; y: number }[];
  constructor() {
    this.tileMap = {};
    this.actorMap = new ActorMap();
    this.width = Settings.mapCols;
    this.height = Settings.mapRows;
    this.noiseGenerator = new NoiseGenerator();
    this.roadTiles = [];
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
    //let rndTile: { x: number; y: number } | undefined = this.getRandomTile();

    let path = new Path(10, 10, 20, 5, "south");
    path.createPath((x: number, y: number, tileType: TileType) => {
      this.setTile(x, y, tileType);
    });
  }

  getTile(x: number, y: number): Tile | undefined {
    return this.tileMap[`${x},${y}`];
  }
  getRandomTile(): { x: number; y: number } | undefined {
    const x = Math.floor(Math.random() * this.width) | 0;
    const y = Math.floor(Math.random() * this.height) | 0;
    return { x, y };
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
  getFirstRoadTile(): { x: number; y: number } | undefined {
    for (let i = 0; i < this.width; i++) {
      for (let j = 0; j < this.height; j++) {
        const tile = this.getTile(i, j);
        if (tile && tile.type === TileType.ROAD) {
          return { x: i, y: j };
        }
      }
    }
    return undefined;
  }
  getAllRoadTiles(): { x: number; y: number }[] {
    const roadTiles: { x: number; y: number }[] = [];
    for (let i = 0; i < this.width; i++) {
      for (let j = 0; j < this.height; j++) {
        const tile = this.getTile(i, j);
        if (tile && tile.type === TileType.ROAD) {
          roadTiles.push({ x: i, y: j });
        }
      }
    }
    this.roadTiles = roadTiles;
    return roadTiles;
  }
  getRandomRoadTile(): { x: number; y: number } | undefined {
      const roadTiles = this.roadTiles;
      if (roadTiles.length === 0) {
        return undefined;
      }
      const randomIndex = Math.floor(Math.random() * roadTiles.length);
      return roadTiles[randomIndex];
  }
  isOnMap(x: number, y: number): boolean {
    return x >= 0 && x < this.width && y >= 0 && y < this.height;
  }

  setTile(x: number, y: number, tileType: TileType) {
    this.tileMap[`${x},${y}`] = new Tile(TileDefs[tileType]);
  }
}
