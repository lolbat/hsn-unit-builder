import Modification from "./modifications";
import {
  ModificationType,
  VehicleSize,
  MountLocation,
  UpgradeName,
  CompromiseName,
} from "./constants";

export const AAWeaponConfiguration: Modification = {
  type: ModificationType.Upgrade,
  name: UpgradeName.AAWeaponConfiguration,
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
  requiredMounts: [MountLocation.Hull, MountLocation.Turret],
  exclusiveModifications: [],
};

export const AbominableHorror: Modification = {
  type: ModificationType.Upgrade,
  name: UpgradeName.AbominableHorror,
  cost: 1,
  compatibleVehicleSizes: [
    VehicleSize.Light,
    VehicleSize.Heavy,
    VehicleSize.Superheavy,
  ],
  maxAllowed: null,
  requiredSpecialRuleGroups: [],
  excludedSpecialRuleGroups: [],
  requiredMounts: [],
  exclusiveModifications: [],
};

export const AdditionalSponsons: Modification = {
  type: ModificationType.Upgrade,
  name: UpgradeName.AdditionalSponsons,
  cost: 3,
  compatibleVehicleSizes: [VehicleSize.Superheavy, VehicleSize.Behemoth],
  maxAllowed: 1,
  requiredSpecialRuleGroups: [],
  excludedSpecialRuleGroups: [],
  requiredMounts: [MountLocation.Sponsons],
  exclusiveModifications: [],
};

export const CoaxialMount: Modification = {
  type: ModificationType.Upgrade,
  name: UpgradeName.CoaxialMount,
  cost: 1,
  compatibleVehicleSizes: [VehicleSize.Heavy, VehicleSize.Superheavy],
  maxAllowed: 1,
  requiredSpecialRuleGroups: [],
  excludedSpecialRuleGroups: [],
  requiredMounts: [MountLocation.Turret],
  exclusiveModifications: [],
};

export const CommunicationsModule: Modification = {
  type: ModificationType.Upgrade,
  name: UpgradeName.CommunicationsModule,
  cost: 1,
  compatibleVehicleSizes: [
    VehicleSize.Light,
    VehicleSize.Heavy,
    VehicleSize.Superheavy,
  ],
  maxAllowed: 1,
  requiredSpecialRuleGroups: [],
  excludedSpecialRuleGroups: [],
  requiredMounts: [MountLocation.Arm, MountLocation.Turret],
  exclusiveModifications: [],
};

export const EarlyWarningRadarSystem: Modification = {
  type: ModificationType.Upgrade,
  name: UpgradeName.EarlyWarningRadarSystem,
  cost: 2,
  compatibleVehicleSizes: [
    VehicleSize.Light,
    VehicleSize.Heavy,
    VehicleSize.Superheavy,
  ],
  maxAllowed: 1,
  requiredSpecialRuleGroups: [],
  excludedSpecialRuleGroups: ["Flyer"],
  requiredMounts: [],
  exclusiveModifications: [],
};

export const EnginePowerIncrease: Modification = {
  type: ModificationType.Upgrade,
  name: UpgradeName.EnginePowerIncrease,
  cost: 1,
  compatibleVehicleSizes: [
    VehicleSize.Light,
    VehicleSize.Heavy,
    VehicleSize.Superheavy,
    VehicleSize.Behemoth,
  ],
  maxAllowed: null,
  requiredSpecialRuleGroups: [],
  excludedSpecialRuleGroups: ["Fast Mover"],
  requiredMounts: [],
  exclusiveModifications: [CompromiseName.EnginePowerReduction],
};

export const EnhancedSensors: Modification = {
  type: ModificationType.Upgrade,
  name: UpgradeName.EnhancedSensors,
  cost: 1,
  compatibleVehicleSizes: [
    VehicleSize.Light,
    VehicleSize.Heavy,
    VehicleSize.Superheavy,
    VehicleSize.Behemoth,
  ],
  maxAllowed: 1,
  requiredSpecialRuleGroups: [],
  excludedSpecialRuleGroups: ["Flyer", "Recce"],
  requiredMounts: [],
  exclusiveModifications: [],
};

