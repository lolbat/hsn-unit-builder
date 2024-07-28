import Armour from "./armour";
import { VehicleSize } from "./constants";
import {
  MountType,
  LightHullMount,
  LightSponsonsMount,
  LightTurretMount,
  LightFixedMount,
  LightArmMount,
  LightBombBayMount,
  HeavyHullMount,
  HeavySponsonsMount,
  HeavyTurretMount,
  HeavyFixedMount,
  HeavyArmMount,
  HeavyBombBayMount,
  SuperheavyFixedMount,
  SuperheavyHullMount,
  SuperheavySponsonsMount,
  SuperheavyTurretMount,
  SuperheavyArmMount,
  SuperheavyBombBayMount,
  BehemothFixedMount,
  BehemothHullMount,
  BehemothSponsonsMount,
  BehemothMegaTurretMount,
  BehemothArmMount,
  BehemothTurretMount,
} from "./mount-type";

export default interface VehicleClass {
  readonly name: string;
  readonly baseCost: number;
  readonly maxCost: number;
  readonly size: VehicleSize;
  readonly discipline: number;
  readonly orderCap?: number;
  readonly optics: number;
  readonly movement: number;
  readonly morale: number;
  readonly armour: Armour;
  readonly hullPoints: number;
  readonly forms?: number;
  readonly mounts: MountType[];
  readonly special: string[];
}

/**
 * LIGHT VEHICLES
 */
export const LightBattleVehicle: VehicleClass = {
  name: "Light Battle Vehicle",
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
  special: [],
};

export const LightSupportVehicle: VehicleClass = {
  name: "Light Support Vehicle",
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
  special: [],
};

export const ScoutVehicle: VehicleClass = {
  name: "Scout Vehicle",
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
  special: ["Scout"],
};

export const ScoutMech: VehicleClass = {
  name: "Scout Mech",
  baseCost: 2,
  maxCost: 5,
  size: VehicleSize.Light,
  discipline: 2,
  optics: 10,
  movement: 7,
  morale: 2,
  armour: new Armour(0, null, 0),
  hullPoints: 3,
  mounts: [LightArmMount, LightHullMount],
  special: ["Scout", "Walker"],
};

export const LightFastMover: VehicleClass = {
  name: "Light Fast Mover",
  baseCost: 9,
  maxCost: 14,
  size: VehicleSize.Light,
  discipline: 3,
  optics: 15,
  movement: 36,
  morale: 3,
  armour: new Armour(0, null, null),
  hullPoints: 2,
  mounts: [LightHullMount, LightBombBayMount],
  special: ["Flyer (Fast Mover)"],
};

export const LightScoutFlyer: VehicleClass = {
  name: "Light Scout Flyer",
  baseCost: 5,
  maxCost: 10,
  size: VehicleSize.Light,
  discipline: 3,
  optics: 20,
  movement: 36,
  morale: 3,
  armour: new Armour(0, null, null),
  hullPoints: 2,
  mounts: [LightHullMount],
  special: ["Flyer (Fast Mover)", "Scout"],
};

export const LightVtol: VehicleClass = {
  name: "Light VTOL",
  baseCost: 8,
  maxCost: 14,
  size: VehicleSize.Light,
  discipline: 2,
  optics: 10,
  movement: 12,
  morale: 3,
  armour: new Armour(0, 0, 0),
  hullPoints: 2,
  mounts: [LightHullMount, LightSponsonsMount, LightBombBayMount],
  special: ["Flyer (VTOL)", "Fast", "Float"],
};

export const Cavalry: VehicleClass = {
  name: "Cavalry",
  baseCost: 2,
  maxCost: 4,
  size: VehicleSize.Light,
  discipline: 2,
  optics: 12,
  movement: 10,
  morale: 2,
  armour: new Armour(0, 0, 0),
  hullPoints: 0,
  mounts: [LightHullMount],
  special: ["Fast", "Recce", "Scout", "Short", "Unarmoured"],
};

/**
 * HEAVY VEHICLES
 */
export const HeavyBattleVehicle: VehicleClass = {
  name: "Heavy Battle Vehicle",
  baseCost: 10,
  maxCost: 22,
  size: VehicleSize.Heavy,
  discipline: 3,
  optics: 8,
  movement: 6,
  morale: 3,
  armour: new Armour(2, 1, 1),
  hullPoints: 8,
  mounts: [HeavyHullMount, HeavySponsonsMount, HeavyTurretMount],
  special: ["Relentless"],
};

export const HeavySupportVehicle: VehicleClass = {
  name: "Heavy Support Vehicle",
  baseCost: 8,
  maxCost: 22,
  size: VehicleSize.Heavy,
  discipline: 3,
  optics: 8,
  movement: 6,
  morale: 3,
  armour: new Armour(2, 1, 1),
  hullPoints: 8,
  mounts: [HeavyFixedMount, HeavyHullMount, HeavySponsonsMount],
  special: ["Relentless"],
};

export const HeavyMech: VehicleClass = {
  name: "Heavy Mech",
  baseCost: 10,
  maxCost: 22,
  size: VehicleSize.Heavy,
  discipline: 3,
  optics: 8,
  movement: 5,
  morale: 3,
  armour: new Armour(2, null, 1),
  hullPoints: 8,
  mounts: [HeavyArmMount, HeavyArmMount, HeavyHullMount],
  special: ["Dual Mount", "Walker"],
};

