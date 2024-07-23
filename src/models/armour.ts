class Armour {
    readonly front: number;
    readonly sides: number;
    readonly rear: number;

    constructor(front: number, sides: number, rear: number) {
        this.front = front;
        this.sides = sides;
        this.rear = rear;
    }

    setFrontArmour(frontArmour: number): Armour {
        return new Armour(frontArmour, this.sides, this.rear);
    }

    setSideArmour(sideArmour: number): Armour {
        return new Armour(this.front, sideArmour, this.rear);
    }

    setRearArmour(rearArmour: number): Armour {
        return new Armour(this.front, this.sides, rearArmour);
    }
}

export default Armour;