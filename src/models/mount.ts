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
  readonly fromModification: boolean;
  readonly key: string;
}

export abstract class Mount {
  abstract readonly type: MountType;
  abstract readonly id: string;
  abstract readonly empty: boolean;
  abstract readonly weapon: Weapon | null;
  abstract readonly specialOverrides: readonly string[];
  abstract readonly fromModification: boolean;
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
  readonly fromModification: boolean;

  constructor(
    type: MountType,
    id: string,
    weapon: Weapon,
    specialOverrides: readonly string[],
    fromModification: boolean = false,
  ) {
    super();
    if (!isWeaponCompatibleWithMount(weapon.type, type)) {
      throw new Error(`Incompatible weapon type: ${weapon.type.name}`);
    }
    this.type = type;
    this.id = id;
    this.specialOverrides = [...specialOverrides];
    this.fromModification = fromModification;

    let adjustedOverrides: string[];
    if (
      [
        "Annihilator",
        "Close Combat",
        "Flashburn",
        "Guided Fire",
        "Plasma Burn",
      ].some((s) => weapon.special.includes(s))
    ) {
      adjustedOverrides = this.specialOverrides.filter((s) => s !== "Inferno");
    } else {
      adjustedOverrides = [...this.specialOverrides];
    }

    this.weapon = new Weapon(weapon.type, weapon.mount, adjustedOverrides);
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

    return new FilledMount(
      this.type,
      this.id,
      weapon,
      this.specialOverrides,
      this.fromModification,
    );
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
      this.fromModification,
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
      this.fromModification,
    );
  }
}

export class EmptyMount extends Mount {
  readonly type: MountType;
  readonly id: string;
  readonly empty = true;
  readonly weapon = null;
  readonly specialOverrides: readonly string[];
  readonly fromModification: boolean;

  constructor(
    type: MountType,
    id: string,
    specialOverrides: readonly string[],
    fromModification: boolean = false,
  ) {
    super();
    this.type = type;
    this.id = id;
    this.specialOverrides = [...specialOverrides];
    this.fromModification = fromModification;
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
    return new FilledMount(
      this.type,
      this.id,
      weapon,
      this.specialOverrides,
      this.fromModification,
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

  addSpecialOverride(override: string): EmptyMount {
    if (this.specialOverrides.includes(override)) {
      return this;
    }
    return new EmptyMount(
      this.type,
      this.id,
      [...this.specialOverrides, override].toSorted(),
      this.fromModification,
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
      this.fromModification,
    );
  }
}
