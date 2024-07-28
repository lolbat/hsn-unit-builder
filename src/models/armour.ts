class Armour {
  readonly front: number;
  readonly sides: number | null;
  readonly rear: number | null;

  constructor(front: number, sides: number | null, rear: number | null) {
    this.front = front;
    this.sides = sides;
    this.rear = rear;
  }

  toDisplayFormat() {
    if (this.sides !== null) {
      return `${this.front}/${this.sides}/${this.rear}`;
    }
    if (this.rear !== null) {
      return `${this.front}/${this.rear}`;
    }
    return `${this.front}`;
  }
}

export default Armour;
