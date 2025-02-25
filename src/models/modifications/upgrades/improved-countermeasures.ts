import { ModificationType, VehicleSize, UpgradeName } from "../../constants";
import Unit from "../../unit";
import { Modification } from "../modifications";

class ImprovedCountermeasuresUpgrade extends Modification {
  type =  ModificationType.Upgrade;
  name =  UpgradeName.ImprovedCountermeasures;
  cost =  1;
  compatibleVehicleSizes =  [
    VehicleSize.Light,
    VehicleSize.Heavy,
    VehicleSize.Superheavy,
    VehicleSize.Behemoth,
  ];
  maxAllowed =  null;
  requiredSpecialRuleGroups =  [];
  excludedSpecialRuleGroups =  [];
  requiredMounts =  [];
  exclusiveModifications =  [];

  applyModificationToUnit(unit: Unit): Unit {
    // No stat changes to apply (more or less)
    return unit;
  }

  costOfAppliedModification({ size }: Unit, quantity: number): number {
    switch (size) {
      case VehicleSize.Behemoth: {
        return 2;
      }
      default: {
        return (quantity * (quantity + 1)) / 2;
      }
    }
  }

  costToApplyModification(unit: Unit): number {
    const quantity = this.countInstancesAppliedToUnit(unit);

    switch (unit.size) {
      case VehicleSize.Behemoth: {
        return 2;
      }
      default: {
        return quantity + 1;
      }
    }
  }

  maxAllowedForModification({ size }: Unit): 1 | 2 | 3 | "no-limit" | "special" {
    switch (size) {
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
          `Cannot determine maxmimum allowed instances of ${this.name}. Unrecognised vehicle size ${size}`,
        );
      }
    }
  }

  uniqueRequirementsSatisfied(): boolean {
    return true;
  }
}

const ImprovedCountermeasures = new ImprovedCountermeasuresUpgrade();

export default ImprovedCountermeasures;