export const ExplosiveShielding: Modification = {
  type: ModificationType.Upgrade,
  name: UpgradeName.ExplosiveShielding,
  cost: 1,
  compatibleVehicleSizes: [
    VehicleSize.Light,
    VehicleSize.Heavy,
    VehicleSize.Superheavy,
  ],
  maxAllowed: 1,
  requiredSpecialRuleGroups: [],
  excludedSpecialRuleGroups: ["Flyer", "Walker"],
  requiredMounts: [],
  exclusiveModifications: [],
};

export const ImprovedHandling: Modification = {
  type: ModificationType.Upgrade,
  name: UpgradeName.ImprovedHandling,
  cost: 1,
  compatibleVehicleSizes: [
    VehicleSize.Light,
    VehicleSize.Heavy,
    VehicleSize.Superheavy,
    VehicleSize.Behemoth,
  ],
  maxAllowed: 1,
  requiredSpecialRuleGroups: [],
  excludedSpecialRuleGroups: ["Flyer", "Walker", "Fast"],
  requiredMounts: [],
  exclusiveModifications: [],
};

export const ImprovedCountermeasures: Modification = {
  type: ModificationType.Upgrade,
  name: UpgradeName.ImprovedCountermeasures,
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
  requiredMounts: [],
  exclusiveModifications: [],
};

export const IncendiaryAmmunition: Modification = {
  type: ModificationType.Upgrade,
  name: UpgradeName.IncendiaryAmmunition,
  cost: 1,
  compatibleVehicleSizes: [
    VehicleSize.Light,
    VehicleSize.Heavy,
    VehicleSize.Superheavy,
  ],
  maxAllowed: 1,
  requiredSpecialRuleGroups: [],
  excludedSpecialRuleGroups: [],
  requiredMounts: [],
  exclusiveModifications: [],
};

export const IndependentMovementSubroutines: Modification = {
  type: ModificationType.Upgrade,
  name: UpgradeName.IndependentMovementSubroutines,
  cost: 15,
  compatibleVehicleSizes: [VehicleSize.Behemoth],
  maxAllowed: 1,
  requiredSpecialRuleGroups: [],
  excludedSpecialRuleGroups: [],
  requiredMounts: [],
  exclusiveModifications: [],
};

export const JumpJets: Modification = {
  type: ModificationType.Upgrade,
  name: UpgradeName.JumpJets,
  cost: 2,
  compatibleVehicleSizes: [VehicleSize.Light, VehicleSize.Heavy],
  maxAllowed: 1,
  requiredSpecialRuleGroups: ["Walker"],
  excludedSpecialRuleGroups: [],
  requiredMounts: [],
  exclusiveModifications: [],
};

export const LowProfile: Modification = {
  type: ModificationType.Upgrade,
  name: UpgradeName.LowProfile,
  cost: 1,
  compatibleVehicleSizes: [
    VehicleSize.Light,
    VehicleSize.Heavy,
    VehicleSize.Superheavy,
  ],
  maxAllowed: 1,
  requiredSpecialRuleGroups: [],
  excludedSpecialRuleGroups: ["Short"],
  requiredMounts: [],
  exclusiveModifications: [],
};

export const MineClearanceEquipment: Modification = {
  type: ModificationType.Upgrade,
  name: UpgradeName.MineClearanceEquipment,
  cost: 1,
  compatibleVehicleSizes: [
    VehicleSize.Light,
    VehicleSize.Heavy,
    VehicleSize.Superheavy,
  ],
  maxAllowed: 1,
  requiredSpecialRuleGroups: [],
  excludedSpecialRuleGroups: ["Flyer"],
  requiredMounts: [
    MountLocation.Arm,
    MountLocation.Fixed,
    MountLocation.Turret,
  ],
  exclusiveModifications: [],
};

