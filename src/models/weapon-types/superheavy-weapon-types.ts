import { WeaponName, WeaponWeightClass, WeaponCategory } from "../constants";
import WeaponType from "./weapon-type";

export const SuperBlastCannon: WeaponType = {
  name: WeaponName.SuperBlastCannon,
  weight: WeaponWeightClass.Superheavy,
  category: WeaponCategory.Projectile,
  rating: 10,
  special: ["Close Action"],
  cost: 4,
};

export const SuperBattleCannon: WeaponType = {
  name: WeaponName.SuperBattleCannon,
  weight: WeaponWeightClass.Superheavy,
  category: WeaponCategory.Projectile,
  rating: 11,
  special: [],
  cost: 5,
};

export const MissileRack: WeaponType = {
  name: WeaponName.MissileRack,
  weight: WeaponWeightClass.Superheavy,
  category: WeaponCategory.Projectile,
  rating: 7,
  special: ["Anti-Air", "Guided Fire", "Unstable", "Volley"],
  cost: 5,
};

export const MagmaCannon: WeaponType = {
  name: WeaponName.MagmaCannon,
  weight: WeaponWeightClass.Superheavy,
  category: WeaponCategory.Projectile,
  rating: 10,
  special: ["Point Blank", "Annihilator"],
  cost: 6,
};

export const SuperPlasmaCannon: WeaponType = {
  name: WeaponName.SuperPlasmaCannon,
  weight: WeaponWeightClass.Superheavy,
  category: WeaponCategory.Projectile,
  rating: 10,
  special: ["Close Action", "Plasma Burn"],
  cost: 5,
};

export const SuperheavyLaser: WeaponType = {
  name: WeaponName.SuperheavyLaser,
  weight: WeaponWeightClass.Superheavy,
  category: WeaponCategory.Projectile,
  rating: 9,
  special: ["Anti-Air", "Flashburn", "Unstable"],
  cost: 6,
};

export const SuperheavyWeaponTypes: ReadonlyArray<WeaponType> = [
  SuperBlastCannon,
  SuperBattleCannon,
  MissileRack,
  MagmaCannon,
  SuperPlasmaCannon,
  SuperheavyLaser,
];