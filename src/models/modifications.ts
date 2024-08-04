import Armour from "./armour";
import {
  CompromiseName,
  ModificationName,
  ModificationType,
  MountLocation,
  UpgradeName,
  VehicleSize,
} from "./constants";
import { EmptyMount } from "./mount";
import {
  CoaxialMount,
  HeavyHullMount,
  HeavySponsonsMount,
  LightHullMount,
  MountType,
  SuperheavyHullMount,
  SuperheavySponsonsMount,
  SuperheavyTurretMount,
} from "./mount-type";
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
    case UpgradeName.AAWeaponConfiguration: {
      const modifiedUnit = Unit.fromUnit(unit);
      modifiedUnit.mounts = modifiedUnit.mounts.map((m) =>
        m.addSpecialOverride("Anti-Air"),
      );
      return modifiedUnit;
    }
    case UpgradeName.AdditionalSponsons: {
      const modifiedUnit = Unit.fromUnit(unit);
      modifiedUnit.mounts.push(
        new EmptyMount(SuperheavySponsonsMount, "AdditionalSponsons", [], true),
      );
      return modifiedUnit;
    }
    case UpgradeName.CoaxialMount: {
      const turretMount = unit.mounts.find(
        (m) => m.type.mountType === MountLocation.Turret && !m.fromModification,
      );

      const modifiedUnit = Unit.fromUnit(unit);
      modifiedUnit.mounts.push(
        new EmptyMount(
          CoaxialMount,
          "CoaxialMount",
          turretMount ? turretMount.specialOverrides : [],
          true,
        ),
      );
      return modifiedUnit;
    }
    case UpgradeName.CommunicationsModule: {
      const turretAndArmMounts = unit.mounts
        .filter(
          (m) =>
            m.type.mountType === MountLocation.Turret ||
            m.type.mountType === MountLocation.Arm,
        )
        .toSorted((a, b) => b.id.localeCompare(a.id));

      if (turretAndArmMounts.length === 0) {
        throw new Error(
          "Cannot apply CommunicationsModule. No Arm or Turrent mount found",
        );
      }

      const mountToRemove = turretAndArmMounts[0];
      const modifiedUnit = Unit.fromUnit(unit);
      modifiedUnit.mounts = modifiedUnit.mounts.filter(
        (m) => m.id !== mountToRemove.id,
      );
      return modifiedUnit;
    }
    case UpgradeName.EnginePowerIncrease: {
      const modifiedUnit = Unit.fromUnit(unit);
      modifiedUnit.movement += 1;
      return modifiedUnit;
    }
    case UpgradeName.EnhancedSensors: {
      if (unit.special.includes("Recce")) {
        return unit;
      }

      const modifiedUnit = Unit.fromUnit(unit);
      modifiedUnit.special = [
        ...modifiedUnit.special.filter((s) => s.localeCompare("Recce") < 0),
        "Recce",
        ...modifiedUnit.special.filter((s) => s.localeCompare("Recce") > 0),
      ];
      return modifiedUnit;
    }
    case UpgradeName.ImprovedHandling: {
      if (unit.special.includes("Fast")) {
        return unit;
      }

      const modifiedUnit = Unit.fromUnit(unit);
      modifiedUnit.special = [
        ...modifiedUnit.special.filter((s) => s.localeCompare("Fast") < 0),
        "Fast",
        ...modifiedUnit.special.filter((s) => s.localeCompare("Fast") > 0),
      ];
      return modifiedUnit;
    }
    case UpgradeName.IncendiaryAmmunition: {
      const modifiedUnit = Unit.fromUnit(unit);
      modifiedUnit.mounts = modifiedUnit.mounts.map((m) =>
        m.addSpecialOverride("Inferno"),
      );
      return modifiedUnit;
    }
    case UpgradeName.LowProfile: {
      if (unit.special.includes("Short")) {
        return unit;
      }

      const modifiedUnit = Unit.fromUnit(unit);
      modifiedUnit.special = [
        ...modifiedUnit.special.filter((s) => s.localeCompare("Short") < 0),
        "Short",
        ...modifiedUnit.special.filter((s) => s.localeCompare("Short") > 0),
      ];
      return modifiedUnit;
    }
    case UpgradeName.MineClearanceEquipment: {
      const turretFixedAndArmMounts = unit.mounts
        .filter(
          (m) =>
            m.type.mountType === MountLocation.Turret ||
            m.type.mountType === MountLocation.Arm ||
            m.type.mountType === MountLocation.Fixed,
        )
        .toSorted((a, b) => {
          const compareMountLocations = a.type.mountType.localeCompare(
            b.type.mountType,
          );

          if (compareMountLocations === 0) {
            return b.id.localeCompare(a.id);
          }

          return compareMountLocations;
        });

      if (turretFixedAndArmMounts.length === 0) {
        throw new Error(
          "Cannot apply MineClearanceEquipment. No Arm, Fixed or Turrent mount found",
        );
      }

      const mountToRemove = turretFixedAndArmMounts[0];
      const modifiedUnit = Unit.fromUnit(unit);
      modifiedUnit.mounts = modifiedUnit.mounts.filter(
        (m) => m.id !== mountToRemove.id,
      );
      return modifiedUnit;
    }
    case UpgradeName.OpticRefinement: {
      const modifiedUnit = Unit.fromUnit(unit);
      modifiedUnit.optics += 2;
      return modifiedUnit;
    }
    case UpgradeName.ReinforcedFrontArmour: {
      const modifiedUnit = Unit.fromUnit(unit);
      modifiedUnit.armour = new Armour(
        modifiedUnit.armour.front + 1,
        modifiedUnit.armour.sides,
        modifiedUnit.armour.rear,
      );
      return modifiedUnit;
    }
    case UpgradeName.ReinforcedSideArmour: {
      const modifiedUnit = Unit.fromUnit(unit);
      modifiedUnit.armour = new Armour(
        modifiedUnit.armour.front,
        modifiedUnit.armour.sides === null
          ? null
          : modifiedUnit.armour.sides + 1,
        modifiedUnit.armour.rear,
      );
      return modifiedUnit;
    }
    case UpgradeName.ReinforcedRearArmour: {
      const modifiedUnit = Unit.fromUnit(unit);
      modifiedUnit.armour = new Armour(
        modifiedUnit.armour.front,
        modifiedUnit.armour.sides,
        modifiedUnit.armour.rear === null ? null : modifiedUnit.armour.rear + 1,
      );
      return modifiedUnit;
    }
    case UpgradeName.RepulsorDrive: {
      if (unit.special.includes("Float")) {
        return unit;
      }

      const modifiedUnit = Unit.fromUnit(unit);
      const filteredSpecials = modifiedUnit.special.filter(
        (s) => s !== "Relentless" && s !== "Short",
      );
      modifiedUnit.special = [
        ...filteredSpecials.filter((s) => s.localeCompare("Float") < 0),
        "Float",
        ...filteredSpecials.filter((s) => s.localeCompare("Float") > 0),
      ];
      return modifiedUnit;
    }
    case UpgradeName.Resilient: {
      const modifiedUnit = Unit.fromUnit(unit);
      modifiedUnit.morale += 1;
      return modifiedUnit;
    }
    case UpgradeName.SecondaryTurretMount: {
      const fixedMount = unit.mounts.find(
        (m) => m.type.mountType === MountLocation.Fixed,
      );

      if (fixedMount === undefined) {
        throw new Error(
          "Could not apply SecondaryTurretMount. No Fixed mount found",
        );
      }

      const modifiedUnit = Unit.fromUnit(unit);
      modifiedUnit.mounts = modifiedUnit.mounts.filter(
        (m) => m.id !== fixedMount.id,
      );
      modifiedUnit.mounts.push(
        new EmptyMount(
          SuperheavyTurretMount,
          "SecondaryTurretMount",
          fixedMount ? fixedMount.specialOverrides : [],
          true,
        ),
      );
      return modifiedUnit;
    }
    case UpgradeName.ShoulderTurrets: {
      let sponsonMount: MountType;
      switch (unit.size) {
        case VehicleSize.Heavy: {
          sponsonMount = HeavySponsonsMount;
          break;
        }
        case VehicleSize.Superheavy: {
          sponsonMount = SuperheavySponsonsMount;
          break;
        }
        default: {
          throw new Error(
            `Cannot apply ShoulderTurrets upgrade to a ${unit.size} vehicle`,
          );
        }
      }

      const modifiedUnit = Unit.fromUnit(unit);
      modifiedUnit.mounts.push(
        new EmptyMount(sponsonMount, "Shoulder Turrets", [], true),
      );
      return modifiedUnit;
    }
    case UpgradeName.SpotterRelay: {
      if (unit.special.includes("Scout")) {
        return unit;
      }

      const modifiedUnit = Unit.fromUnit(unit);
      modifiedUnit.special = [
        ...modifiedUnit.special.filter((s) => s.localeCompare("Scout") < 0),
        "Scout",
        ...modifiedUnit.special.filter((s) => s.localeCompare("Scout") > 0),
      ];
      return modifiedUnit;
    }
    case UpgradeName.TailGun: {
      let hullMount: MountType;
      switch (unit.size) {
        case VehicleSize.Light: {
          hullMount = LightHullMount;
          break;
        }
        case VehicleSize.Heavy: {
          hullMount = HeavyHullMount;
          break;
        }
        case VehicleSize.Superheavy: {
          hullMount = SuperheavyHullMount;
          break;
        }
        default: {
          throw new Error(
            `Cannot apply TailGun upgrade to a ${unit.size} vehicle`,
          );
        }
      }

      const modifiedUnit = Unit.fromUnit(unit);
      modifiedUnit.mounts.push(
        new EmptyMount(hullMount, UpgradeName.TailGun, [], true),
      );
      return modifiedUnit;
    }
    case UpgradeName.AbominableHorror:
    case UpgradeName.EarlyWarningRadarSystem:
    case UpgradeName.ExplosiveShielding:
    case UpgradeName.ImprovedCountermeasures:
    case UpgradeName.JumpJets:
    case UpgradeName.Ram:
    case UpgradeName.ReinforcedMount:
    case UpgradeName.ReverseFittedGun:
    case UpgradeName.SelfRepairProtocols:
    case UpgradeName.SmokeBelcher:
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

