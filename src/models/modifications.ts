import {
  CompromiseName,
  ModificationName,
  ModificationType,
  MountLocation,
  UpgradeName,
  VehicleSize,
} from "./constants";
import Unit from "./unit";

export default interface Modification {
  readonly type: ModificationType;
  readonly name: ModificationName;
  readonly cost: number;
  readonly compatibleVehicleSizes: VehicleSize[];
  readonly maxAllowed: number | null;
  readonly requiredSpecialRuleGroups: readonly string[];
  readonly excludedSpecialRuleGroups: readonly string[];
  readonly requiredMounts: readonly MountLocation[];
  readonly exclusiveModifications: readonly ModificationName[];
}

export interface AppliedModification {
  readonly modification: Modification;
  readonly quantity: number;
}

export function applyModificationToUnit(
  unit: Unit,
  modification: Modification,
) {
  switch (modification.name) {
    case UpgradeName.AAWeaponConfiguration:
    case UpgradeName.AbominableHorror:
    case UpgradeName.AdditionalSponsons:
    case UpgradeName.CoaxialMount:
    case UpgradeName.CommunicationsModule:
    case UpgradeName.EarlyWarningRadarSystem:
    case UpgradeName.EnginePowerIncrease:
    case UpgradeName.EnhancedSensors:
    case UpgradeName.ExplosiveShielding:
    case UpgradeName.ImprovedHandling:
    case UpgradeName.ImprovedCountermeasures:
    case UpgradeName.IncendiaryAmmunition:
    case UpgradeName.JumpJets:
    case UpgradeName.LowProfile:
    case UpgradeName.MineClearanceEquipment:
    case UpgradeName.OpticRefinement:
    case UpgradeName.Ram:
    case UpgradeName.ReinforcedFrontArmour:
    case UpgradeName.ReinforcedSideArmour:
    case UpgradeName.ReinforcedRearArmour:
    case UpgradeName.ReinforcedMount:
    case UpgradeName.RepulsorDrive:
    case UpgradeName.Resilient:
    case UpgradeName.ReverseFittedGun:
    case UpgradeName.SecondaryTurretMount:
    case UpgradeName.SelfRepairProtocols:
    case UpgradeName.ShoulderTurrets:
    case UpgradeName.SmokeBelcher:
    case UpgradeName.SpotterRelay:
    case UpgradeName.TailGun:
    case UpgradeName.TargetingProtocols:
    case UpgradeName.ToughenedHull:
    case UpgradeName.Transforming:
    case UpgradeName.TurretGrabber:
    case UpgradeName.TwinLinked:
    case UpgradeName.UpperTurretConfiguration:
    case UpgradeName.VeteranCrew:
    case CompromiseName.EnginePowerReduction:
    case CompromiseName.Flammable:
    case CompromiseName.GreenCrew:
    case CompromiseName.LightFrontArmour:
    case CompromiseName.LightSecondaryArmour:
    case CompromiseName.LowMorale:
    case CompromiseName.MainGunRetrofit:
    case CompromiseName.PoorOptics:
    case CompromiseName.WeakHull: {
      return unit;
    }
  }
}

export function costOfAppliedModification(
  { size }: Unit,
  { modification: { name, cost }, quantity }: AppliedModification,
) {
  switch (name) {
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
    case UpgradeName.VeteranCrew:
    case CompromiseName.EnginePowerReduction:
    case CompromiseName.Flammable:
    case CompromiseName.GreenCrew:
    case CompromiseName.LightFrontArmour:
    case CompromiseName.LightSecondaryArmour:
    case CompromiseName.LowMorale:
    case CompromiseName.MainGunRetrofit:
    case CompromiseName.PoorOptics:
    case CompromiseName.WeakHull: {
      return cost * quantity;
    }
    case UpgradeName.ImprovedHandling:
    case UpgradeName.TailGun:
    case UpgradeName.TwinLinked: {
      switch (size) {
        case VehicleSize.Light: {
          return quantity;
        }
        default: {
          return quantity * 2;
        }
      }
    }
    case UpgradeName.RepulsorDrive: {
      switch (size) {
        case VehicleSize.Heavy: {
          return quantity * 2;
        }
        default: {
          return quantity;
        }
      }
    }
    case UpgradeName.Transforming: {
      switch (size) {
        case VehicleSize.Light: {
          return quantity * 3;
        }
        case VehicleSize.Heavy: {
          return quantity * 5;
        }
        case VehicleSize.Superheavy: {
          return quantity * 8;
        }
        default: {
          throw new Error(
            `The Transforming upgrade is invalid for the Unit's size. Unit size is ${size}`,
          );
        }
      }
    }
    case UpgradeName.AbominableHorror:
    case UpgradeName.ImprovedCountermeasures:
    case UpgradeName.Ram:
    case UpgradeName.Resilient: {
      // First one costs 1, second one costs 2, etc. These are called triangle numbers.
      return (quantity * (quantity + 1)) / 2;
    }
    case UpgradeName.ReinforcedMount: {
      return 0;
    }
  }
}

