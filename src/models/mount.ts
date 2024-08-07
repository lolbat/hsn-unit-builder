import { MountLocation } from "./constants";
import {
  compatibleWeaponTypes,
  isWeaponCompatibleWithMount,
  MountType,
} from "./mount-type";
import Weapon from "./weapon";
import { WeaponType } from "./weapon-type";

export interface MountSetShape {
  readonly mounts: MountShape[];
  readonly specialOverrides: string[];
}

export class MountSet implements MountSetShape {
  readonly mounts: Mount[];
  readonly specialOverrides: string[];

  constructor(mounts: Mount[], specialOverrides: string[] = []) {
    this.mounts = mounts.map((m) => Mount.fromMountShape(m, specialOverrides));
    this.specialOverrides = specialOverrides;
  }

  addMount(mount: Mount) {
    return new MountSet(
      [
        ...this.mounts,
        Mount.fromMountShape(mount, this.specialOverrides),
      ].toSorted((a, b) => a.id.localeCompare(b.id)),
      this.specialOverrides,
    );
  }

  removeMountById(mountId: string) {
    if (this.mounts.every((m) => m.id !== mountId)) {
      return this;
    }

    return new MountSet(
      this.mounts.filter((m) => m.id !== mountId),
      this.specialOverrides,
    );
  }

  removeMountFromLocation(location: MountLocation) {
    const mountsAtLocation = this.mounts
      .filter((m) => m.type.mountType === location)
      .toSorted((a, b) => b.id.localeCompare(a.id));

    if (mountsAtLocation.length === 0) {
      return this;
    }

    const idOfMountToRemove = mountsAtLocation[0].id;
    return this.removeMountById(idOfMountToRemove);
  }

  addSpecialOverride(override: string) {
    if (this.specialOverrides.includes(override)) {
      return this;
    }

    return new MountSet(
      this.mounts,
      [...new Set([...this.specialOverrides, override])].toSorted(),
    );
  }

  removeSpecialOverride(override: string) {
    if (!this.specialOverrides.includes(override)) {
      return this;
    }

    return new MountSet(
      this.mounts,
      this.specialOverrides.filter((so) => so !== override),
    );
  }
}

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

  static fromMountShape(
    mount: MountShape,
    specialOverrides: readonly string[] = [],
  ): FilledMount | EmptyMount {
    if (mount.weapon !== null) {
      return new FilledMount(
        mount.type,
        mount.id,
        Weapon.fromWeaponShape(mount.weapon),
        [...new Set([...mount.specialOverrides, ...specialOverrides])],
      );
    }
    return new EmptyMount(
      mount.type,
      mount.id,
      [...new Set([...mount.specialOverrides, ...specialOverrides])].toSorted(),
    );
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

    this.weapon = new Weapon(weapon.type, weapon.mount, [
      ...this.specialOverrides,
    ]);
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