export function maxAllowedForModification(
  unit: Unit,
  modification: Modification,
) {
  switch (modification.name) {
    case UpgradeName.AAWeaponConfiguration:
    case UpgradeName.AdditionalSponsons:
    case UpgradeName.CoaxialMount:
    case UpgradeName.EarlyWarningRadarSystem:
    case UpgradeName.CommunicationsModule:
    case UpgradeName.EnhancedSensors:
    case UpgradeName.ExplosiveShielding:
    case UpgradeName.ImprovedHandling:
    case UpgradeName.IncendiaryAmmunition:
    case UpgradeName.JumpJets:
    case UpgradeName.LowProfile:
    case UpgradeName.MineClearanceEquipment:
    case UpgradeName.OpticRefinement:
    case UpgradeName.ReinforcedFrontArmour:
    case UpgradeName.ReinforcedMount:
    case UpgradeName.RepulsorDrive:
    case UpgradeName.ReverseFittedGun:
    case UpgradeName.SecondaryTurretMount:
    case UpgradeName.SelfRepairProtocols:
    case UpgradeName.ShoulderTurrets:
    case UpgradeName.SmokeBelcher:
    case UpgradeName.SpotterRelay:
    case UpgradeName.TailGun:
    case UpgradeName.TargetingProtocols:
    case UpgradeName.Transforming:
    case UpgradeName.TurretGrabber:
    case UpgradeName.UpperTurretConfiguration:
    case UpgradeName.VeteranCrew:
    case CompromiseName.Flammable:
    case CompromiseName.GreenCrew:
    case CompromiseName.LightFrontArmour:
    case CompromiseName.LightSecondaryArmour:
    case CompromiseName.LowMorale:
    case CompromiseName.PoorOptics:
    case CompromiseName.WeakHull: {
      return 1;
    }
    case UpgradeName.ImprovedCountermeasures:
    case UpgradeName.ToughenedHull: {
      switch (unit.size) {
        case VehicleSize.Light: {
          return 1;
        }
        case VehicleSize.Heavy: {
          return 2;
        }
        case VehicleSize.Superheavy:
        case VehicleSize.Behemoth: {
          return 3;
        }
        default: {
          throw new Error(
            `Cannot determine maxmimum allowed instances of ${modification.name}. Unrecognised vehicle size ${unit.size}`,
          );
        }
      }
    }
    case UpgradeName.AbominableHorror:
    case UpgradeName.Ram:
    case UpgradeName.Resilient: {
      return "no-limit";
    }
    case UpgradeName.EnginePowerIncrease:
    case UpgradeName.ReinforcedSideArmour:
    case UpgradeName.ReinforcedRearArmour:
    case UpgradeName.TwinLinked:
    case CompromiseName.EnginePowerReduction:
    case CompromiseName.MainGunRetrofit: {
      return "special";
    }
  }
}

