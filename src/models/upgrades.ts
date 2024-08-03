import Modification from "./modifications";
import {
  ModificationType,
  VehicleSize,
  MountLocation,
  UpgradeName,
} from "./constants";
import Unit from "./unit";

export const AAWeaponConfiguration: Modification = {
  type: ModificationType.Upgrade,
  name: UpgradeName.AAWeaponConfiguration,
  cost: 1,
  compatibleVehicleSizes: [
    VehicleSize.Light,
    VehicleSize.Heavy,
    VehicleSize.Superheavy,
  ],
  maxAllowed: 1,
  requiredSpecialRuleGroups: [],
  excludedSpecialRuleGroups: [],
  requiredMounts: [MountLocation.Hull, MountLocation.Turret],
  exclusiveModifications: [],
  applyToUnit: function (unit: Unit) {
    return unit;
  },
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
  applyToUnit: function (unit: Unit) {
    return unit;
  },
};

export const AdditionalSponsons: Modification = {
  type: ModificationType.Upgrade,
  name: UpgradeName.AdditionalSponsons,
  cost: 3,
  compatibleVehicleSizes: [VehicleSize.Superheavy],
  maxAllowed: 1,
  requiredSpecialRuleGroups: [],
  excludedSpecialRuleGroups: [],
  requiredMounts: [MountLocation.Sponsons],
  exclusiveModifications: [],
  applyToUnit: function (unit: Unit) {
    return unit;
  },
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
  applyToUnit: function (unit: Unit) {
    return unit;
  },
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
  applyToUnit: function (unit: Unit) {
    return unit;
  },
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
  applyToUnit: function (unit: Unit) {
    return unit;
  },
};

export const EnginePowerIncrease: Modification = {
  type: ModificationType.Upgrade,
  name: UpgradeName.EnginePowerIncrease,
  cost: 1,
  compatibleVehicleSizes: [
    VehicleSize.Light,
    VehicleSize.Heavy,
    VehicleSize.Superheavy,
  ],
  maxAllowed: null,
  requiredSpecialRuleGroups: [],
  excludedSpecialRuleGroups: ["Fast Mover"],
  requiredMounts: [],
  exclusiveModifications: ["Engine Power Reduction"],
  applyToUnit: function (unit: Unit) {
    return unit;
  },
};

export const EnhancedSensors: Modification = {
  type: ModificationType.Upgrade,
  name: UpgradeName.EnhancedSensors,
  cost: 1,
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
  applyToUnit: function (unit: Unit) {
    return unit;
  },
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
  applyToUnit: function (unit: Unit) {
    return unit;
  },
};

export const ImprovedHandling: Modification = {
  type: ModificationType.Upgrade,
  name: UpgradeName.ImprovedHandling,
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
  applyToUnit: function (unit: Unit) {
    return unit;
  },
};

export const ImprovedCountermeasures: Modification = {
  type: ModificationType.Upgrade,
  name: UpgradeName.ImprovedCountermeasures,
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
  applyToUnit: function (unit: Unit) {
    return unit;
  },
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
  applyToUnit: function (unit: Unit) {
    return unit;
  },
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
  applyToUnit: function (unit: Unit) {
    return unit;
  },
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
  excludedSpecialRuleGroups: [],
  requiredMounts: [],
  exclusiveModifications: [],
  applyToUnit: function (unit: Unit) {
    return unit;
  },
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
  applyToUnit: function (unit: Unit) {
    return unit;
  },
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
  exclusiveModifications: ["Poor Optics"],
  applyToUnit: function (unit: Unit) {
    return unit;
  },
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
  applyToUnit: function (unit: Unit) {
    return unit;
  },
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
  exclusiveModifications: ["Light Front Armour"],
  applyToUnit: function (unit: Unit) {
    return unit;
  },
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
  exclusiveModifications: ["Light Secondary Armour"],
  applyToUnit: function (unit: Unit) {
    return unit;
  },
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
  exclusiveModifications: ["Light Secondary Armour"],
  applyToUnit: function (unit: Unit) {
    return unit;
  },
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
  applyToUnit: function (unit: Unit) {
    return unit;
  },
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
  excludedSpecialRuleGroups: ["Walker"],
  requiredMounts: [],
  exclusiveModifications: [],
  applyToUnit: function (unit: Unit) {
    return unit;
  },
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
  exclusiveModifications: ["Low Morale"],
  applyToUnit: function (unit: Unit) {
    return unit;
  },
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
  applyToUnit: function (unit: Unit) {
    return unit;
  },
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
  applyToUnit: function (unit: Unit) {
    return unit;
  },
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
  applyToUnit: function (unit: Unit) {
    return unit;
  },
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
  applyToUnit: function (unit: Unit) {
    return unit;
  },
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
  applyToUnit: function (unit: Unit) {
    return unit;
  },
};

export const SpotterRelay: Modification = {
  type: ModificationType.Upgrade,
  name: UpgradeName.SpotterRelay,
  cost: 1,
  compatibleVehicleSizes: [VehicleSize.Light],
  maxAllowed: 1,
  requiredSpecialRuleGroups: [],
  excludedSpecialRuleGroups: [],
  requiredMounts: [],
  exclusiveModifications: [],
  applyToUnit: function (unit: Unit) {
    return unit;
  },
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
  applyToUnit: function (unit: Unit) {
    return unit;
  },
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
  applyToUnit: function (unit: Unit) {
    return unit;
  },
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
  exclusiveModifications: ["Weak Hull"],
  applyToUnit: function (unit: Unit) {
    return unit;
  },
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
  applyToUnit: function (unit: Unit) {
    return unit;
  },
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
  applyToUnit: function (unit: Unit) {
    return unit;
  },
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
  applyToUnit: function (unit: Unit) {
    return unit;
  },
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
  applyToUnit: function (unit: Unit) {
    return unit;
  },
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
  exclusiveModifications: ["Green Crew"],
  applyToUnit: function (unit: Unit) {
    return unit;
  },
};

export const LightHeavySuperheavyUpgrades: readonly Modification[] = [
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

export const LightUpgrades = LightHeavySuperheavyUpgrades.filter((m) =>
  m.compatibleVehicleSizes.includes(VehicleSize.Light),
);
export const HeavyUpgrades = LightHeavySuperheavyUpgrades.filter((m) =>
  m.compatibleVehicleSizes.includes(VehicleSize.Heavy),
);
export const SuperheavyUpgrades = LightHeavySuperheavyUpgrades.filter((m) =>
  m.compatibleVehicleSizes.includes(VehicleSize.Superheavy),
);

export const LightHeavySuperheavyUpgradesByName = new Map(
  LightHeavySuperheavyUpgrades.map((m) => [m.name, m]),
);

export const LightUpgradesByName = new Map(
  LightUpgrades.map((m) => [m.name, m]),
);
export const HeavyUpgradesByName = new Map(
  HeavyUpgrades.map((m) => [m.name, m]),
);
export const SuperheavyUpgradesByName = new Map(
  SuperheavyUpgrades.map((m) => [m.name, m]),
);