export const HeavyFastMover: VehicleClass = {
  name: "Heavy Fast Mover",
  baseCost: 16,
  maxCost: 28,
  size: VehicleSize.Heavy,
  discipline: 3,
  optics: 12,
  movement: 36,
  morale: 3,
  armour: new Armour(1, null, null),
  hullPoints: 5,
  mounts: [HeavyHullMount, HeavyBombBayMount, HeavySponsonsMount],
  special: ["Flyer (Fast Mover)"],
};

export const HeavyVtol: VehicleClass = {
  name: "Heavy VTOL",
  baseCost: 15,
  maxCost: 26,
  size: VehicleSize.Heavy,
  discipline: 3,
  optics: 8,
  movement: 10,
  morale: 3,
  armour: new Armour(1, 1, 0),
  hullPoints: 3,
  mounts: [HeavyHullMount, HeavySponsonsMount, HeavyBombBayMount],
  special: ["Float", "Flyer (VTOL)"],
};

/**
 * SUPERHEAVY VEHICLES
 */
export const SuperheavyBattleVehicle: VehicleClass = {
  name: "Superheavy Battle Vehicle",
  baseCost: 20,
  maxCost: 40,
  size: VehicleSize.Superheavy,
  discipline: 4,
  optics: 8,
  movement: 4,
  morale: 3,
  armour: new Armour(3, 2, 2),
  hullPoints: 12,
  mounts: [
    SuperheavyFixedMount,
    SuperheavyHullMount,
    SuperheavySponsonsMount,
    SuperheavyTurretMount,
  ],
  special: ["Relentless"],
};

export const SuperheavyMech: VehicleClass = {
  name: "Superheavy Mech",
  baseCost: 20,
  maxCost: 40,
  size: VehicleSize.Superheavy,
  discipline: 4,
  optics: 8,
  movement: 3,
  morale: 3,
  armour: new Armour(3, null, 2),
  hullPoints: 10,
  mounts: [
    SuperheavyArmMount,
    SuperheavyArmMount,
    SuperheavyFixedMount,
    SuperheavyHullMount,
  ],
  special: ["Dual Mount", "Walker"],
};

export const SuperheavyVtol: VehicleClass = {
  name: "Superheavy VTOL",
  baseCost: 28,
  maxCost: 54,
  size: VehicleSize.Superheavy,
  discipline: 4,
  optics: 8,
  movement: 8,
  morale: 3,
  armour: new Armour(2, 2, 1),
  hullPoints: 5,
  mounts: [
    SuperheavyBombBayMount,
    SuperheavyHullMount,
    SuperheavySponsonsMount,
    SuperheavyHullMount,
  ],
  special: ["Float", "Flyer (VTOL)"],
};

/**
 * BEHEMOTH VEHICLES
 */
export const BehemothBattleVehicle: VehicleClass = {
  name: "Behemoth Battle Vehicle",
  baseCost: 70,
  maxCost: 100,
  size: VehicleSize.Behemoth,
  discipline: 4,
  orderCap: 16,
  optics: 8,
  movement: 4,
  morale: 4,
  armour: new Armour(3, 2, 2),
  hullPoints: 12,
  forms: 3,
  mounts: [
    BehemothFixedMount,
    BehemothHullMount,
    BehemothHullMount,
    BehemothSponsonsMount,
    BehemothMegaTurretMount,
  ],
  special: ["Behemoth", "Relentless"],
};

export const BehemothMech: VehicleClass = {
  name: "Behemoth Mech",
  baseCost: 70,
  maxCost: 100,
  size: VehicleSize.Behemoth,
  discipline: 4,
  orderCap: 16,
  optics: 8,
  movement: 3,
  morale: 4,
  armour: new Armour(3, null, 2),
  hullPoints: 10,
  forms: 3,
  mounts: [
    BehemothArmMount,
    BehemothArmMount,
    BehemothArmMount,
    BehemothArmMount,
    BehemothFixedMount,
    BehemothFixedMount,
    BehemothHullMount,
    BehemothHullMount,
  ],
  special: ["Behemoth", "Dual Mount", "Relentless", "Walker"],
};

export const BehemothCarrier: VehicleClass = {
  name: "Behemoth Carrier",
  baseCost: 60,
  maxCost: 100,
  size: VehicleSize.Behemoth,
  discipline: 4,
  orderCap: 16,
  optics: 8,
  movement: 3,
  morale: 4,
  armour: new Armour(3, 2, 2),
  hullPoints: 12,
  forms: 2,
  mounts: [
    BehemothFixedMount,
    BehemothHullMount,
    BehemothSponsonsMount,
    BehemothTurretMount,
  ],
  special: ["Behemoth", "Carrier", "Relentless"],
};

export const VehicleClasses: ReadonlyArray<VehicleClass> = [
  // Light vehicles
  LightBattleVehicle,
  LightSupportVehicle,
  ScoutVehicle,
  ScoutMech,
  LightFastMover,
  LightScoutFlyer,
  LightVtol,
  Cavalry,
  // Heavy vehicles
  HeavyBattleVehicle,
  HeavySupportVehicle,
  HeavyMech,
  HeavyFastMover,
  HeavyVtol,
  // Superheavy vehicles
  SuperheavyBattleVehicle,
  SuperheavyMech,
  SuperheavyVtol,
  // Behemoth vehicles
  BehemothBattleVehicle,
  BehemothMech,
  BehemothCarrier,
];
