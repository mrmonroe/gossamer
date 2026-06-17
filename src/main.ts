import "./style.css";
import { Game } from "./Game";

const game = new Game();
game.init();

window.addEventListener("load", () => {
  console.log("Game initialized.");
});
window.addEventListener("keydown", (e) => {
  console.log(`Key pressed: ${e.key}`);
});
