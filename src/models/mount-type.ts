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

export const LightTurretMount: MountType = {
  size: VehicleSize.Light,
  mountType: MountLocation.Turret,
  maximumWeaponWeight: WeaponWeightClass.Light,
};
export const LightFixedMount: MountType = {
  size: VehicleSize.Light,
  mountType: MountLocation.Fixed,
  maximumWeaponWeight: WeaponWeightClass.Heavy,
};
export const LightHullMount: MountType = {
  size: VehicleSize.Light,
  mountType: MountLocation.Hull,
  maximumWeaponWeight: WeaponWeightClass.Versatile,
};
export const LightSponsonsMount: MountType = {
  size: VehicleSize.Light,
  mountType: MountLocation.Sponsons,
  maximumWeaponWeight: WeaponWeightClass.Versatile,
};
export const LightArmMount: MountType = {
  size: VehicleSize.Light,
  mountType: MountLocation.Arm,
  maximumWeaponWeight: WeaponWeightClass.Light,
};
export const LightBombBayMount: MountType = {
  size: VehicleSize.Light,
  mountType: MountLocation.BombBay,
  maximumWeaponWeight: WeaponWeightClass.Light,
};

export const HeavyTurretMount: MountType = {
  size: VehicleSize.Heavy,
  mountType: MountLocation.Turret,
  maximumWeaponWeight: WeaponWeightClass.Heavy,
};
export const HeavyFixedMount: MountType = {
  size: VehicleSize.Heavy,
  mountType: MountLocation.Fixed,
  maximumWeaponWeight: WeaponWeightClass.Superheavy,
};
export const HeavyHullMount: MountType = {
  size: VehicleSize.Heavy,
  mountType: MountLocation.Hull,
  maximumWeaponWeight: WeaponWeightClass.Light,
};
export const HeavySponsonsMount: MountType = {
  size: VehicleSize.Heavy,
  mountType: MountLocation.Sponsons,
  maximumWeaponWeight: WeaponWeightClass.Light,
};
export const HeavyArmMount: MountType = {
  size: VehicleSize.Heavy,
  mountType: MountLocation.Arm,
  maximumWeaponWeight: WeaponWeightClass.Heavy,
};
export const HeavyBombBayMount: MountType = {
  size: VehicleSize.Heavy,
  mountType: MountLocation.BombBay,
  maximumWeaponWeight: WeaponWeightClass.Heavy,
};

export const SuperheavyTurretMount: MountType = {
  size: VehicleSize.Superheavy,
  mountType: MountLocation.Turret,
  maximumWeaponWeight: WeaponWeightClass.Superheavy,
};
export const SuperheavyFixedMount: MountType = {
  size: VehicleSize.Superheavy,
  mountType: MountLocation.Fixed,
  maximumWeaponWeight: WeaponWeightClass.Superheavy,
};
export const SuperheavyHullMount: MountType = {
  size: VehicleSize.Superheavy,
  mountType: MountLocation.Hull,
  maximumWeaponWeight: WeaponWeightClass.Heavy,
};
export const SuperheavySponsonsMount: MountType = {
  size: VehicleSize.Superheavy,
  mountType: MountLocation.Sponsons,
  maximumWeaponWeight: WeaponWeightClass.Heavy,
};
export const SuperheavyArmMount: MountType = {
  size: VehicleSize.Superheavy,
  mountType: MountLocation.Arm,
  maximumWeaponWeight: WeaponWeightClass.Superheavy,
};
export const SuperheavyBombBayMount: MountType = {
  size: VehicleSize.Superheavy,
  mountType: MountLocation.BombBay,
  maximumWeaponWeight: WeaponWeightClass.Superheavy,
};

export const BehemothTurretMount: MountType = {
  size: VehicleSize.Behemoth,
  mountType: MountLocation.Turret,
  maximumWeaponWeight: WeaponWeightClass.Superheavy,
};
export const BehemothFixedMount: MountType = {
  size: VehicleSize.Behemoth,
  mountType: MountLocation.Fixed,
  maximumWeaponWeight: WeaponWeightClass.Superheavy,
};
export const BehemothHullMount: MountType = {
  size: VehicleSize.Behemoth,
  mountType: MountLocation.Hull,
  maximumWeaponWeight: WeaponWeightClass.Superheavy,
};
export const BehemothSponsonsMount: MountType = {
  size: VehicleSize.Behemoth,
  mountType: MountLocation.Sponsons,
  maximumWeaponWeight: WeaponWeightClass.Superheavy,
};
export const BehemothArmMount: MountType = {
  size: VehicleSize.Behemoth,
  mountType: MountLocation.Arm,
  maximumWeaponWeight: WeaponWeightClass.Superheavy,
};
export const BehemothBombBayMount: MountType = {
  size: VehicleSize.Behemoth,
  mountType: MountLocation.BombBay,
  maximumWeaponWeight: WeaponWeightClass.Superheavy,
};
export const BehemothMegaTurretMount: MountType = {
  size: VehicleSize.Behemoth,
  mountType: MountLocation.MegaTurret,
  maximumWeaponWeight: WeaponWeightClass.Superheavy,
};
