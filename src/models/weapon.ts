import { MountLocation } from "./constants";
import { WeaponType } from "./weapon-type";

export interface WeaponShape {
  readonly weaponType: WeaponType;
  readonly mount: MountLocation;
}

class Weapon implements WeaponShape {
  readonly weaponType: WeaponType;
  readonly mount: MountLocation;
  private _special: string[];

  static fromWeaponShape(weapon: WeaponShape) {
    return new Weapon(weapon.weaponType, weapon.mount);
  }

  constructor(weaponType: WeaponType, mountType: MountLocation) {
    this.weaponType = weaponType;
    this.mount = mountType;
    this._special = weaponType.special;
  }

  get name() {
    return this.weaponType.name;
  }

  get rating() {
    return this.weaponType.rating;
  }

  get special() {
    return this._special;
  }

  set special(special: string[]) {
    this._special = special;
  }

  get cost() {
    return this.weaponType.cost;
  }

  get type() {
    return this.weaponType;
  }
}

export default Weapon;
