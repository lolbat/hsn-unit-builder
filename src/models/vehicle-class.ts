import Armour from './armour';
import { VehicleSize } from './constants';
import {MountType, LightHullMount, LightSponsonsMount, LightTurretMount, LightFixedMount, LightArmMount } from './mount-type';

export default interface VehicleClass {
    readonly name: string;
    readonly baseCost: number;
    readonly maxCost: number;
    readonly size: VehicleSize;
    readonly discipline: number;
    readonly optics: number;
    readonly movement: number;
    readonly morale: number;
    readonly armour: Armour;
    readonly hullPoints: number;
    readonly mounts: MountType[];
    readonly special: string[];
}

export const LightBattleVehicle: VehicleClass = {
    name: 'Light Battle Vehicle',
    baseCost: 5,
    maxCost: 10,
    size: VehicleSize.Light,
    discipline: 2,
    optics: 8,
    movement: 8,
    morale: 3,
    armour: new Armour(1, 1, 0),
    hullPoints: 4,
    mounts: [LightHullMount, LightSponsonsMount, LightTurretMount],
    special: []
}

export const LightSupportVehicle: VehicleClass = {
    name: 'Light Support Vehicle',
    baseCost: 4,
    maxCost: 12,
    size: VehicleSize.Light,
    discipline: 2,
    optics: 8,
    movement: 8,
    morale: 3,
    armour: new Armour(1, 1, 0),
    hullPoints: 4,
    mounts: [LightHullMount, LightSponsonsMount, LightFixedMount],
    special: []
}

export const ScoutVehicle: VehicleClass = {
    name: 'Scout Vehicle',
    baseCost: 2,
    maxCost: 7,
    size: VehicleSize.Light,
    discipline: 2,
    optics: 10,
    movement: 8,
    morale: 2,
    armour: new Armour(0, 0, 0),
    hullPoints: 4,
    mounts: [LightHullMount, LightTurretMount],
    special: ['Scout']
}

export const ScoutMech: VehicleClass = {
    name: 'Scout Mech',
    baseCost: 2,
    maxCost: 5,
    size: VehicleSize.Light,
    discipline: 2,
    optics: 10,
    movement: 7,
    morale: 2,
    armour: new Armour(0, 0, 0),
    hullPoints: 3,
    mounts: [LightArmMount, LightHullMount],
    special: ['Scout', 'Walker']
}

export const VehicleClasses: ReadonlyArray<VehicleClass> = [
    LightBattleVehicle,
    LightSupportVehicle,
    ScoutVehicle,
    ScoutMech
]