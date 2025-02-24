import { ModificationType, UpgradeName, VehicleSize, MountLocation } from "../../constants";
import Unit from "../../unit";
import { Modification } from "../modifications";

class AAWeaponConfigurationUpgrade extends Modification {
    readonly type = ModificationType.Upgrade;
    readonly name = UpgradeName.AAWeaponConfiguration;
    readonly cost = 1;
    readonly compatibleVehicleSizes = [
        VehicleSize.Light,
        VehicleSize.Heavy,
        VehicleSize.Superheavy,
        VehicleSize.Behemoth,
    ];
    readonly maxAllowed = 1;
    readonly requiredSpecialRuleGroups = [];
    readonly excludedSpecialRuleGroups = [];
    readonly requiredMounts = [MountLocation.Hull, MountLocation.Turret];
    readonly exclusiveModifications = [];

    applyModificationToUnit(unit: Unit): Unit {
        const modifiedUnit = Unit.fromUnit(unit);
        modifiedUnit.mounts = modifiedUnit.mounts.addSpecialOverride("Anti-Air");
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

const AAWeaponConfiguration = new AAWeaponConfigurationUpgrade();

export default AAWeaponConfiguration;