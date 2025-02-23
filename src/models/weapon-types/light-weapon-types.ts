import { WeaponCategory, WeaponName, WeaponWeightClass } from "../constants";
import WeaponType from "./weapon-type";

export const Autogun: WeaponType = {
  name: WeaponName.Autogun,
  weight: WeaponWeightClass.Versatile,
  category: WeaponCategory.Projectile,
  rating: 5,
  special: ["No Pen", "Versatile"],
  cost: 1,
};

export const Autocannon: WeaponType = {
  name: WeaponName.Autocannon,
  weight: WeaponWeightClass.Versatile,
  category: WeaponCategory.Projectile,
  rating: 5,
  special: ["Versatile"],
  cost: 2,
};

export const Howler: WeaponType = {
  name: WeaponName.Howler,
  weight: WeaponWeightClass.Light,
  category: WeaponCategory.Projectile,
  rating: 7,
  special: ["Assault", "No Pen", "Point Blank"],
  cost: 2,
};

export const Laser: WeaponType = {
  name: WeaponName.Laser,
  weight: WeaponWeightClass.Light,
  category: WeaponCategory.Projectile,
  rating: 3,
  special: ["Anti-Air", "Flashburn"],
  cost: 2,
};

export const LightMissile: WeaponType = {
  name: WeaponName.LightMissile,
  weight: WeaponWeightClass.Light,
  category: WeaponCategory.Projectile,
  rating: 5,
  special: ["Anti-Air", "Guided Fire", "Unstable"],
  cost: 2,
};

export const PlasmaBlaster: WeaponType = {
  name: WeaponName.PlasmaBlaster,
  weight: WeaponWeightClass.Light,
  category: WeaponCategory.Projectile,
  rating: 5,
  special: ["Close Action", "Plasma Burn"],
  cost: 2,
};

export const RotorCannon: WeaponType = {
  name: WeaponName.RotorCannon,
  weight: WeaponWeightClass.Versatile,
  category: WeaponCategory.Projectile,
  rating: 5,
  special: ["Versatile", "Volley"],
  cost: 3,
};

export const LightCannon: WeaponType = {
  name: WeaponName.LightCannon,
  weight: WeaponWeightClass.Light,
  category: WeaponCategory.Projectile,
  rating: 7,
  special: [],
  cost: 3,
};

export const LightWeaponTypes: ReadonlyArray<WeaponType> = [
  Autogun,
  Autocannon,
  Howler,
  Laser,
  LightMissile,
  PlasmaBlaster,
  RotorCannon,
  LightCannon,
];