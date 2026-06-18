import type { Tile } from "../Tiles/Tile";
import { Settings } from "../Settings";
import type { ActorMap } from "../Maps/ActorMap";
export class CanvasManager {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  tileHeight: number;
  tileWidth: number;

  constructor(canvasId: string) {
    this.canvas = document.getElementById(canvasId) as HTMLCanvasElement;
    this.canvas.width = Settings.mapCols * Settings.tileWidth;
    this.canvas.height = Settings.mapRows * Settings.tileHeight;
    this.canvas.style.backgroundColor = "black";
    this.ctx = this.canvas.getContext("2d", {
      alpha: false,
      willReadFrequently: true,
    }) as CanvasRenderingContext2D;
    this.ctx.font = `${Settings.fontSize}px Courier monospace`;
    this.ctx.imageSmoothingEnabled = false;
    this.ctx.textAlign = "center";
    this.ctx.textBaseline = "middle";
    this.tileHeight = Settings.tileHeight;
    this.tileWidth = Settings.tileWidth;
  }

  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  drawRect(x: number, y: number, width: number, height: number, color: string) {
    this.ctx.fillStyle = color;
    this.ctx.fillRect(x, y, width, height);
  }
  drawText(
    x: number,
    y: number,
    text: string,
    topColor: string,
    bottomColor: string,
  ) {
    const charHeight = this.ctx.measureText(text).actualBoundingBoxDescent;
    const gradient = this.ctx.createLinearGradient(x, y, x, y + charHeight);
    gradient.addColorStop(0, "white");
    gradient.addColorStop(0.5, topColor);
    gradient.addColorStop(1, bottomColor);
    this.ctx.fillStyle = gradient;
    this.ctx.fillText(text, x, y + Settings.tileHeight / 2);
  }
  drawMap(tileMap: Record<string, Tile>) {
    this.clear();
    for (const [key, tile] of Object.entries(tileMap)) {
      const [col, row] = key.split(",").map(Number);
      const x = col * this.tileWidth + this.tileWidth / 2;
      const y = row * this.tileHeight + this.tileHeight / 2;
      // const pos = this.isoToScreen(col, row, this.ctx);

      this.drawText(x, y, tile.character, tile.topColor, tile.bottomColor);
    }
  }
  drawActors(actorMap: ActorMap) {
    for (const [key, actor] of actorMap.data.entries()) {
      const { x, y } = actor.position;
      this.drawText(
        x * this.tileWidth + this.tileWidth / 2,
        y * this.tileHeight + this.tileHeight / 2,
        actor.character,
        actor.topColor,
        actor.bottomColor,
      );
    }
  }
}
