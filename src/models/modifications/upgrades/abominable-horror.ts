import { ModificationType, UpgradeName, VehicleSize } from "../../constants";
import Unit from "../../unit";
import { Modification } from "../modifications";

class AbominableHorrorUpgrade extends Modification {
  type =  ModificationType.Upgrade;
  name =  UpgradeName.AbominableHorror;
  cost =  1;
  compatibleVehicleSizes =  [
    VehicleSize.Light,
    VehicleSize.Heavy,
    VehicleSize.Superheavy,
  ];
  maxAllowed =  null;
  requiredSpecialRuleGroups =  [];
  excludedSpecialRuleGroups =  [];
  requiredMounts =  [];
  exclusiveModifications =  [];

  applyModificationToUnit(unit: Unit): Unit {
    return unit;
  }

  costOfAppliedModification(_unit: Unit, quantity: number): number {
    // First one costs 1, second one costs 2, etc. These are called triangle numbers.
    return (quantity * (quantity + 1)) / 2;
  }

  costToApplyModification(unit: Unit): number {
    // First one costs 1, second one costs 2, etc.
    return this.countInstancesAppliedToUnit(unit) + 1;
  }

  maxAllowedForModification(): 1 | 2 | 3 | "no-limit" | "special" {
    return "no-limit";
  }

  uniqueRequirementsSatisfied(): boolean {
    return true;
  }
}

const AbominableHorror = new AbominableHorrorUpgrade()

export default AbominableHorror;