import { createNoise2D } from "simplex-noise";
import alea from "alea";
import { TileType } from "../Tiles/TileDefs";

export class NoiseGenerator {
  alea: any;
  scale: number;
  noiseErosion: any;
  noiseTemperature: any;
  noiseMoisture: any;
  itemGenerator: any;
  constructor() {
    this.alea = alea(Date.now().toString());
    this.noiseErosion = createNoise2D(this.alea);
    this.noiseTemperature = createNoise2D(this.alea);
    this.noiseMoisture = createNoise2D(this.alea);

    this.scale = 0.05;
  }
  generateNoise(x: number, y: number) {
    const e = (this.noiseErosion(x * this.scale, y * this.scale) + 1) / 2;
    const t = (this.noiseTemperature(x * this.scale, y * this.scale) + 1) / 2;
    const m = (this.noiseMoisture(x * this.scale, y * this.scale) + 1) / 2;

    return { elev: e, temp: t, moisture: m };
  }
  determineTileType(erosion: number, temp: number, moisture: number): TileType {
    let erosionType;
    let tempType;
    let moistureType;
    //console.log(erosion, temp, moisture);
    if (erosion > 0.5) {
      erosionType = "hard";
    } else if (erosion < 0.75 && erosion > 0.25) {
      erosionType = "medium";
    } else if (erosion < 0.25) {
      erosionType = "soft";
    }
    if (temp > 0.75) {
      tempType = "hot";
    } else if (temp < 0.75 && temp > 0.25) {
      tempType = "warm";
    } else if (temp < 0.25) {
      tempType = "cold";
    }
    if (moisture > 0.75) {
      moistureType = "wet";
    } else if (moisture < 0.75 && moisture > 0.25) {
      moistureType = "humid";
    } else if (moisture < 0.25) {
      moistureType = "dry";
    }

    if (
      erosionType === "hard" &&
      tempType === "hot" &&
      moistureType === "wet"
    ) {
      return TileType.MUD;
    }
    if (
      erosionType === "soft" &&
      tempType === "cold" &&
      moistureType === "dry"
    ) {
      return TileType.TUNDRA;
    }
    if (
      erosionType === "medium" &&
      tempType === "warm" &&
      moistureType === "humid"
    ) {
      return TileType.FOREST;
    }
    if (
      erosionType === "soft" &&
      tempType === "warm" &&
      moistureType === "wet"
    ) {
      return TileType.PLAINS;
    }
    if (
      erosionType === "medium" &&
      tempType === "cold" &&
      moistureType === "wet"
    ) {
      return TileType.SWAMP;
    }
    if (
      erosionType === "hard" &&
      tempType === "cold" &&
      moistureType === "wet"
    ) {
      return TileType.ICE;
    }
    if (
      erosionType === "hard" &&
      tempType === "hot" &&
      moistureType === "dry"
    ) {
      return TileType.DESERT;
    }
    return TileType.GRASS;

    // if (erosion > 0.5) {
    //   return TileType.GRASS;
    // } else if (temp > 0.5) {
    //   return TileType.WATER;
    // } else if (moisture < 0.5) {
    //   return TileType.SWAMP;
    // } else if (erosion < 0.5) {
    //   return TileType.MOUNTAIN;
    // }
    // return TileType.UNKNOWN;
  }
}
