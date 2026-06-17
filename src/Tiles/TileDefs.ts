import { Color } from "./Color";

export enum TileType {
  GRASS = "grass",
  WATER = "water",
  SWAMP = "swamp",
  ICE = "ice",
  UNKNOWN = "unknown",
  FOREST = "forest",
  PLAINS = "plains",
  TUNDRA = "tundra",
  DESERT = "desert",
  MUD = "mud",
}

export interface TileConfig {
  type: TileType;
  walkable: boolean;
  character: string;
  topColor: Color;
  bottomColor: Color;
}

export const TileDefs: Record<TileType, TileConfig> = {
  [TileType.GRASS]: {
    type: TileType.GRASS,
    walkable: true,
    character: ",",
    topColor: Color.GREEN,
    bottomColor: Color.DARKGREEN,
  },
  [TileType.WATER]: {
    type: TileType.WATER,
    walkable: false,
    character: "~",
    topColor: Color.LIGHTBLUE,
    bottomColor: Color.DARKBLUE,
  },
  [TileType.SWAMP]: {
    type: TileType.SWAMP,
    walkable: true,
    character: "~",
    topColor: Color.BROWN,
    bottomColor: Color.DARKGREEN,
  },
  [TileType.ICE]: {
    type: TileType.ICE,
    walkable: false,
    character: "^",
    topColor: Color.LIGHTBLUE,
    bottomColor: Color.DARKBLUE,
  },
  [TileType.FOREST]: {
    type: TileType.FOREST,
    walkable: false,
    character: "T",
    topColor: Color.GREEN,
    bottomColor: Color.DARKGREEN,
  },
  [TileType.PLAINS]: {
    type: TileType.PLAINS,
    walkable: true,
    character: ".",
    topColor: Color.LIGHTYELLOW,
    bottomColor: Color.DARKYELLOW,
  },
  [TileType.TUNDRA]: {
    type: TileType.TUNDRA,
    walkable: true,
    character: "*",
    topColor: Color.LIGHTGRAY,
    bottomColor: Color.DARKGRAY,
  },
  [TileType.DESERT]: {
    type: TileType.DESERT,
    walkable: true,
    character: "~",
    topColor: Color.LIGHTYELLOW,
    bottomColor: Color.DARKYELLOW,
  },
  [TileType.MUD]: {
    type: TileType.MUD,
    walkable: false,
    character: ",",
    topColor: Color.BROWN,
    bottomColor: Color.DARKBROWN,
  },
  [TileType.UNKNOWN]: {
    type: TileType.UNKNOWN,
    walkable: false,
    character: "?",
    topColor: Color.RED,
    bottomColor: Color.RED,
  },
};
