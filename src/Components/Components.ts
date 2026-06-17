import { BaseComponent } from "./BaseComponent";

export class Health extends BaseComponent {
  constructor(value: number, max: number) {
    super("Health", max, 0, value);
  }
}
export class Attack extends BaseComponent {
  constructor(value: number, max: number) {
    super("Attack", max, 0, value);
  }
}
export class Defense extends BaseComponent {
  constructor(value: number, max: number) {
    super("Defense", max, 0, value);
  }
}
