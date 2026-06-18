import { TileType } from "../Tiles/TileDefs";

export class Path {
  startX: number;
  startY: number;
  maxSegments: number;
  maxSegmentLength: number;
  startDirection: string;
  lastDirection: string;
  constructor(
    startX: number,
    startY: number,
    maxSegments: number,
    maxSegmentLength: number,
    startDirection: string,
  ) {
    this.startX = startX;
    this.startY = startY;
    this.maxSegments = maxSegments;
    this.maxSegmentLength = maxSegmentLength;
    this.startDirection = startDirection;
    this.lastDirection = this.startDirection;
  }
  createPath(callback: Function) {
    console.log("Starting Road Creation at:", this.startX, this.startY);
    let end = this.buildSouthPath(
      this.startX,
      this.startY,
      this.maxSegmentLength,
      callback,
    );
    console.log("After South Path:", end);
    end = this.buildEastPath(end[0], end[1], this.maxSegmentLength, callback);
    console.log("After East Path:", end);
    end = this.buildNorthPath(end[0], end[1], this.maxSegmentLength, callback);
    console.log("After North Path:", end);
    end = this.buildWestPath(end[0], end[1], this.maxSegmentLength, callback);
    console.log("After West Path:", end);

    // TODO: Implement road creation logic
  }
  changePathDirection() {
    let dirArr = ["north", "south", "east", "west"];
    let newDirection = this.lastDirection;

    //avoid doublebacking
    if (this.lastDirection === "north") {
      // TODO: Implement road direction changing logic
      dirArr.splice(dirArr.indexOf("south"), 1);
      newDirection = dirArr[Math.floor(Math.random() * dirArr.length)];
    }
    if (this.lastDirection === "south") {
      // TODO: Implement road direction changing logic
      dirArr.splice(dirArr.indexOf("north"), 1);
      newDirection = dirArr[Math.floor(Math.random() * dirArr.length)];
    }
    if (this.lastDirection === "east") {
      // TODO: Implement road direction changing logic
      dirArr.splice(dirArr.indexOf("west"), 1);
      newDirection = dirArr[Math.floor(Math.random() * dirArr.length)];
    }
    if (this.lastDirection === "west") {
      // TODO: Implement road direction changing logic
      dirArr.splice(dirArr.indexOf("east"), 1);
      newDirection = dirArr[Math.floor(Math.random() * dirArr.length)];
    }
    this.lastDirection = newDirection;
    return newDirection;
  }
  buildWestPath(
    startX: number,
    startY: number,
    length: number,
    callback: Function,
  ) {
    // TODO: look at making a major road

    for (let i = 0; i < length; i++) {
      callback(startX + i, startY, TileType.ROAD);
      // this.tileMap[`${startX + i},${startY - 1}`] = new Tile(
      //   TileDefs[TileType.ROAD],
      // );
    }

    return [startX + length, startY];
  }
  buildEastPath(
    startX: number,
    startY: number,
    length: number,
    callback: Function,
  ) {
    // TODO: look at making a major road

    for (let i = 0; i < length; i++) {
      callback(startX - i, startY, TileType.ROAD);
    }
    return [startX - length, startY];
  }
  buildSouthPath(
    startX: number,
    startY: number,
    length: number,
    callback: Function,
  ) {
    // TODO: look at making a major road

    for (let i = 0; i < length; i++) {
      callback(startX, startY + i, TileType.ROAD);
    }
    return [startX, startY + length];
  }
  buildNorthPath(
    startX: number,
    startY: number,
    length: number,
    callback: Function,
  ) {
    // TODO: look at making a major road

    for (let i = 0; i < length; i++) {
      callback(startX, startY - i, TileType.ROAD);
    }
    return [startX, startY - length];
  }
}
