import { WeaponName, WeaponCategory, WeaponWeightClass } from "./constants";

export interface WeaponType {
  readonly name: WeaponName;
  readonly weight: WeaponWeightClass;
  readonly category: WeaponCategory;
  readonly rating: number;
  readonly special: string[];
  readonly cost: number;
}

/**
 * LIGHT WEAPONRY
 */
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

/**
 * HEAVY WEAPONRY
 */
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

/**
 * SUPERHEAVY WEAPONRY
 */
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

/**
 * BOMBS
 */
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

/**
 * CLOSE COMBAT WEAPONRY
 */
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

export const WeaponTypes: ReadonlyArray<WeaponType> = [
  // Light Weaponry
  Autogun,
  Autocannon,
  Howler,
  Laser,
  LightMissile,
  PlasmaBlaster,
  RotorCannon,
  LightCannon,
  // Heavy Weaponry
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
  // Superheavy Weaponry
  SuperBlastCannon,
  SuperBattleCannon,
  MissileRack,
  MagmaCannon,
  SuperPlasmaCannon,
  SuperheavyLaser,
  // Bombs
  ClusterBombs,
  IncendiaryBombs,
  HeavyBombs,
  PlasmaBombs,
  //Close Combat Weaponry
  Blade,
  Wrecker,
  TurboBlade,
  MagmaWrecker,
];
