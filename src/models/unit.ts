import Armour, { ArmourShape } from "./armour";
import { ModificationType, VehicleSize } from "./constants";
import Modification, {
  AppliedModification,
  applyModificationToUnit,
  costOfAppliedModification,
  isModValidForUnit,
} from "./modifications";
import { EmptyMount, MountSet, MountSetShape } from "./mount";
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
  readonly mounts: MountSetShape;
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
  mounts: MountSet;
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
      [...vehicleClass.special],
      new MountSet(
        vehicleClass.mounts.map(
          (mountType, index) => new EmptyMount(mountType, `${index}`, []),
        ),
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
      [...unit.special],
      MountSet.fromMountSetShape(unit.mounts),
      [...unit.modifications],
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
      [...unit.special],
      unit.mounts.copy(),
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
    mounts: MountSet,
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
    this.special = special;
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
    return this.mounts.mounts
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

  applyModification(modification: Modification): Unit {
    if (!isModValidForUnit(this, modification)) {
      throw new Error(`Cannot apply modification ${modification.name} to unit`);
    }

    const updatedUnit = Unit.fromUnit(this);
    const existingModification = updatedUnit.modifications.find(
      (m) => m.modification.name === modification.name,
    );
    let quantity = 1;
    if (existingModification !== undefined) {
      updatedUnit.modifications = updatedUnit.modifications.filter(
        (m) => m.modification.name !== modification.name,
      );
      quantity = existingModification.quantity + 1;
    }

    updatedUnit.modifications.push({ modification, quantity });
    return applyModificationToUnit(updatedUnit, modification);
  }
}

export default Unit;
