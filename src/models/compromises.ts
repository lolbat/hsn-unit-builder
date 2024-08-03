import Modification from "./modifications";
import {
  ModificationType,
  VehicleSize,
  MountLocation,
  CompromiseName,
  UpgradeName,
} from "./constants";

export const EnginePowerReduction: Modification = {
  type: ModificationType.Compromise,
  name: CompromiseName.EnginePowerReduction,
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
  exclusiveModifications: [UpgradeName.EnginePowerIncrease],
};

export const Flammable: Modification = {
  type: ModificationType.Compromise,
  name: CompromiseName.Flammable,
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
};

export const GreenCrew: Modification = {
  type: ModificationType.Compromise,
  name: CompromiseName.GreenCrew,
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
  exclusiveModifications: [UpgradeName.VeteranCrew],
};

export const LightFrontArmour: Modification = {
  type: ModificationType.Compromise,
  name: CompromiseName.LightFrontArmour,
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
  exclusiveModifications: [UpgradeName.ReinforcedFrontArmour],
};

export const LightSecondaryArmour: Modification = {
  type: ModificationType.Compromise,
  name: CompromiseName.LightSecondaryArmour,
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
  exclusiveModifications: [
    UpgradeName.ReinforcedSideArmour,
    UpgradeName.ReinforcedRearArmour,
  ],
};

export const LowMorale: Modification = {
  type: ModificationType.Compromise,
  name: CompromiseName.LowMorale,
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
  exclusiveModifications: [UpgradeName.Resilient],
};

export const MainGunRetrofit: Modification = {
  type: ModificationType.Compromise,
  name: CompromiseName.MainGunRetrofit,
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
};

export const PoorOptics: Modification = {
  type: ModificationType.Compromise,
  name: CompromiseName.PoorOptics,
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
  exclusiveModifications: [UpgradeName.OpticRefinement],
};

export const WeakHull: Modification = {
  type: ModificationType.Compromise,
  name: CompromiseName.WeakHull,
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
  exclusiveModifications: [UpgradeName.ToughenedHull],
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

export function getCostForCompromise({ name, cost }: Modification) {
  switch (name) {
    case CompromiseName.EnginePowerReduction:
    case CompromiseName.Flammable:
    case CompromiseName.GreenCrew:
    case CompromiseName.LightFrontArmour:
    case CompromiseName.LightSecondaryArmour:
    case CompromiseName.LowMorale:
    case CompromiseName.MainGunRetrofit:
    case CompromiseName.PoorOptics:
    case CompromiseName.WeakHull: {
      return cost;
    }
    default: {
      return null;
    }
  }
}
