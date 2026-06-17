import { Health, Attack, Defense } from "../Components/Components";

export class Player {
  position: { x: number; y: number };
  stats: { [key: string]: number };
  character: string;
  topColor: string;
  bottomColor: string;
  health: Health;
  attack: Attack;
  defense: Defense;

  constructor() {
    this.position = { x: 0, y: 0 };
    this.stats = { health: 100 };
    this.character = "@";
    this.topColor = "white";
    this.bottomColor = "yellow";
    this.health = new Health(100, 100);
    this.attack = new Attack(10, 10);
    this.defense = new Defense(5, 5);
  }
  updatePosition(x: number, y: number) {
    this.position = { x, y };
  }
}
