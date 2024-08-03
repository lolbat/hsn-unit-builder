import {
  compatibleWeaponTypes,
  isWeaponCompatibleWithMount,
  MountType,
} from "./mount-type";
import Weapon from "./weapon";
import { WeaponType } from "./weapon-type";

export interface MountShape {
  readonly type: MountType;
  readonly id: string;
  readonly empty: boolean;
  readonly weapon: Weapon | null;
  readonly specialOverrides: readonly string[];
  readonly key: string;
}

export abstract class Mount {
  abstract readonly type: MountType;
  abstract readonly id: string;
  abstract readonly empty: boolean;
  abstract readonly weapon: Weapon | null;
  abstract readonly specialOverrides: readonly string[];
  abstract readonly key: string;
  abstract setWeapon(weapon: Weapon): FilledMount;
  abstract removeWeapon(): EmptyMount;
  abstract isWeaponCompatible(weaponType: WeaponType): boolean;
  abstract compatibleWeaponTypes(): readonly WeaponType[];
  abstract addSpecialOverride(override: string): FilledMount | EmptyMount;
  abstract removeSpecialOverride(override: string): FilledMount | EmptyMount;

  static fromMountShape(mount: MountShape): FilledMount | EmptyMount {
    if (mount.weapon !== null) {
      return new FilledMount(
        mount.type,
        mount.id,
        Weapon.fromWeaponShape(mount.weapon),
        mount.specialOverrides,
      );
    }
    return new EmptyMount(mount.type, mount.id, mount.specialOverrides);
  }
}

export class FilledMount extends Mount {
  readonly type: MountType;
  readonly id: string;
  readonly empty = false;
  readonly weapon: Weapon;
  readonly specialOverrides: readonly string[];

  constructor(
    type: MountType,
    id: string,
    weapon: Weapon,
    specialOverrides: readonly string[],
  ) {
    super();
    if (!isWeaponCompatibleWithMount(weapon.type, type)) {
      throw new Error(`Incompatible weapon type: ${weapon.type.name}`);
    }
    this.type = type;
    this.id = id;
    this.specialOverrides = [...specialOverrides];
    this.weapon = new Weapon(weapon.type, weapon.mount, this.specialOverrides);
  }

  get key() {
    let sizeSlug: string;
    if (this.type.size === null) {
      sizeSlug = "";
    } else {
      sizeSlug = `${this.type.size}-`;
    }
    return `${sizeSlug}${this.type.mountType}-${this.id}`;
  }

  setWeapon(weapon: Weapon) {
    if (!compatibleWeaponTypes(this.type).includes(weapon.type)) {
      throw new Error(`Incompatible weapon type: ${weapon.type.name}`);
    }

    return new FilledMount(this.type, this.id, weapon, this.specialOverrides);
  }

  removeWeapon() {
    return new EmptyMount(this.type, this.id, this.specialOverrides);
  }

  isWeaponCompatible(weaponType: WeaponType) {
    return isWeaponCompatibleWithMount(weaponType, this.type);
  }

  compatibleWeaponTypes() {
    return compatibleWeaponTypes(this.type);
  }

  addSpecialOverride(override: string): FilledMount {
    if (this.specialOverrides.includes(override)) {
      return this;
    }
    return new FilledMount(
      this.type,
      this.id,
      this.weapon,
      [...this.specialOverrides, override].toSorted(),
    );
  }

  removeSpecialOverride(override: string): FilledMount {
    if (!this.specialOverrides.includes(override)) {
      return this;
    }
    return new FilledMount(
      this.type,
      this.id,
      this.weapon,
      this.specialOverrides.filter((s) => s !== override),
    );
  }
}

export class EmptyMount extends Mount {
  readonly type: MountType;
  readonly id: string;
  readonly empty = true;
  readonly weapon = null;
  readonly specialOverrides: readonly string[];

  constructor(
    type: MountType,
    id: string,
    specialOverrides: readonly string[],
  ) {
    super();
    this.type = type;
    this.id = id;
    this.specialOverrides = [...specialOverrides];
  }

  get key() {
    let sizeSlug: string;
    if (this.type.size === null) {
      sizeSlug = "";
    } else {
      sizeSlug = `${this.type.size}-`;
    }
    return `${sizeSlug}${this.type.mountType}-${this.id}`;
  }

  setWeapon(weapon: Weapon) {
    if (!compatibleWeaponTypes(this.type).includes(weapon.type)) {
      throw new Error(`Incompatible weapon type: ${weapon.type.name}`);
    }
    return new FilledMount(this.type, this.id, weapon, this.specialOverrides);
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

  addSpecialOverride(override: string): EmptyMount {
    if (this.specialOverrides.includes(override)) {
      return this;
    }
    return new EmptyMount(
      this.type,
      this.id,
      [...this.specialOverrides, override].toSorted(),
    );
  }

  removeSpecialOverride(override: string): EmptyMount {
    if (!this.specialOverrides.includes(override)) {
      return this;
    }
    return new EmptyMount(
      this.type,
      this.id,
      this.specialOverrides.filter((s) => s !== override),
    );
  }
}
