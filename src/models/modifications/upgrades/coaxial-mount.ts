import { ModificationType, VehicleSize, MountLocation, UpgradeName } from "../../constants";
import { EmptyMount } from "../../mount";
import { CoaxialMountType } from "../../mount-type";
import Unit from "../../unit";
import { Modification } from "../modifications";

class CoaxialMountUpgrade extends Modification {
  type =  ModificationType.Upgrade;
  name =  UpgradeName.CoaxialMount;
  cost =  1;
  compatibleVehicleSizes =  [VehicleSize.Heavy, VehicleSize.Superheavy];
  maxAllowed =  1;
  requiredSpecialRuleGroups =  [];
  excludedSpecialRuleGroups =  [];
  requiredMounts =  [MountLocation.Turret];
  exclusiveModifications =  [];

  applyModificationToUnit(unit: Unit): Unit {
    const modifiedUnit = Unit.fromUnit(unit);
    modifiedUnit.mounts.addMount(
      new EmptyMount(CoaxialMountType, UpgradeName.CoaxialMount, [], true),
    );
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

const CoaxialMount = new CoaxialMountUpgrade()

export default CoaxialMount;