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
    Autogun,
    Autocannon,
    Howler,
    Laser,
    LightMissile,
    PlasmaBlaster,
    RotorCannon,
    LightCannon,
    Blade,
    Wrecker,
    TurboBlade,
    MagmaWrecker
]