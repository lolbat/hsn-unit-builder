import Action from "./actions";
import VehicleClass from "../models/vehicle-class";
import Unit from "../models/unit";
import { LightBattleVehicle } from "../models/vehicle-class";
import { loadUnit, storeUnit } from "../storage/unit-storage";

export interface UnitFormState {
  vehicleClass: VehicleClass;
  unit: Unit;
}

export const initialUnitFormState = {
  vehicleClass: LightBattleVehicle,
  unit: Unit.fromVehicleClass(LightBattleVehicle),
};

export type UnitFormAction =
  | { type: "vehicle-class-change"; vehicleClass: VehicleClass }
  | { type: "unit-change"; unit: Unit }
  | { type: "save-unit" }
  | { type: "load-unit" }
  | { type: "reset-unit" };

export function isUnitFormAction(a: Action): a is UnitFormAction {
  return [
    "vehicle-class-change",
    "unit-change",
    "save-unit",
    "load-unit",
    "reset-unit",
  ].includes(a.type);
}

export default function UnitFormReducer(
  state: UnitFormState,
  action: UnitFormAction,
) {
  switch (action.type) {
    case "vehicle-class-change": {
      const newState: UnitFormState = {
        vehicleClass: action.vehicleClass,
        unit: Unit.fromVehicleClass(action.vehicleClass),
      };
      return newState;
    }
    case "unit-change": {
      const newState: UnitFormState = {
        ...state,
        unit: action.unit,
      };
      return newState;
    }
    case "save-unit": {
      storeUnit(state.unit);
      return state;
    }
    case "load-unit": {
      const loadedUnit = loadUnit();
      if (loadedUnit === null) {
        return state;
      }
      const newState: UnitFormState = {
        vehicleClass: loadedUnit.vehicleClass,
        unit: loadedUnit,
      };
      return newState;
    }
    case "reset-unit": {
      return initialUnitFormState;
    }
    default: {
      throw new Error(`Unhandled action: ${action}`);
    }
  }
}
