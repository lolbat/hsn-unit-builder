import Armour from './armour';
import Class from './class';
import Weapon from './weapon';

class Unit {
    readonly class: Class;
    name: string;
    cost: number;
    size: string;
    discipline: number;
    optics: number;
    movement: number;
    morale: number;
    armour: Armour;
    hullPoints: number;
    special: string[];
    weapons: Weapon[];
    modifications: string[];

    constructor(klass: Class) {
        this.class = klass;
        this.name = klass.name;
        this.cost = klass.baseCost;
        this.size = klass.size;
        this.discipline = klass.discipline;
        this.optics = klass.optics;
        this.movement = klass.movement;
        this.morale = klass.morale;
        this.armour = klass.armour;
        this.hullPoints = klass.hullPoints;
        this.special = structuredClone(klass.special);
        this.weapons = [];
        this.modifications = [];
    }
}

export default Unit;