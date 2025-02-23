import { WeaponName, WeaponWeightClass, WeaponCategory } from "../constants";
import WeaponType from "./weapon-type";

export const ClusterBombs: WeaponType = {
  name: WeaponName.ClusterBombs,
  weight: WeaponWeightClass.Light,
  category: WeaponCategory.Bomb,
  rating: 4,
  special: ["Volley", "Bomb"],
  cost: 2,
};

export const IncendiaryBombs: WeaponType = {
  name: WeaponName.IncendiaryBombs,
  weight: WeaponWeightClass.Light,
  category: WeaponCategory.Bomb,
  rating: 8,
  special: ["Inferno", "No Pen", "Volley", "Bomb"],
  cost: 2,
};

export const HeavyBombs: WeaponType = {
  name: WeaponName.HeavyBombs,
  weight: WeaponWeightClass.Heavy,
  category: WeaponCategory.Bomb,
  rating: 6,
  special: ["Volley", "Bomb"],
  cost: 3,
};

export const PlasmaBombs: WeaponType = {
  name: WeaponName.PlasmaBombs,
  weight: WeaponWeightClass.Heavy,
  category: WeaponCategory.Bomb,
  rating: 4,
  special: ["Plasma Burn", "Volley", "Bomb"],
  cost: 4,
};

export const BombWeaponTypes: ReadonlyArray<WeaponType> = [
  ClusterBombs,
  IncendiaryBombs,
  HeavyBombs,
  PlasmaBombs,
];