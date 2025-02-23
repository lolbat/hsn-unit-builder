import { WeaponCategory, WeaponName, WeaponWeightClass } from "../constants";
import WeaponType from "./weapon-type";

export const PulseLaser: WeaponType = {
  name: WeaponName.PulseLaser,
  weight: WeaponWeightClass.Heavy,
  category: WeaponCategory.Projectile,
  rating: 4,
  special: ["Flashburn", "Volley"],
  cost: 3,
};

export const BlastCannon: WeaponType = {
  name: WeaponName.BlastCannon,
  weight: WeaponWeightClass.Heavy,
  category: WeaponCategory.Projectile,
  rating: 8,
  special: ["Close Action"],
  cost: 3,
};

export const BattleCannon: WeaponType = {
  name: WeaponName.BattleCannon,
  weight: WeaponWeightClass.Heavy,
  category: WeaponCategory.Projectile,
  rating: 9,
  special: [],
  cost: 4,
};

export const HeavyRotorCannon: WeaponType = {
  name: WeaponName.HeavyRotorCannon,
  weight: WeaponWeightClass.Heavy,
  category: WeaponCategory.Projectile,
  rating: 7,
  special: ["Volley"],
  cost: 4,
};

export const HeavyCannon: WeaponType = {
  name: WeaponName.HeavyCannon,
  weight: WeaponWeightClass.Heavy,
  category: WeaponCategory.Projectile,
  rating: 10,
  special: ["Unstable"],
  cost: 4,
};

export const HeavyLaser: WeaponType = {
  name: WeaponName.HeavyLaser,
  weight: WeaponWeightClass.Heavy,
  category: WeaponCategory.Projectile,
  rating: 6,
  special: ["Anti-Air", "Flashburn"],
  cost: 4,
};

export const HeavyMissile: WeaponType = {
  name: WeaponName.HeavyMissile,
  weight: WeaponWeightClass.Heavy,
  category: WeaponCategory.Projectile,
  rating: 8,
  special: ["Anti-Air", "Guided Fire", "Unstable"],
  cost: 4,
};

export const MagmaBlaster: WeaponType = {
  name: WeaponName.MagmaBlaster,
  weight: WeaponWeightClass.Heavy,
  category: WeaponCategory.Projectile,
  rating: 6,
  special: ["Point Blank", "Annihilator"],
  cost: 4,
};

export const PlasmaCannon: WeaponType = {
  name: WeaponName.PlasmaCannon,
  weight: WeaponWeightClass.Heavy,
  category: WeaponCategory.Projectile,
  rating: 8,
  special: ["Close Action", "Plasma Burn"],
  cost: 4,
};

export const Screamer: WeaponType = {
  name: WeaponName.Screamer,
  weight: WeaponWeightClass.Heavy,
  category: WeaponCategory.Projectile,
  rating: 14,
  special: ["Assault", "No Pen", "Point Blank"],
  cost: 4,
};

export const HeavyWeaponTypes: ReadonlyArray<WeaponType> = [
  PulseLaser,
  BlastCannon,
  BattleCannon,
  HeavyRotorCannon,
  HeavyCannon,
  HeavyLaser,
  HeavyMissile,
  MagmaBlaster,
  PlasmaCannon,
  Screamer,
];