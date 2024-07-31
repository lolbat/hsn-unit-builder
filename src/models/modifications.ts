import { ModificationType, VehicleSize } from "./constants";
import Unit from "./unit";

export interface Modification {
  readonly type: ModificationType;
  readonly name: string;
  readonly cost: number;
  isValidForUnit(unit: Unit): boolean;
  applyToUnit(unit: Unit): Unit;
}

export const Resilient: Modification = {
  type: ModificationType.Upgrade,
  name: "Resilient",
  cost: 1,
  isValidForUnit: function (unit: Unit) {
    return (
      [VehicleSize.Light, VehicleSize.Heavy, VehicleSize.Superheavy].includes(
        unit.vehicleClass.size,
      ) && unit.modifications.find((m) => m.name === "Low Morale") === undefined
    );
  },
  applyToUnit: function (unit: Unit) {
    const modifiedUnit = structuredClone(unit);
    modifiedUnit.morale = unit.morale + 1;
    return modifiedUnit;
  },
};
