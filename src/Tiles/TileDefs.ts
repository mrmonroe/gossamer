import { Color, RGBA } from "./Color";

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
  ROAD = "road",
  PATH = "path",
  BUILDING = "building",
}

export interface TileConfig {
  type: TileType;
  walkable: boolean;
  character: string;
  topColor: Color;
  bottomColor: Color;
  bgColor: string;
}

export const TileDefs: Record<TileType, TileConfig> = {
  [TileType.GRASS]: {
    type: TileType.GRASS,
    walkable: true,
    character: ",",
    topColor: Color.GREEN,
    bottomColor: Color.DARKGREEN,
    bgColor: RGBA.GREEN,
  },
  [TileType.WATER]: {
    type: TileType.WATER,
    walkable: false,
    character: "~",
    topColor: Color.LIGHTBLUE,
    bottomColor: Color.DARKBLUE,
    bgColor: RGBA.BLUE,
  },
  [TileType.SWAMP]: {
    type: TileType.SWAMP,
    walkable: true,
    character: "~",
    topColor: Color.BROWN,
    bottomColor: Color.DARKGREEN,
    bgColor: RGBA.BROWN,
  },
  [TileType.ICE]: {
    type: TileType.ICE,
    walkable: false,
    character: "^",
    topColor: Color.LIGHTBLUE,
    bottomColor: Color.DARKBLUE,
    bgColor: RGBA.DARKBLUE,
  },
  [TileType.FOREST]: {
    type: TileType.FOREST,
    walkable: false,
    character: "T",
    topColor: Color.GREEN,
    bottomColor: Color.DARKGREEN,
    bgColor: RGBA.GREEN,
  },
  [TileType.PLAINS]: {
    type: TileType.PLAINS,
    walkable: true,
    character: ".",
    topColor: Color.LIGHTYELLOW,
    bottomColor: Color.DARKYELLOW,
    bgColor: RGBA.LIGHTYELLOW,
  },
  [TileType.TUNDRA]: {
    type: TileType.TUNDRA,
    walkable: true,
    character: "*",
    topColor: Color.LIGHTGRAY,
    bottomColor: Color.DARKGRAY,
    bgColor: RGBA.LIGHTBLUE,
  },
  [TileType.DESERT]: {
    type: TileType.DESERT,
    walkable: true,
    character: "~",
    topColor: Color.LIGHTYELLOW,
    bottomColor: Color.DARKYELLOW,
    bgColor: RGBA.LIGHTYELLOW,
  },
  [TileType.MUD]: {
    type: TileType.MUD,
    walkable: false,
    character: ",",
    topColor: Color.BROWN,
    bottomColor: Color.DARKBROWN,
    bgColor: RGBA.BROWN,
  },
  [TileType.ROAD]: {
    type: TileType.ROAD,
    walkable: true,
    character: "-",
    topColor: Color.LIGHTGRAY,
    bottomColor: Color.DARKGRAY,
    bgColor: RGBA.DARKGRAY,
  },
  [TileType.PATH]: {
    type: TileType.PATH,
    walkable: true,
    character: ":",
    topColor: Color.LIGHTBROWN,
    bottomColor: Color.DARKGRAY,
    bgColor: RGBA.DARKGRAY,
  },
  [TileType.BUILDING]: {
    type: TileType.BUILDING,
    walkable: false,
    character: "\u{2302}",
    topColor: Color.LIGHTBROWN,
    bottomColor: Color.DARKBROWN,
    bgColor: RGBA.BROWN,
  },

  [TileType.UNKNOWN]: {
    type: TileType.UNKNOWN,
    walkable: false,
    character: "?",
    topColor: Color.RED,
    bottomColor: Color.RED,
    bgColor: RGBA.RED,
  },
};
