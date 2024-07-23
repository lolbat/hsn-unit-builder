import Armour from './armour';

class Class {
    readonly name: string;
    readonly baseCost: number;
    readonly maxCost: number;
    readonly size: string;
    readonly discipline: number;
    readonly optics: number;
    readonly movement: number;
    readonly morale: number;
    readonly armour: Armour;
    readonly hullPoints: number;
    readonly mounts: string[];
    readonly special: string[];

    constructor(
        name: string, 
        baseCost: number, 
        maxCost: number, 
        size: string, 
        discipline: number, 
        optics: number, 
        movement: number,
        morale: number,
        armour: Armour,
        hullPoints: number,
        mounts: string[],
        special: string[]
    ) {
        this.name = name;
        this.baseCost = baseCost;
        this.maxCost = maxCost;
        this.size = size;
        this.discipline = discipline;
        this.optics = optics;
        this.movement = movement;
        this.morale = morale;
        this.armour = armour;
        this.hullPoints = hullPoints;
        this.mounts = structuredClone(mounts);
        this.special = structuredClone(special);
    }
}

export default Class;