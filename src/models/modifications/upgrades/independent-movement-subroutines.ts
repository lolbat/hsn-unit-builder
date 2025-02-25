import { ModificationType, VehicleSize, UpgradeName } from "../../constants";
import Unit from "../../unit";
import { Modification } from "../modifications";

class IndependentMovementSubroutinesUpgrade extends Modification {
  type =  ModificationType.Upgrade;
  name =  UpgradeName.IndependentMovementSubroutines;
  cost =  15;
  compatibleVehicleSizes =  [VehicleSize.Behemoth];
  maxAllowed =  1;
  requiredSpecialRuleGroups =  [];
  excludedSpecialRuleGroups =  [];
  requiredMounts =  [];
  exclusiveModifications =  [];

  applyModificationToUnit(unit: Unit): Unit {
    // No stat changes to apply (more or less)
    return unit;
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

const IndependentMovementSubroutines = new IndependentMovementSubroutinesUpgrade();

export default IndependentMovementSubroutines;