export const OpticRefinement: Modification = {
  type: ModificationType.Upgrade,
  name: UpgradeName.OpticRefinement,
  cost: 1,
  compatibleVehicleSizes: [
    VehicleSize.Light,
    VehicleSize.Heavy,
    VehicleSize.Superheavy,
  ],
  maxAllowed: 1,
  requiredSpecialRuleGroups: [],
  excludedSpecialRuleGroups: [],
  requiredMounts: [],
  exclusiveModifications: [CompromiseName.PoorOptics],
};

export const Ram: Modification = {
  type: ModificationType.Upgrade,
  name: UpgradeName.Ram,
  cost: 1,
  compatibleVehicleSizes: [
    VehicleSize.Light,
    VehicleSize.Heavy,
    VehicleSize.Superheavy,
  ],
  maxAllowed: null,
  requiredSpecialRuleGroups: [],
  excludedSpecialRuleGroups: [],
  requiredMounts: [],
  exclusiveModifications: [],
};

export const ReinforcedFrontArmour: Modification = {
  type: ModificationType.Upgrade,
  name: UpgradeName.ReinforcedFrontArmour,
  cost: 3,
  compatibleVehicleSizes: [
    VehicleSize.Light,
    VehicleSize.Heavy,
    VehicleSize.Superheavy,
  ],
  maxAllowed: 1,
  requiredSpecialRuleGroups: [],
  excludedSpecialRuleGroups: [],
  requiredMounts: [],
  exclusiveModifications: [CompromiseName.LightFrontArmour],
};

export const ReinforcedSideArmour: Modification = {
  type: ModificationType.Upgrade,
  name: UpgradeName.ReinforcedSideArmour,
  cost: 2,
  compatibleVehicleSizes: [
    VehicleSize.Light,
    VehicleSize.Heavy,
    VehicleSize.Superheavy,
  ],
  maxAllowed: null,
  requiredSpecialRuleGroups: [],
  excludedSpecialRuleGroups: ["Walker"],
  requiredMounts: [],
  exclusiveModifications: [CompromiseName.LightSecondaryArmour],
};

export const ReinforcedRearArmour: Modification = {
  type: ModificationType.Upgrade,
  name: UpgradeName.ReinforcedRearArmour,
  cost: 2,
  compatibleVehicleSizes: [
    VehicleSize.Light,
    VehicleSize.Heavy,
    VehicleSize.Superheavy,
  ],
  maxAllowed: null,
  requiredSpecialRuleGroups: [],
  excludedSpecialRuleGroups: [],
  requiredMounts: [],
  exclusiveModifications: [CompromiseName.LightSecondaryArmour],
};

export const ReinforcedMount: Modification = {
  type: ModificationType.Upgrade,
  name: UpgradeName.ReinforcedMount,
  cost: 1,
  compatibleVehicleSizes: [
    VehicleSize.Light,
    VehicleSize.Heavy,
    VehicleSize.Superheavy,
  ],
  maxAllowed: null,
  requiredSpecialRuleGroups: [],
  excludedSpecialRuleGroups: [],
  requiredMounts: [],
  exclusiveModifications: [],
};

export const RepulsorDrive: Modification = {
  type: ModificationType.Upgrade,
  name: UpgradeName.RepulsorDrive,
  cost: 1,
  compatibleVehicleSizes: [
    VehicleSize.Light,
    VehicleSize.Heavy,
    VehicleSize.Superheavy,
  ],
  maxAllowed: 1,
  requiredSpecialRuleGroups: [],
  excludedSpecialRuleGroups: ["Walker", "Float"],
  requiredMounts: [],
  exclusiveModifications: [],
};

export const Resilient: Modification = {
  type: ModificationType.Upgrade,
  name: UpgradeName.Resilient,
  cost: 1,
  compatibleVehicleSizes: [
    VehicleSize.Light,
    VehicleSize.Heavy,
    VehicleSize.Superheavy,
  ],
  maxAllowed: null,
  requiredSpecialRuleGroups: [],
  excludedSpecialRuleGroups: [],
  requiredMounts: [],
  exclusiveModifications: [CompromiseName.LowMorale],
};

