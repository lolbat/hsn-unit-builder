import { WeaponWeightClass } from "./constants";

export interface WeaponType {
    readonly name: string;
    readonly weight: WeaponWeightClass;
    readonly rating: number;
    readonly special: string[];
    readonly cost: number;
}

export const Autogun: WeaponType = {
    name: 'Autogun',
    weight: WeaponWeightClass.Versatile,
    rating: 5,
    special: ['No Pen', 'Versatile'],
    cost: 1
}

export const Autocannon: WeaponType = {
    name: 'Autocannon',
    weight: WeaponWeightClass.Versatile,
    rating: 5,
    special: ['Versatile'],
    cost: 2
}

export const Howler: WeaponType = {
    name: 'Howler',
    weight: WeaponWeightClass.Light,
    rating: 7,
    special: ['Assault', 'No Pen', 'Point Blank'],
    cost: 2
}

export const Laser: WeaponType = {
    name: 'Laser',
    weight: WeaponWeightClass.Light,
    rating: 3,
    special: ['Anti-Air', 'Flashburn'],
    cost: 2
}

export const LightMissile: WeaponType = {
    name: 'Light Missile',
    weight: WeaponWeightClass.Light,
    rating: 5,
    special: ['Anti-Air', 'Guided Fire', 'Unstable'],
    cost: 2
}

export const PlasmaBlaster: WeaponType = {
    name: 'PlasmaBlaster',
    weight: WeaponWeightClass.Light,
    rating: 5,
    special: ['Close Action', 'Plasma Burn'],
    cost: 2
}

export const RotorCannon: WeaponType = {
    name: 'Rotor Cannon',
    weight: WeaponWeightClass.Versatile,
    rating: 5,
    special: ['Versatile', 'Volley'],
    cost: 3
}

export const LightCannon: WeaponType = {
    name: 'Light Cannon',
    weight: WeaponWeightClass.Light,
    rating: 7,
    special: [],
    cost: 3
}

export const WeaponTypes: ReadonlyArray<WeaponType> = [
    Autogun,
    Autocannon,
    Howler,
    Laser,
    LightMissile,
    PlasmaBlaster,
    RotorCannon,
    LightCannon
]