export class RandomWalker2D {
  x: number;
  y: number;
  history: [number, number][];
  constructor() {
    this.x = 0;
    this.y = 0;
    this.history = [[this.x, this.y]];
  }

  step() {
    // Generate a random integer between 0 and 3
    const direction = Math.floor(Math.random() * 4);

    switch (direction) {
      case 0:
        this.y = 0;
        this.x = 1;
        break; // Move Right
      case 1:
        this.y = 0;
        this.x = -1;
        break; // Move Left
      case 2:
        this.y = 1;
        this.x = 0;
        break; // Move Up
      case 3:
        this.y = -1;
        this.x = 0;
        break; // Move Down
    }

    this.history.push([this.x, this.y]);
  }

  walk(totalSteps: number) {
    for (let i = 0; i < totalSteps; i++) {
      this.step();
    }
    return this.history;
  }
}
