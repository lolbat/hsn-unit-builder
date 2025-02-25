import { ModificationType, VehicleSize, MountLocation, UpgradeName } from "../../constants";
import Unit from "../../unit";
import { Modification } from "../modifications";

class CommunicationsModuleUpgrade extends Modification {
  type =  ModificationType.Upgrade;
  name =  UpgradeName.CommunicationsModule;
  cost =  1;
  compatibleVehicleSizes =  [
    VehicleSize.Light,
    VehicleSize.Heavy,
    VehicleSize.Superheavy,
  ];
  maxAllowed =  1;
  requiredSpecialRuleGroups =  [];
  excludedSpecialRuleGroups =  [];
  requiredMounts =  [MountLocation.Arm, MountLocation.Turret];
  exclusiveModifications =  [];

  applyModificationToUnit(unit: Unit): Unit {
    const turretAndArmMounts = unit.mounts.mounts
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
    modifiedUnit.mounts = modifiedUnit.mounts.removeMountById(
      mountToRemove.id,
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

const CommunicationsModule = new CommunicationsModuleUpgrade();

export default CommunicationsModule;