export function costToApplyModification(
  { size, modifications }: Unit,
  { name, cost }: Modification,
) {
  const appliedModification = modifications.find(
    (m) => m.modification.name === name,
  );
  let quantity = 0;
  if (appliedModification !== undefined) {
    quantity = appliedModification.quantity;
  }

  switch (name) {
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
    case UpgradeName.VeteranCrew:
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
    case UpgradeName.ImprovedHandling:
    case UpgradeName.TailGun:
    case UpgradeName.TwinLinked: {
      switch (size) {
        case VehicleSize.Light: {
          return 1;
        }
        default: {
          return 2;
        }
      }
    }
    case UpgradeName.RepulsorDrive: {
      switch (size) {
        case VehicleSize.Heavy: {
          return 2;
        }
        default: {
          return 1;
        }
      }
    }
    case UpgradeName.Transforming: {
      switch (size) {
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
            `The Transforming upgrade is invalid for the Unit's size. Unit size is ${size}`,
          );
        }
      }
    }
    case UpgradeName.AbominableHorror:
    case UpgradeName.ImprovedCountermeasures:
    case UpgradeName.Ram:
    case UpgradeName.Resilient: {
      // First one costs 1, second one costs 2, etc.
      return quantity + 1;
    }
    case UpgradeName.ReinforcedMount: {
      return 0;
    }
  }
}

export function isModValidForUnit(unit: Unit, modification: Modification) {
  return (
    hasLessThanMaxInstances(unit, modification) &&
    isOneOfSizes(unit, modification.compatibleVehicleSizes) &&
    meetsSpecialRuleRequirements(unit, modification) &&
    hasAtLeastOneOfMounts(unit, modification.requiredMounts) &&
    hasNoExclusiveModifications(unit, modification)
  );
}

function hasNoExclusiveModifications(unit: Unit, modification: Modification) {
  return (
    modification.exclusiveModifications.length === 0 ||
    unit.modifications.every(
      (m) => !modification.exclusiveModifications.includes(m.modification.name),
    )
  );
}

function meetsSpecialRuleRequirements(unit: Unit, modification: Modification) {
  return (
    (modification.requiredSpecialRuleGroups.length === 0 ||
      unit.special.some((s) =>
        modification.requiredSpecialRuleGroups.includes(s),
      )) &&
    (modification.excludedSpecialRuleGroups.length === 0 ||
      unit.special.every(
        (s) => !modification.excludedSpecialRuleGroups.includes(s),
      ))
  );
}

export function doesNotHaveModification(
  unit: Unit,
  modification: Modification,
) {
  return unit.modifications.every(
    (m) => m.modification.name !== modification.name,
  );
}

export function hasLessThanMaxInstances(
  unit: Unit,
  modification: Modification,
) {
  return (
    modification.maxAllowed === null ||
    unit.modifications.filter((m) => m.modification.name === modification.name)
      .length < (modification.maxAllowed || 1)
  );
}

export function isOneOfSizes(unit: Unit, sizes: VehicleSize[]) {
  return sizes.includes(unit.vehicleClass.size);
}

export function isFlyer(unit: Unit) {
  return unit.special.some((s) => s.includes("Flyer"));
}

export function isNotFlyer(unit: Unit) {
  return unit.special.every((s) => !s.includes("Flyer"));
}

export function isNotFastMover(unit: Unit) {
  return unit.special.every((s) => !s.includes("Fast Mover"));
}

export function isWalker(unit: Unit) {
  return unit.special.some((s) => s.includes("Walker"));
}

export function isNotWalker(unit: Unit) {
  return unit.special.every((s) => !s.includes("Flyer"));
}

export function hasMount(unit: Unit, mount: MountLocation) {
  return unit.mounts.some((m) => mount === m.type.mountType);
}

export function hasAtLeastOneOfMounts(
  unit: Unit,
  mounts: readonly MountLocation[],
) {
  return (
    mounts.length === 0 ||
    unit.mounts.some((m) => mounts.includes(m.type.mountType))
  );
}
