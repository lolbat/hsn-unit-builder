import { ModificationType, VehicleSize, UpgradeName } from "../../constants";
import Unit from "../../unit";
import { Modification } from "../modifications";

class EnhancedSensorsUpgrade extends Modification {
  type =  ModificationType.Upgrade;
  name =  UpgradeName.EnhancedSensors;
  cost =  1;
  compatibleVehicleSizes =  [
    VehicleSize.Light,
    VehicleSize.Heavy,
    VehicleSize.Superheavy,
    VehicleSize.Behemoth,
  ];
  maxAllowed =  1;
  requiredSpecialRuleGroups =  [];
  excludedSpecialRuleGroups =  ["Flyer", "Recce"];
  requiredMounts =  [];
  exclusiveModifications =  [];

  applyModificationToUnit(unit: Unit): Unit {
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

  costOfAppliedModification({ size }: Unit): number {
    switch (size) {
      case VehicleSize.Behemoth: {
        return 3;
      }
      default: {
        return 1;
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
    return 1;
  }

  uniqueRequirementsSatisfied(): boolean {
    return true;
  }
}

const EnhancedSensors = new EnhancedSensorsUpgrade();

export default EnhancedSensors;