import { ModificationType, VehicleSize, UpgradeName } from "../../constants";
import Unit from "../../unit";
import { Modification } from "../modifications";

class ImprovedHandlingUpgrade extends Modification {
  type =  ModificationType.Upgrade;
  name =  UpgradeName.ImprovedHandling;
  cost =  1;
  compatibleVehicleSizes =  [
    VehicleSize.Light,
    VehicleSize.Heavy,
    VehicleSize.Superheavy,
    VehicleSize.Behemoth,
  ];
  maxAllowed =  1;
  requiredSpecialRuleGroups =  [];
  excludedSpecialRuleGroups =  ["Flyer", "Walker", "Fast"];
  requiredMounts =  [];
  exclusiveModifications =  [];

  applyModificationToUnit(unit: Unit): Unit {
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

  costOfAppliedModification({ size }: Unit): number {
    switch (size) {
      case VehicleSize.Light: {
        return 1;
      }
      case VehicleSize.Behemoth: {
        return 5;
      }
      default: {
        return 2;
      }
    }
  }

  costToApplyModification({ size }: Unit): number {
    switch (size) {
      case VehicleSize.Light: {
        return 1;
      }
      case VehicleSize.Behemoth: {
        return 5;
      }
      default: {
        return 2;
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

const ImprovedHandling = new ImprovedHandlingUpgrade();

export default ImprovedHandling;