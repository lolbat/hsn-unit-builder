import { WeaponWeightClass } from "./constants";

export interface WeaponClass {
    readonly name: string;
    readonly weight: WeaponWeightClass;
    readonly rating: number;
    readonly special: string[];
    readonly cost: number;
}

export const Autogun: WeaponClass = {
    name: 'Autogun',
    weight: WeaponWeightClass.Versatile,
    rating: 5,
    special: ['No Pen', 'Versatile'],
    cost: 1
}

export const Autocannon: WeaponClass = {
    name: 'Autocannon',
    weight: WeaponWeightClass.Versatile,
    rating: 5,
    special: ['Versatile'],
    cost: 2
}

export const Howler: WeaponClass = {
    name: 'Howler',
    weight: WeaponWeightClass.Light,
    rating: 7,
    special: ['Assault', 'No Pen', 'Point Blank'],
    cost: 2
}

export const Laser: WeaponClass = {
    name: 'Laser',
    weight: WeaponWeightClass.Light,
    rating: 3,
    special: ['Anti-Air', 'Flashburn'],
    cost: 2
}

export const LightMissile: WeaponClass = {
    name: 'Light Missile',
    weight: WeaponWeightClass.Light,
    rating: 5,
    special: ['Anti-Air', 'Guided Fire', 'Unstable'],
    cost: 2
}

export const PlasmaBlaster: WeaponClass = {
    name: 'PlasmaBlaster',
    weight: WeaponWeightClass.Light,
    rating: 5,
    special: ['Close Action', 'Plasma Burn'],
    cost: 2
}

export const RotorCannon: WeaponClass = {
    name: 'Rotor Cannon',
    weight: WeaponWeightClass.Versatile,
    rating: 5,
    special: ['Versatile', 'Volley'],
    cost: 3
}

export const LightCannon: WeaponClass = {
    name: 'Light Cannon',
    weight: WeaponWeightClass.Light,
    rating: 7,
    special: [],
    cost: 3
}

export const WeaponClasses: ReadonlyArray<WeaponClass> = [
    Autogun,
    Autocannon,
    Howler,
    Laser,
    LightMissile,
    PlasmaBlaster,
    RotorCannon,
    LightCannon
]