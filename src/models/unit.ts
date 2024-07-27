import Armour from './armour';
import { Mount } from './mount';
import VehicleClass from './vehicle-class';
import Weapon from './weapon';

class Unit {
    readonly vehicleClass: VehicleClass;
    name: string;
    size: string;
    discipline: number;
    optics: number;
    movement: number;
    morale: number;
    armour: Armour;
    hullPoints: number;
    special: string[];
    weapons: Map<Mount, Weapon | null>;
    modifications: string[];

    constructor(vehicleClass: VehicleClass) {
        this.vehicleClass = vehicleClass;
        this.name = vehicleClass.name;
        this.size = vehicleClass.size;
        this.discipline = vehicleClass.discipline;
        this.optics = vehicleClass.optics;
        this.movement = vehicleClass.movement;
        this.morale = vehicleClass.morale;
        this.armour = vehicleClass.armour;
        this.hullPoints = vehicleClass.hullPoints;
        this.special = structuredClone(vehicleClass.special);
        this.weapons = new Map(vehicleClass.mounts.map((mountType, index) => [new Mount(mountType, index), null]));
        this.modifications = [];
    }

    get cost() {
        return this.vehicleClass.baseCost + [...this.weapons.values()].filter((w) => w !== null).reduceRight((acc, cur) => acc + cur.cost, 0)
    }
}

export default Unit;