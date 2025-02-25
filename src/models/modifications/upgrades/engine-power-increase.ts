import { ModificationType, VehicleSize, CompromiseName, UpgradeName } from "../../constants";
import Unit from "../../unit";
import { Modification } from "../modifications";

class EnginePowerIncreaseUpgrade extends Modification {
  type =  ModificationType.Upgrade;
  name =  UpgradeName.EnginePowerIncrease;
  cost =  1;
  compatibleVehicleSizes =  [
    VehicleSize.Light,
    VehicleSize.Heavy,
    VehicleSize.Superheavy,
    VehicleSize.Behemoth,
  ];
  maxAllowed =  null;
  requiredSpecialRuleGroups =  [];
  excludedSpecialRuleGroups =  ["Fast Mover"];
  requiredMounts =  [];
  exclusiveModifications =  [CompromiseName.EnginePowerReduction];

  applyModificationToUnit(unit: Unit): Unit {
    const modifiedUnit = Unit.fromUnit(unit);
    modifiedUnit.movement += 1;
    return modifiedUnit;
  }

  costOfAppliedModification({ size }: Unit, quantity: number): number {
    switch (size) {
      case VehicleSize.Behemoth: {
        return 3 * quantity;
      }
      default: {
        return 1 * quantity;
      }
    }
  }

  costToApplyModification({ size }: Unit): number {
    switch (size) {
      case VehicleSize.Behemoth: {
        return 3;
      }
      default: {
        return 1;
      }
    }
  }

  maxAllowedForModification(): 1 | 2 | 3 | "no-limit" | "special" {
    return "special";
  }

  uniqueRequirementsSatisfied(unit: Unit): boolean {
    return (
      (unit.size === VehicleSize.Behemoth && unit.movement < 8) ||
      unit.movement < Math.min(12, unit.vehicleClass.movement * 2)
    );
  }
}

const EnginePowerIncrease = new EnginePowerIncreaseUpgrade();

export default EnginePowerIncrease;