import Modification from "./modifications";
import {
  ModificationType,
  VehicleSize,
  MountLocation,
  UpgradeName,
  CompromiseName,
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

export function getCostForUpgrade(unit: Unit, modification: Modification) {
  switch (modification.name) {
    case UpgradeName.AAWeaponConfiguration:
    case UpgradeName.AdditionalSponsons:
    case UpgradeName.CoaxialMount:
    case UpgradeName.CommunicationsModule:
    case UpgradeName.EarlyWarningRadarSystem:
    case UpgradeName.EnginePowerIncrease:
    case UpgradeName.EnhancedSensors:
    case UpgradeName.ExplosiveShielding:
    case UpgradeName.IncendiaryAmmunition:
    case UpgradeName.JumpJets:
    case UpgradeName.LowProfile:
    case UpgradeName.MineClearanceEquipment:
    case UpgradeName.OpticRefinement:
    case UpgradeName.ReinforcedFrontArmour:
    case UpgradeName.ReinforcedSideArmour:
    case UpgradeName.ReinforcedRearArmour:
    case UpgradeName.ReverseFittedGun:
    case UpgradeName.SecondaryTurretMount:
    case UpgradeName.SelfRepairProtocols:
    case UpgradeName.ShoulderTurrets:
    case UpgradeName.SmokeBelcher:
    case UpgradeName.SpotterRelay:
    case UpgradeName.TargetingProtocols:
    case UpgradeName.ToughenedHull:
    case UpgradeName.TurretGrabber:
    case UpgradeName.UpperTurretConfiguration:
    case UpgradeName.VeteranCrew: {
      return modification.cost;
    }
    case UpgradeName.ImprovedHandling:
    case UpgradeName.TailGun:
    case UpgradeName.TwinLinked: {
      switch (unit.size) {
        case VehicleSize.Light: {
          return 1;
        }
        default: {
          return 2;
        }
      }
    }
    case UpgradeName.RepulsorDrive: {
      switch (unit.size) {
        case VehicleSize.Heavy: {
          return 2;
        }
        default: {
          return 1;
        }
      }
    }
    case UpgradeName.Transforming: {
      switch (unit.size) {
        case VehicleSize.Light: {
          return 3;
        }
        case VehicleSize.Heavy: {
          return 5;
        }
        case VehicleSize.Superheavy: {
          return 8;
        }
        default: {
          throw new Error(
            `The Transforming upgrade is invalid for the Unit's size. Unit size is ${unit.size}`,
          );
        }
      }
    }
    case UpgradeName.AbominableHorror:
    case UpgradeName.ImprovedCountermeasures:
    case UpgradeName.Ram:
    case UpgradeName.ReinforcedMount:
    case UpgradeName.Resilient:
    default: {
      return null;
    }
  }
}
