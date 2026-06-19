import { CanvasManager } from "./Display/CanvasManager";
import { MapManager } from "./Maps/MapManager";
import { Player } from "./Entities/Player";

// import { Settings } from "./Settings";

const allowedMovementKeys = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
const directions: any = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 },
};

export class Game {
  canvas: CanvasManager;
  map: MapManager;
  player: Player;

  constructor() {
    this.canvas = new CanvasManager("gameCanvas");
    this.map = new MapManager();
    this.player = new Player();

    console.log(this.player);
  }
  init() {
    this.map.generateMap();
    this.canvas.drawMap(this.map.tileMap);
    this.map.actorMap.addActor("player", this.player);
    let firstRoadTile = this.map.getFirstRoadTile();
    this.player.position = firstRoadTile || { x: 0, y: 0 };
    console.log(this.player);
    this.canvas.drawActors(this.map.actorMap);
    window.addEventListener("keydown", this.handleKeyDown.bind(this));
  }

  handleKeyDown(e: KeyboardEvent) {
    e.preventDefault();
    if (allowedMovementKeys.includes(e.key)) {
      this.movementHandler(e);
    }
    this.render();
  }
  movementHandler(e: KeyboardEvent) {
    e.preventDefault();
    if (allowedMovementKeys.includes(e.key)) {
      let move = directions[e.key];
      let nextX = this.player.position.x + move.x;
      let nextY = this.player.position.y + move.y;
      let nextTile = this.map.getTile(nextX, nextY);
      if (!nextTile || !nextTile.walkable) {
        return false;
      } else {
        this.player.position.x = nextX;
        this.player.position.y = nextY;
      }
    }
  }
  render() {
    this.canvas.drawMap(this.map.tileMap);
    this.canvas.drawActors(this.map.actorMap);
  }

  //   handleKeyUp(e: KeyboardEvent) {
  //     e.preventDefault();
  //     const index = activeKeys.indexOf(e.key);
  //     if (index !== -1) {
  //       activeKeys.splice(index, 1);
  //     }
  //   }
}
