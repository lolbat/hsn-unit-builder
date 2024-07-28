import Armour from "./armour";
import { Modification } from "./modifications";
import { EmptyMount, Mount } from "./mount";
import VehicleClass from "./vehicle-class";

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
  mounts: Mount[];
  modifications: Modification[];

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
    this.mounts = vehicleClass.mounts.map(
      (mountType, index) => new EmptyMount(mountType, index),
    );
    this.modifications = [];
  }

  get cost() {
    return this.vehicleClass.baseCost + this.totalWeaponCost();
  }

  private totalWeaponCost() {
    return this.mounts
      .filter((w) => w !== null)
      .reduce((acc, cur) => acc + (cur.weapon?.cost || 0), 0);
  }
}

export default Unit;