export const ReverseFittedGun: Modification = {
  type: ModificationType.Upgrade,
  name: UpgradeName.ReverseFittedGun,
  cost: 0,
  compatibleVehicleSizes: [
    VehicleSize.Light,
    VehicleSize.Heavy,
    VehicleSize.Superheavy,
  ],
  maxAllowed: 1,
  requiredSpecialRuleGroups: [],
  excludedSpecialRuleGroups: [],
  requiredMounts: [MountLocation.Fixed],
  exclusiveModifications: [],
};

export const SecondaryTurretMount: Modification = {
  type: ModificationType.Upgrade,
  name: UpgradeName.SecondaryTurretMount,
  cost: 1,
  compatibleVehicleSizes: [VehicleSize.Superheavy],
  maxAllowed: 1,
  requiredSpecialRuleGroups: [],
  excludedSpecialRuleGroups: [],
  requiredMounts: [MountLocation.Fixed],
  exclusiveModifications: [],
};

export const SelfRepairProtocols: Modification = {
  type: ModificationType.Upgrade,
  name: UpgradeName.SelfRepairProtocols,
  cost: 2,
  compatibleVehicleSizes: [
    VehicleSize.Light,
    VehicleSize.Heavy,
    VehicleSize.Superheavy,
  ],
  maxAllowed: 1,
  requiredSpecialRuleGroups: [],
  excludedSpecialRuleGroups: [],
  requiredMounts: [],
  exclusiveModifications: [],
};

export const ShoulderTurrets: Modification = {
  type: ModificationType.Upgrade,
  name: UpgradeName.ShoulderTurrets,
  cost: 3,
  compatibleVehicleSizes: [VehicleSize.Heavy, VehicleSize.Superheavy],
  maxAllowed: 1,
  requiredSpecialRuleGroups: ["Walker"],
  excludedSpecialRuleGroups: [],
  requiredMounts: [],
  exclusiveModifications: [],
};

export const SmokeBelcher: Modification = {
  type: ModificationType.Upgrade,
  name: UpgradeName.SmokeBelcher,
  cost: 1,
  compatibleVehicleSizes: [
    VehicleSize.Light,
    VehicleSize.Heavy,
    VehicleSize.Superheavy,
  ],
  maxAllowed: 1,
  requiredSpecialRuleGroups: [],
  excludedSpecialRuleGroups: [],
  requiredMounts: [MountLocation.Arm, MountLocation.Turret],
  exclusiveModifications: [],
};

export const SpotterRelay: Modification = {
  type: ModificationType.Upgrade,
  name: UpgradeName.SpotterRelay,
  cost: 1,
  compatibleVehicleSizes: [VehicleSize.Light],
  maxAllowed: 1,
  requiredSpecialRuleGroups: [],
  excludedSpecialRuleGroups: ["Scout"],
  requiredMounts: [],
  exclusiveModifications: [],
};

export const TailGun: Modification = {
  type: ModificationType.Upgrade,
  name: UpgradeName.TailGun,
  cost: 1,
  compatibleVehicleSizes: [
    VehicleSize.Light,
    VehicleSize.Heavy,
    VehicleSize.Superheavy,
  ],
  maxAllowed: 1,
  requiredSpecialRuleGroups: ["Flyer"],
  excludedSpecialRuleGroups: [],
  requiredMounts: [],
  exclusiveModifications: [],
};

export const TargetingProtocols: Modification = {
  type: ModificationType.Upgrade,
  name: UpgradeName.TargetingProtocols,
  cost: 1,
  compatibleVehicleSizes: [
    VehicleSize.Light,
    VehicleSize.Heavy,
    VehicleSize.Superheavy,
  ],
  maxAllowed: 1,
  requiredSpecialRuleGroups: [],
  excludedSpecialRuleGroups: [],
  requiredMounts: [],
  exclusiveModifications: [],
};

