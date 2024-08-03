import Modification from "./modifications";
import { ModificationType, VehicleSize, MountLocation } from "./constants";
import Unit from "./unit";

export const EnginePowerReduction: Modification = {
  type: ModificationType.Compromise,
  name: "Engine Power Reduction",
  cost: 2,
  compatibleVehicleSizes: [
    VehicleSize.Light,
    VehicleSize.Heavy,
    VehicleSize.Superheavy,
    VehicleSize.Behemoth,
  ],
  maxAllowed: null,
  requiredSpecialRuleGroups: [],
  excludedSpecialRuleGroups: ["Flyer"],
  requiredMounts: [],
  exclusiveModifications: ["Engine Power Increase"],
  applyToUnit: function (unit: Unit) {
    return unit;
  },
};

export const Flammable: Modification = {
  type: ModificationType.Compromise,
  name: "Flammable",
  cost: 2,
  compatibleVehicleSizes: [
    VehicleSize.Light,
    VehicleSize.Heavy,
    VehicleSize.Superheavy,
    VehicleSize.Behemoth,
  ],
  maxAllowed: 1,
  requiredSpecialRuleGroups: [],
  excludedSpecialRuleGroups: [],
  requiredMounts: [],
  exclusiveModifications: [],
  applyToUnit: function (unit: Unit) {
    return unit;
  },
};

export const GreenCrew: Modification = {
  type: ModificationType.Compromise,
  name: "Green Crew",
  cost: 4,
  compatibleVehicleSizes: [
    VehicleSize.Light,
    VehicleSize.Heavy,
    VehicleSize.Superheavy,
    VehicleSize.Behemoth,
  ],
  maxAllowed: 1,
  requiredSpecialRuleGroups: [],
  excludedSpecialRuleGroups: [],
  requiredMounts: [],
  exclusiveModifications: ["Veteran Crew"],
  applyToUnit: function (unit: Unit) {
    return unit;
  },
};

export const LightFrontArmour: Modification = {
  type: ModificationType.Compromise,
  name: "Light Front Armour",
  cost: 3,
  maxAllowed: 1,
  compatibleVehicleSizes: [
    VehicleSize.Light,
    VehicleSize.Heavy,
    VehicleSize.Superheavy,
    VehicleSize.Behemoth,
  ],
  requiredSpecialRuleGroups: [],
  excludedSpecialRuleGroups: [],
  requiredMounts: [],
  exclusiveModifications: ["Reinforced Front Armour"],
  applyToUnit: function (unit: Unit) {
    return unit;
  },
};

export const LightSecondaryArmour: Modification = {
  type: ModificationType.Compromise,
  name: "Light Secondary Armour",
  cost: 2,
  maxAllowed: 1,
  compatibleVehicleSizes: [
    VehicleSize.Light,
    VehicleSize.Heavy,
    VehicleSize.Superheavy,
    VehicleSize.Behemoth,
  ],
  requiredSpecialRuleGroups: [],
  excludedSpecialRuleGroups: [],
  requiredMounts: [],
  exclusiveModifications: ["Reinforced Side Armour", "Reinforced Rear Armour"],
  applyToUnit: function (unit: Unit) {
    return unit;
  },
};

export const LowMorale: Modification = {
  type: ModificationType.Compromise,
  name: "Low Morale",
  cost: 2,
  compatibleVehicleSizes: [
    VehicleSize.Light,
    VehicleSize.Heavy,
    VehicleSize.Superheavy,
    VehicleSize.Behemoth,
  ],
  maxAllowed: 1,
  requiredSpecialRuleGroups: [],
  excludedSpecialRuleGroups: [],
  requiredMounts: [],
  exclusiveModifications: ["Resilient"],
  applyToUnit: function (unit: Unit) {
    return unit;
  },
};

export const MainGunRetrofit: Modification = {
  type: ModificationType.Compromise,
  name: "Main Gun Retrofit",
  cost: 1,
  compatibleVehicleSizes: [
    VehicleSize.Light,
    VehicleSize.Heavy,
    VehicleSize.Superheavy,
    VehicleSize.Behemoth,
  ],
  maxAllowed: null,
  requiredSpecialRuleGroups: [],
  excludedSpecialRuleGroups: [],
  requiredMounts: [
    MountLocation.Arm,
    MountLocation.Fixed,
    MountLocation.Turret,
  ],
  exclusiveModifications: [],
  applyToUnit: function (unit: Unit) {
    return unit;
  },
};

export const PoorOptics: Modification = {
  type: ModificationType.Compromise,
  name: "Poor Optics",
  cost: 1,
  compatibleVehicleSizes: [
    VehicleSize.Light,
    VehicleSize.Heavy,
    VehicleSize.Superheavy,
    VehicleSize.Behemoth,
  ],
  maxAllowed: 1,
  requiredSpecialRuleGroups: [],
  excludedSpecialRuleGroups: [],
  requiredMounts: [],
  exclusiveModifications: ["Optic Refinement"],
  applyToUnit: function (unit: Unit) {
    return unit;
  },
};

export const WeakHull: Modification = {
  type: ModificationType.Compromise,
  name: "Weak Hull",
  cost: 1,
  compatibleVehicleSizes: [
    VehicleSize.Light,
    VehicleSize.Heavy,
    VehicleSize.Superheavy,
    VehicleSize.Behemoth,
  ],
  maxAllowed: 1,
  requiredSpecialRuleGroups: [],
  excludedSpecialRuleGroups: [],
  requiredMounts: [],
  exclusiveModifications: ["Toughened Hull"],
  applyToUnit: function (unit: Unit) {
    return unit;
  },
};

export const Compromises: readonly Modification[] = [
  EnginePowerReduction,
  Flammable,
  GreenCrew,
  LightFrontArmour,
  LightSecondaryArmour,
  LowMorale,
  MainGunRetrofit,
  PoorOptics,
  WeakHull,
];

export const CompromisesByName = new Map(Compromises.map((c) => [c.name, c]));
