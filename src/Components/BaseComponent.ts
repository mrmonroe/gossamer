export class BaseComponent {
  name: string;
  max: number;
  min: number;
  value: number;

  constructor(name: string, max: number, min: number, value: number) {
    this.name = name;
    this.max = max;
    this.min = min;
    this.value = value;
  }
  incValue(amount: number) {
    this.value = Math.min(this.value + amount, this.max);
  }

  decValue(amount: number) {
    this.value = Math.max(this.value - amount, this.min);
  }
}