export const ToughenedHull: Modification = {
  type: ModificationType.Upgrade,
  name: UpgradeName.ToughenedHull,
  cost: 1,
  compatibleVehicleSizes: [
    VehicleSize.Light,
    VehicleSize.Heavy,
    VehicleSize.Superheavy,
  ],
  maxAllowed: null,
  requiredSpecialRuleGroups: [],
  excludedSpecialRuleGroups: [],
  requiredMounts: [],
  exclusiveModifications: [CompromiseName.WeakHull],
};

export const Transforming: Modification = {
  type: ModificationType.Upgrade,
  name: UpgradeName.Transforming,
  cost: 3,
  compatibleVehicleSizes: [
    VehicleSize.Light,
    VehicleSize.Heavy,
    VehicleSize.Superheavy,
  ],
  maxAllowed: 1,
  requiredSpecialRuleGroups: [],
  excludedSpecialRuleGroups: [],
  requiredMounts: [],
  exclusiveModifications: [],
};

export const TurretGrabber: Modification = {
  type: ModificationType.Upgrade,
  name: UpgradeName.TurretGrabber,
  cost: 1,
  compatibleVehicleSizes: [
    VehicleSize.Light,
    VehicleSize.Heavy,
    VehicleSize.Superheavy,
  ],
  maxAllowed: 1,
  requiredSpecialRuleGroups: [],
  excludedSpecialRuleGroups: [],
  requiredMounts: [MountLocation.Turret],
  exclusiveModifications: [],
};

export const TwinLinked: Modification = {
  type: ModificationType.Upgrade,
  name: UpgradeName.TwinLinked,
  cost: 1,
  compatibleVehicleSizes: [
    VehicleSize.Light,
    VehicleSize.Heavy,
    VehicleSize.Superheavy,
  ],
  maxAllowed: null,
  requiredSpecialRuleGroups: [],
  excludedSpecialRuleGroups: [],
  requiredMounts: [],
  exclusiveModifications: [],
};

export const UpperTurretConfiguration: Modification = {
  type: ModificationType.Upgrade,
  name: UpgradeName.UpperTurretConfiguration,
  cost: 0,
  compatibleVehicleSizes: [
    VehicleSize.Light,
    VehicleSize.Heavy,
    VehicleSize.Superheavy,
  ],
  maxAllowed: 1,
  requiredSpecialRuleGroups: ["Walker"],
  excludedSpecialRuleGroups: [],
  requiredMounts: [],
  exclusiveModifications: [],
};

export const VeteranCrew: Modification = {
  type: ModificationType.Upgrade,
  name: UpgradeName.VeteranCrew,
  cost: 3,
  compatibleVehicleSizes: [
    VehicleSize.Light,
    VehicleSize.Heavy,
    VehicleSize.Superheavy,
  ],
  maxAllowed: 1,
  requiredSpecialRuleGroups: [],
  excludedSpecialRuleGroups: [],
  requiredMounts: [],
  exclusiveModifications: [CompromiseName.GreenCrew],
};

export const Upgrades: readonly Modification[] = [
  AAWeaponConfiguration,
  AbominableHorror,
  AdditionalSponsons,
  CoaxialMount,
  CommunicationsModule,
  EarlyWarningRadarSystem,
  EnginePowerIncrease,
  EnhancedSensors,
  ExplosiveShielding,
  ImprovedHandling,
  ImprovedCountermeasures,
  IncendiaryAmmunition,
  IndependentMovementSubroutines,
  JumpJets,
  LowProfile,
  MineClearanceEquipment,
  OpticRefinement,
  Ram,
  ReinforcedFrontArmour,
  ReinforcedSideArmour,
  ReinforcedRearArmour,
  ReinforcedMount,
  RepulsorDrive,
  Resilient,
  ReverseFittedGun,
  SecondaryTurretMount,
  SelfRepairProtocols,
  ShoulderTurrets,
  SmokeBelcher,
  SpotterRelay,
  TailGun,
  TargetingProtocols,
  ToughenedHull,
  Transforming,
  TurretGrabber,
  TwinLinked,
  UpperTurretConfiguration,
  VeteranCrew,
];

export const UpgradesByName = new Map(Upgrades.map((m) => [m.name, m]));
