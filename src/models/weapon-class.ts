import { WeaponCategory, WeaponWeightClass } from "./constants";

export interface WeaponType {
    readonly name: string;
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
    name: 'Autogun',
    weight: WeaponWeightClass.Versatile,
    category: WeaponCategory.Projectile,
    rating: 5,
    special: ['No Pen', 'Versatile'],
    cost: 1
}

export const Autocannon: WeaponType = {
    name: 'Autocannon',
    weight: WeaponWeightClass.Versatile,
    category: WeaponCategory.Projectile,
    rating: 5,
    special: ['Versatile'],
    cost: 2
}

export const Howler: WeaponType = {
    name: 'Howler',
    weight: WeaponWeightClass.Light,
    category: WeaponCategory.Projectile,
    rating: 7,
    special: ['Assault', 'No Pen', 'Point Blank'],
    cost: 2
}

export const Laser: WeaponType = {
    name: 'Laser',
    weight: WeaponWeightClass.Light,
    category: WeaponCategory.Projectile,
    rating: 3,
    special: ['Anti-Air', 'Flashburn'],
    cost: 2
}

export const LightMissile: WeaponType = {
    name: 'Light Missile',
    weight: WeaponWeightClass.Light,
    category: WeaponCategory.Projectile,
    rating: 5,
    special: ['Anti-Air', 'Guided Fire', 'Unstable'],
    cost: 2
}

export const PlasmaBlaster: WeaponType = {
    name: 'PlasmaBlaster',
    weight: WeaponWeightClass.Light,
    category: WeaponCategory.Projectile,
    rating: 5,
    special: ['Close Action', 'Plasma Burn'],
    cost: 2
}

export const RotorCannon: WeaponType = {
    name: 'Rotor Cannon',
    weight: WeaponWeightClass.Versatile,
    category: WeaponCategory.Projectile,
    rating: 5,
    special: ['Versatile', 'Volley'],
    cost: 3
}

export const LightCannon: WeaponType = {
    name: 'Light Cannon',
    weight: WeaponWeightClass.Light,
    category: WeaponCategory.Projectile,
    rating: 7,
    special: [],
    cost: 3
}

/**
 * HEAVY WEAPONRY
 */
export const PulseLaser: WeaponType = {
    name: 'Pulse Laser',
    weight: WeaponWeightClass.Heavy,
    category: WeaponCategory.Projectile,
    rating: 4,
    special: ['Flashburn', 'Volley'],
    cost: 3
}

export const BlastCannon: WeaponType = {
    name: 'Blast Cannon',
    weight: WeaponWeightClass.Heavy,
    category: WeaponCategory.Projectile,
    rating: 8,
    special: ['Close Action'],
    cost: 3
}

export const BattleCannon: WeaponType = {
    name: 'Battle Cannon',
    weight: WeaponWeightClass.Heavy,
    category: WeaponCategory.Projectile,
    rating: 9,
    special: [],
    cost: 4
}

export const HeavyRotorCannon: WeaponType = {
    name: 'Heavy Rotor Cannon',
    weight: WeaponWeightClass.Heavy,
    category: WeaponCategory.Projectile,
    rating: 7,
    special: ['Volley'],
    cost: 4
}

export const HeavyCannon: WeaponType = {
    name: 'Heavy Cannon',
    weight: WeaponWeightClass.Heavy,
    category: WeaponCategory.Projectile,
    rating: 10,
    special: ['Unstable'],
    cost: 4
}

export const HeavyLaser: WeaponType = {
    name: 'Heavy Laser',
    weight: WeaponWeightClass.Heavy,
    category: WeaponCategory.Projectile,
    rating: 6,
    special: ['Anti-Air', 'Flashburn'],
    cost: 4
}

export const HeavyMissile: WeaponType = {
    name: 'Heavy Missile',
    weight: WeaponWeightClass.Heavy,
    category: WeaponCategory.Projectile,
    rating: 8,
    special: ['Anti-Air', 'Guided Fire', 'Unstable'],
    cost: 4
}

export const MagmaBlaster: WeaponType = {
    name: 'Magma Blaster',
    weight: WeaponWeightClass.Heavy,
    category: WeaponCategory.Projectile,
    rating: 6,
    special: ['Point Blank', 'Annihilator'],
    cost: 4
}

export const PlasmaCannon: WeaponType = {
    name: 'Plasma Cannon',
    weight: WeaponWeightClass.Heavy,
    category: WeaponCategory.Projectile,
    rating: 8,
    special: ['Close Action', 'Plasma Burn'],
    cost: 4
}

export const Screamer: WeaponType = {
    name: 'Screamer',
    weight: WeaponWeightClass.Heavy,
    category: WeaponCategory.Projectile,
    rating: 14,
    special: ['Assault', 'No Pen', 'Point Blank'],
    cost: 4
}

/**
 * BOMBS
 */
export const ClusterBombs: WeaponType = {
    name: 'Cluster Bombs',
    weight: WeaponWeightClass.Light,
    category: WeaponCategory.Bomb,
    rating: 4,
    special: ['Volley', 'Bomb'],
    cost: 2
}

export const IncendiaryBombs: WeaponType = {
    name: 'Incendiary Bombs',
    weight: WeaponWeightClass.Light,
    category: WeaponCategory.Bomb,
    rating: 8,
    special: ['Inferno', 'No Pen', 'Volley', 'Bomb'],
    cost: 2
}

export const HeavyBombs: WeaponType = {
    name: 'Heavy Bombs',
    weight: WeaponWeightClass.Heavy,
    category: WeaponCategory.Bomb,
    rating: 6,
    special: ['Volley', 'Bomb'],
    cost: 3
}

export const PlasmaBombs: WeaponType = {
    name: 'Plasma Bombs',
    weight: WeaponWeightClass.Heavy,
    category: WeaponCategory.Bomb,
    rating: 4,
    special: ['Plasma Burn', 'Volley', 'Bomb'],
    cost: 4
}

/**
 * CLOSE COMBAT WEAPONRY
 */
export const Blade: WeaponType = {
    name: 'Blade',
    weight: WeaponWeightClass.Light,
    category: WeaponCategory.CloseCombat,
    rating: 6,
    special: ['Close Combat'],
    cost: 1
}

export const Wrecker: WeaponType = {
    name: 'Wrecker',
    weight: WeaponWeightClass.Heavy,
    category: WeaponCategory.CloseCombat,
    rating: 8,
    special: ['Close Combat'],
    cost: 2
}

export const TurboBlade: WeaponType = {
    name: 'Turbo-blade',
    weight: WeaponWeightClass.Heavy,
    category: WeaponCategory.CloseCombat,
    rating: 8,
    special: ['Close Combat', 'Plasma Burn'],
    cost: 3
}

export const MagmaWrecker: WeaponType = {
    name: 'Magma Wrecker',
    weight: WeaponWeightClass.Superheavy,
    category: WeaponCategory.CloseCombat,
    rating: 8,
    special: ['Close Combat', 'Annihilator'],
    cost: 4
}

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
    // Bombs
    ClusterBombs,
    IncendiaryBombs,
    HeavyBombs,
    PlasmaBombs,
    //Close Combat Weaponry
    Blade,
    Wrecker,
    TurboBlade,
    MagmaWrecker
]