import {
  MountLocation,
  VehicleSize,
  WeaponCategory,
  WeaponWeightClass,
} from "./constants";
import { WeaponType, WeaponTypes } from "./weapon-type";

export function compatibleWeaponTypes(
  mount: MountType,
): ReadonlyArray<WeaponType> {
  return WeaponTypes.filter(
    (w) =>
      mount.maximumWeaponWeight >= w.weight &&
      weaponCategoriesForMountLocations
        .get(mount.mountType)
        ?.includes(w.category),
  );
}

export interface MountType {
  readonly size: VehicleSize;
  readonly mountType: MountLocation;
  readonly maximumWeaponWeight: WeaponWeightClass;
}

const weaponCategoriesForMountLocations = new Map<
  MountLocation,
  WeaponCategory[]
>([
  [MountLocation.Arm, [WeaponCategory.CloseCombat, WeaponCategory.Projectile]],
  [MountLocation.BombBay, [WeaponCategory.Bomb]],
  [MountLocation.Fixed, [WeaponCategory.Projectile]],
  [MountLocation.Hull, [WeaponCategory.Projectile]],
  [MountLocation.MegaTurret, [WeaponCategory.Projectile]],
  [MountLocation.Sponsons, [WeaponCategory.Projectile]],
  [MountLocation.Turret, [WeaponCategory.Projectile]],
]);

export let LightTurretMount: MountType = {
  size: VehicleSize.Light,
  mountType: MountLocation.Turret,
  maximumWeaponWeight: WeaponWeightClass.Light,
};
export let LightFixedMount: MountType = {
  size: VehicleSize.Light,
  mountType: MountLocation.Fixed,
  maximumWeaponWeight: WeaponWeightClass.Heavy,
};
export let LightHullMount: MountType = {
  size: VehicleSize.Light,
  mountType: MountLocation.Hull,
  maximumWeaponWeight: WeaponWeightClass.Versatile,
};
export let LightSponsonsMount: MountType = {
  size: VehicleSize.Light,
  mountType: MountLocation.Sponsons,
  maximumWeaponWeight: WeaponWeightClass.Versatile,
};
export let LightArmMount: MountType = {
  size: VehicleSize.Light,
  mountType: MountLocation.Arm,
  maximumWeaponWeight: WeaponWeightClass.Light,
};
export let LightBombBayMount: MountType = {
  size: VehicleSize.Light,
  mountType: MountLocation.BombBay,
  maximumWeaponWeight: WeaponWeightClass.Light,
};

export let HeavyTurretMount: MountType = {
  size: VehicleSize.Heavy,
  mountType: MountLocation.Turret,
  maximumWeaponWeight: WeaponWeightClass.Heavy,
};
export let HeavyFixedMount: MountType = {
  size: VehicleSize.Heavy,
  mountType: MountLocation.Fixed,
  maximumWeaponWeight: WeaponWeightClass.Superheavy,
};
export let HeavyHullMount: MountType = {
  size: VehicleSize.Heavy,
  mountType: MountLocation.Hull,
  maximumWeaponWeight: WeaponWeightClass.Light,
};
export let HeavySponsonsMount: MountType = {
  size: VehicleSize.Heavy,
  mountType: MountLocation.Sponsons,
  maximumWeaponWeight: WeaponWeightClass.Light,
};
export let HeavyArmMount: MountType = {
  size: VehicleSize.Heavy,
  mountType: MountLocation.Arm,
  maximumWeaponWeight: WeaponWeightClass.Heavy,
};
export let HeavyBombBayMount: MountType = {
  size: VehicleSize.Heavy,
  mountType: MountLocation.BombBay,
  maximumWeaponWeight: WeaponWeightClass.Heavy,
};

export let SuperheavyTurretMount: MountType = {
  size: VehicleSize.Superheavy,
  mountType: MountLocation.Turret,
  maximumWeaponWeight: WeaponWeightClass.Superheavy,
};
export let SuperheavyFixedMount: MountType = {
  size: VehicleSize.Superheavy,
  mountType: MountLocation.Fixed,
  maximumWeaponWeight: WeaponWeightClass.Superheavy,
};
export let SuperheavyHullMount: MountType = {
  size: VehicleSize.Superheavy,
  mountType: MountLocation.Hull,
  maximumWeaponWeight: WeaponWeightClass.Heavy,
};
export let SuperheavySponsonsMount: MountType = {
  size: VehicleSize.Superheavy,
  mountType: MountLocation.Sponsons,
  maximumWeaponWeight: WeaponWeightClass.Heavy,
};
export let SuperheavyArmMount: MountType = {
  size: VehicleSize.Superheavy,
  mountType: MountLocation.Arm,
  maximumWeaponWeight: WeaponWeightClass.Superheavy,
};
export let SuperheavyBombBayMount: MountType = {
  size: VehicleSize.Superheavy,
  mountType: MountLocation.BombBay,
  maximumWeaponWeight: WeaponWeightClass.Superheavy,
};

export let BehemothTurretMount: MountType = {
  size: VehicleSize.Behemoth,
  mountType: MountLocation.Turret,
  maximumWeaponWeight: WeaponWeightClass.Superheavy,
};
export let BehemothFixedMount: MountType = {
  size: VehicleSize.Behemoth,
  mountType: MountLocation.Fixed,
  maximumWeaponWeight: WeaponWeightClass.Superheavy,
};
export let BehemothHullMount: MountType = {
  size: VehicleSize.Behemoth,
  mountType: MountLocation.Hull,
  maximumWeaponWeight: WeaponWeightClass.Superheavy,
};
export let BehemothSponsonsMount: MountType = {
  size: VehicleSize.Behemoth,
  mountType: MountLocation.Sponsons,
  maximumWeaponWeight: WeaponWeightClass.Superheavy,
};
export let BehemothArmMount: MountType = {
  size: VehicleSize.Behemoth,
  mountType: MountLocation.Arm,
  maximumWeaponWeight: WeaponWeightClass.Superheavy,
};
export let BehemothBombBayMount: MountType = {
  size: VehicleSize.Behemoth,
  mountType: MountLocation.BombBay,
  maximumWeaponWeight: WeaponWeightClass.Superheavy,
};
export let BehemothMegaTurretMount: MountType = {
  size: VehicleSize.Behemoth,
  mountType: MountLocation.MegaTurret,
  maximumWeaponWeight: WeaponWeightClass.Superheavy,
};
