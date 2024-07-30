import Action from "./actions";
import VehicleClass from "../models/vehicle-class";
import Unit from "../models/unit";
import { LightBattleVehicle } from "../models/vehicle-class";

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
  | { type: "unit-change"; unit: Unit };

export function isUnitFormAction(a: Action): a is UnitFormAction {
  return ["vehicle-class-change", "unit-change"].includes(a.type);
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
    default: {
      throw new Error(`Unhandled action: ${action}`);
    }
  }
}
