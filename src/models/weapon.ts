import { MountLocation } from "./constants";
import { WeaponType } from "./weapon-type";

export interface WeaponShape {
  readonly weaponType: WeaponType;
  readonly mount: MountLocation;
}

class Weapon implements WeaponShape {
  readonly weaponType: WeaponType;
  readonly mount: MountLocation;
  readonly special: string[];

  static fromWeaponShape(weapon: WeaponShape) {
    return new Weapon(weapon.weaponType, weapon.mount);
  }

  constructor(
    weaponType: WeaponType,
    mountType: MountLocation,
    special: readonly string[] | null = null,
  ) {
    this.weaponType = weaponType;
    this.mount = mountType;
    if (special === null) {
      this.special = weaponType.special;
    } else {
      this.special = [...weaponType.special, ...special].toSorted();
    }
  }

  get name() {
    return this.weaponType.name;
  }

  get rating() {
    return this.weaponType.rating;
  }

  get cost() {
    return this.weaponType.cost;
  }

  get type() {
    return this.weaponType;
  }
}

export default Weapon;
