import Modification from "./modifications";
import { ModificationType, VehicleSize, MountLocation } from "./constants";
import Unit from "./unit";

export const AAWeaponConfiguration: Modification = {
  type: ModificationType.Upgrade,
  name: "AA Weapon Configuration",
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
  name: "Abominable Horror",
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
  name: "Additional Sponsons",
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
  name: "Coaxial Mount",
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
  name: "Communications Module",
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
  name: "Early Warning Radar System",
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
  name: "Engine Power Increase",
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
  name: "Enhanced Sensors",
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
  name: "Explosive Shielding",
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
  name: "Improved Handling",
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
  name: "Improved Countermeasures",
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
  name: "Incendiary Ammunition",
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
  name: "Jump Jets",
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
  name: "Low Profile",
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
  name: "Mine Clearance Equipement",
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
  name: "Optic Refinement",
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
  name: "Ram",
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
  name: "Reinforced Front Armour",
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
  name: "Reinforced Side Armour",
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
  name: "Reinforced Rear Armour",
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
  name: "Reinforced Mount",
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
  name: "Repulsor Drive",
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
  name: "Resilient",
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
  name: "Reverse Fitted Gun",
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
  name: "Secondary Turret Mount",
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
  name: "Self Repair Protocols",
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
  name: "Shoulder Turrets",
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
  name: "Smoke Belcher",
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
  name: "Spotter Relay",
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
  name: "Tail Gun",
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
  name: "Targeting Protocols",
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
  name: "Toughened Hull",
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
  name: "Transforming",
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
  name: "Turret-Grabber",
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
  name: "Twin-Linked",
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
  name: "Upper Turret Configuration",
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
  name: "Veteran Crew",
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
