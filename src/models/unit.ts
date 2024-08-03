import Armour, { ArmourShape } from "./armour";
import { ModificationType, VehicleSize } from "./constants";
import {
  AppliedModification,
  costOfAppliedModification,
} from "./modifications";
import { EmptyMount, Mount } from "./mount";
import VehicleClass from "./vehicle-class";

export interface UnitShape {
  readonly vehicleClass: VehicleClass;
  readonly name: string;
  readonly size: VehicleSize;
  readonly discipline: number;
  readonly optics: number;
  readonly movement: number;
  readonly morale: number;
  readonly armour: ArmourShape;
  readonly hullPoints: number;
  readonly special: string[];
  readonly mounts: Mount[];
  readonly modifications: AppliedModification[];
}

class Unit implements UnitShape {
  readonly vehicleClass: VehicleClass;
  name: string;
  size: VehicleSize;
  discipline: number;
  optics: number;
  movement: number;
  morale: number;
  armour: Armour;
  hullPoints: number;
  special: string[];
  mounts: Mount[];
  modifications: AppliedModification[];

  static fromVehicleClass(vehicleClass: VehicleClass) {
    return new Unit(
      vehicleClass,
      vehicleClass.name,
      vehicleClass.size,
      vehicleClass.discipline,
      vehicleClass.optics,
      vehicleClass.movement,
      vehicleClass.morale,
      vehicleClass.armour,
      vehicleClass.hullPoints,
      vehicleClass.special,
      vehicleClass.mounts.map(
        (mountType, index) => new EmptyMount(mountType, index),
      ),
      [],
    );
  }

  static fromUnitShape(unit: UnitShape) {
    return new Unit(
      unit.vehicleClass,
      unit.name,
      unit.size,
      unit.discipline,
      unit.optics,
      unit.movement,
      unit.morale,
      Armour.fromArmourShape(unit.armour),
      unit.hullPoints,
      unit.special,
      unit.mounts,
      unit.modifications,
    );
  }

  static fromUnit(unit: Unit) {
    return new Unit(
      unit.vehicleClass,
      unit.name,
      unit.size,
      unit.discipline,
      unit.optics,
      unit.movement,
      unit.morale,
      Armour.fromArmourShape(unit.armour),
      unit.hullPoints,
      unit.special,
      unit.mounts.map((m) => Mount.fromMountShape(m)),
      [...unit.modifications],
    );
  }

  private constructor(
    vehicleClass: VehicleClass,
    name: string,
    size: VehicleSize,
    discipline: number,
    optics: number,
    movement: number,
    morale: number,
    armour: Armour,
    hullPoints: number,
    special: string[],
    mounts: Mount[],
    modifications: AppliedModification[],
  ) {
    this.vehicleClass = vehicleClass;
    this.name = name;
    this.size = size;
    this.discipline = discipline;
    this.optics = optics;
    this.movement = movement;
    this.morale = morale;
    this.armour = armour;
    this.hullPoints = hullPoints;
    this.special = structuredClone(special);
    this.mounts = mounts;
    this.modifications = modifications;
  }

  get cost() {
    return (
      this.vehicleClass.baseCost +
      this.totalWeaponCost() +
      this.totalUpgradesCost()
    );
  }

  get maxCost() {
    return this.vehicleClass.maxCost + this.totalCompromisesCost();
  }

  private totalWeaponCost() {
    return this.mounts
      .filter((w) => w !== null)
      .reduce((acc, cur) => acc + (cur.weapon?.cost || 0), 0);
  }

  private totalCompromisesCost() {
    return this.modifications
      .filter((m) => m.modification.type === ModificationType.Compromise)
      .reduce((acc, cur) => acc + costOfAppliedModification(this, cur), 0);
  }

  private totalUpgradesCost() {
    return this.modifications
      .filter((m) => m.modification.type === ModificationType.Upgrade)
      .reduce((acc, cur) => acc + costOfAppliedModification(this, cur), 0);
  }
}

export default Unit;