export function isModValidForUnit(unit: Unit, modification: Modification) {
  return (
    hasLessThanMaxInstances(unit, modification) &&
    isOneOfSizes(unit, modification.compatibleVehicleSizes) &&
    meetsSpecialRuleRequirements(unit, modification) &&
    hasAtLeastOneOfMounts(unit, modification.requiredMounts) &&
    hasNoExclusiveModifications(unit, modification) &&
    uniqueRequirementsSatisfied(unit, modification)
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
        modification.requiredSpecialRuleGroups.some((req) => s.includes(req)),
      )) &&
    (modification.excludedSpecialRuleGroups.length === 0 ||
      unit.special.every((s) =>
        modification.excludedSpecialRuleGroups.every((ex) => !s.includes(ex)),
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
  const appliedModification = unit.modifications.find(
    (m) => m.modification.name === modification.name,
  );
  if (appliedModification === undefined) {
    return true;
  }

  const maxAllowed = maxAllowedForModification(unit, modification);
  switch (maxAllowed) {
    case 1:
    case 2:
    case 3: {
      return appliedModification.quantity < maxAllowed;
    }
    case "no-limit":
    case "special": {
      return true;
    }
  }
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

function uniqueRequirementsSatisfied(unit: Unit, modification: Modification) {
  switch (modification.name) {
    case UpgradeName.EnginePowerIncrease: {
      return unit.movement < Math.min(12, unit.vehicleClass.movement * 2);
    }
    case UpgradeName.ReinforcedSideArmour: {
      return (
        unit.armour.sides !== null && unit.armour.sides < unit.armour.front
      );
    }
    case UpgradeName.ReinforcedRearArmour: {
      return unit.armour.rear !== null && unit.armour.rear < unit.armour.front;
    }
    case UpgradeName.TargetingProtocols: {
      const incompatibleWeaponSpecialRules = ["Close Combat", "Close Action"];
      return unit.mounts.some((m) => {
        if (m.weapon === null) {
          return false;
        }
        return m.weapon.special.every((s) =>
          incompatibleWeaponSpecialRules.every((r) => !s.includes(r)),
        );
      });
    }
    case UpgradeName.TwinLinked: {
      const incompatibleWeaponSpecialRules = ["Close Combat", "Bomb", "Burst"];
      return unit.mounts.some((m) => {
        if (m.weapon === null) {
          return false;
        }
        return m.weapon.special.every((s) =>
          incompatibleWeaponSpecialRules.every((r) => !s.includes(r)),
        );
      });
    }
    case CompromiseName.EnginePowerReduction: {
      return unit.movement > 2;
    }
    case CompromiseName.LightFrontArmour: {
      return (
        unit.armour.front >
        Math.max(unit.armour.sides || 0, unit.armour.rear || 0)
      );
    }
    case CompromiseName.WeakHull: {
      return unit.hullPoints > 2;
    }
    default:
      return true;
  }
}
