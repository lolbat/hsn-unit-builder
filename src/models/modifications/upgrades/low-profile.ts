import { ModificationType, VehicleSize, UpgradeName } from "../../constants";
import Unit from "../../unit";
import { Modification } from "../modifications";

class LowProfileUpgrade extends Modification {
  type =  ModificationType.Upgrade;
  name =  UpgradeName.LowProfile;
  cost =  1;
  compatibleVehicleSizes =  [
    VehicleSize.Light,
    VehicleSize.Heavy,
    VehicleSize.Superheavy,
  ];
  maxAllowed =  1;
  requiredSpecialRuleGroups =  [];
  excludedSpecialRuleGroups =  ["Short"];
  requiredMounts =  [];
  exclusiveModifications =  [];

  applyModificationToUnit(unit: Unit): Unit {
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

  costOfAppliedModification(_unit: Unit, quantity: number): number {
    return this.cost * quantity;
  }

  costToApplyModification(): number {
    return this.cost;
  }

  maxAllowedForModification(): 1 | 2 | 3 | "no-limit" | "special" {
    return 1;
  }

  uniqueRequirementsSatisfied(): boolean {
    return true;
  }
}

const LowProfile = new LowProfileUpgrade();

export default LowProfile;