import {
  compatibleWeaponTypes,
  isWeaponCompatibleWithMount,
  MountType,
} from "./mount-type";
import Weapon from "./weapon";
import { WeaponType } from "./weapon-type";

export interface MountShape {
  readonly type: MountType;
  readonly index: number;
  readonly empty: boolean;
  readonly weapon: Weapon | null;
  readonly specialOverrides: readonly string[];
  readonly key: string;
}

export abstract class Mount {
  abstract readonly type: MountType;
  abstract readonly index: number;
  abstract readonly empty: boolean;
  abstract readonly weapon: Weapon | null;
  abstract readonly specialOverrides: readonly string[];
  abstract readonly key: string;
  abstract setWeapon(weapon: Weapon): FilledMount;
  abstract removeWeapon(): EmptyMount;
  abstract isWeaponCompatible(weaponType: WeaponType): boolean;
  abstract compatibleWeaponTypes(): readonly WeaponType[];

  static fromMountShape(mount: MountShape): FilledMount | EmptyMount {
    if (mount.weapon !== null) {
      return new FilledMount(
        mount.type,
        mount.index,
        Weapon.fromWeaponShape(mount.weapon),
        mount.specialOverrides,
      );
    }
    return new EmptyMount(mount.type, mount.index, mount.specialOverrides);
  }
}

export class FilledMount extends Mount {
  readonly type: MountType;
  readonly index: number;
  readonly empty = false;
  readonly weapon: Weapon;
  readonly specialOverrides: readonly string[];

  constructor(
    type: MountType,
    index: number,
    weapon: Weapon,
    specialOverrides: readonly string[],
  ) {
    super();
    if (!isWeaponCompatibleWithMount(weapon.type, type)) {
      throw new Error(`Incompatible weapon type: ${weapon.type.name}`);
    }
    this.type = type;
    this.index = index;
    this.specialOverrides = [...specialOverrides];
    this.weapon = new Weapon(weapon.type, weapon.mount, this.specialOverrides);
  }

  get key() {
    return `${this.type.size}-${this.type.mountType}-${this.index}`;
  }

  setWeapon(weapon: Weapon) {
    if (!compatibleWeaponTypes(this.type).includes(weapon.type)) {
      throw new Error(`Incompatible weapon type: ${weapon.type.name}`);
    }

    return new FilledMount(
      this.type,
      this.index,
      weapon,
      this.specialOverrides,
    );
  }

  removeWeapon() {
    return new EmptyMount(this.type, this.index, this.specialOverrides);
  }

  isWeaponCompatible(weaponType: WeaponType) {
    return isWeaponCompatibleWithMount(weaponType, this.type);
  }

  compatibleWeaponTypes() {
    return compatibleWeaponTypes(this.type);
  }
}

export class EmptyMount extends Mount {
  readonly type: MountType;
  readonly index: number;
  readonly empty = true;
  readonly weapon = null;
  readonly specialOverrides: readonly string[];

  constructor(
    type: MountType,
    index: number,
    specialOverrides: readonly string[],
  ) {
    super();
    this.type = type;
    this.index = index;
    this.specialOverrides = [...specialOverrides];
  }

  get key() {
    return `${this.type.size}-${this.type.mountType}-${this.index}`;
  }

  setWeapon(weapon: Weapon) {
    if (!compatibleWeaponTypes(this.type).includes(weapon.type)) {
      throw new Error(`Incompatible weapon type: ${weapon.type.name}`);
    }
    return new FilledMount(
      this.type,
      this.index,
      weapon,
      this.specialOverrides,
    );
  }

  removeWeapon() {
    return this;
  }

  isWeaponCompatible(weaponType: WeaponType) {
    return compatibleWeaponTypes(this.type).includes(weaponType);
  }

  compatibleWeaponTypes() {
    return compatibleWeaponTypes(this.type);
  }
}
