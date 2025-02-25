import { ModificationType, VehicleSize, MountLocation, UpgradeName } from "../../constants";
import { EmptyMount } from "../../mount";
import { BehemothSponsonsMount, MountType, SuperheavySponsonsMount } from "../../mount-type";
import Unit from "../../unit";
import { Modification } from "../modifications";

class AdditionalSponsonsUpgrade extends Modification {
  type =  ModificationType.Upgrade;
  name =  UpgradeName.AdditionalSponsons;
  cost =  3;
  compatibleVehicleSizes =  [VehicleSize.Superheavy, VehicleSize.Behemoth];
  maxAllowed =  1;
  requiredSpecialRuleGroups =  [];
  excludedSpecialRuleGroups =  [];
  requiredMounts =  [MountLocation.Sponsons];
  exclusiveModifications =  [];


  applyModificationToUnit(unit: Unit): Unit {
    const modifiedUnit = Unit.fromUnit(unit);

    let mountType: MountType;
    if (unit.size === VehicleSize.Superheavy) {
      mountType = SuperheavySponsonsMount;
    } else if (unit.size === VehicleSize.Behemoth) {
      mountType = BehemothSponsonsMount;
    } else {
      throw new Error(
        `AdditionalSponsons is invalid for ${unit.size} vehicles`,
      );
    }

    modifiedUnit.mounts = modifiedUnit.mounts.addMount(
      new EmptyMount(mountType, "AdditionalSponsons", [], true),
    );
    return modifiedUnit;
  }

  costOfAppliedModification({ size }: Unit): number {
    switch (size) {
      case VehicleSize.Behemoth: {
        return 5;
      }
      default: {
        return 3;
      }
    }
  }

  costToApplyModification({ size }: Unit): number {
    switch (size) {
      case VehicleSize.Behemoth: {
        return 5;
      }
      default: {
        return 3;
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

const AdditionalSponsons = new AdditionalSponsonsUpgrade();

export default AdditionalSponsons;