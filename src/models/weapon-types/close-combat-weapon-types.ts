import { WeaponName, WeaponWeightClass, WeaponCategory } from "../constants";
import WeaponType from "./weapon-type";

export const Blade: WeaponType = {
  name: WeaponName.Blade,
  weight: WeaponWeightClass.Light,
  category: WeaponCategory.CloseCombat,
  rating: 6,
  special: ["Close Combat"],
  cost: 1,
};

export const Wrecker: WeaponType = {
  name: WeaponName.Wrecker,
  weight: WeaponWeightClass.Heavy,
  category: WeaponCategory.CloseCombat,
  rating: 8,
  special: ["Close Combat"],
  cost: 2,
};

export const TurboBlade: WeaponType = {
  name: WeaponName.TurboBlade,
  weight: WeaponWeightClass.Heavy,
  category: WeaponCategory.CloseCombat,
  rating: 8,
  special: ["Close Combat", "Plasma Burn"],
  cost: 3,
};

export const MagmaWrecker: WeaponType = {
  name: WeaponName.MagmaWrecker,
  weight: WeaponWeightClass.Superheavy,
  category: WeaponCategory.CloseCombat,
  rating: 8,
  special: ["Close Combat", "Annihilator"],
  cost: 4,
};

export const CloseCombatWeaponTypes: ReadonlyArray<WeaponType> = [
  Blade,
  Wrecker,
  TurboBlade,
  MagmaWrecker,
];